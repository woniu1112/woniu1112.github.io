<p id="tittle" data-date="2019-10-12" data-tag="随笔,js">js的valueOf和toString的隐式调用</p>

------------------------------------------------------------

#柯里化函数
>实现一个函数：
add(1,2)(3)  -> 6
add(1)(2)(3) -> 6
add(1)(2)(3,4) -> 10

```
function add() {
  let args = Array.from(arguments)
  let _add = function () {
    args.push(...arguments)
    return _add
  }
  _add.toString = function () {
    return args.reduce(function (a,b) {
      return a + b
    })
  }
  return _add
}
```
我们发现 add 函数中 _add.toString 并没有被调用怎么会执行呢，其实 toString 被隐士调用了，来看下文分析

# 隐式调用
我们来做个试验验证 `每个对象的toString和valueOf方法都可以被改写，每个对象执行完毕，如果被用以操作JavaScript解析器就会自动调用对象的toString或者valueOf方法`

```
let obj = {
  i: 10,
  toString: function() {
    console.log('toString');
    return this.i;
  },
  valueOf: function() {
    console.log('valueOf');
    return this.i;
  }
}
alert(obj );// 10 toString
alert(+obj ); // 10 valueOf
alert(''+obj ); // 10 valueOf
alert(String(obj )); // 10 toString
alert(Number(obj )); // 10  valueOf
alert(obj == '10'); // true valueOf
alert(obj === '10'); // false
```
我们可能会感觉，如果转换为字符串时调用toString方法，如果是转换为数值时则调用valueOf方法， === 不做隐式转换（数据类型不同直接判断为false）

我们接着做试验

```
var bb = {
  i: 10,
  toString: function() {
    console.log('toString');
    return this.i;
  }
}

alert(bb);// 10 toString
alert(+bb); // 10 toString
alert(''+bb); // 10 toString
alert(String(bb)); // 10 toString
alert(Number(bb)); // 10 toString
alert(bb == '10'); // true toString
```
看着很顺 都调用了 toString , 再看下 valueOf

```
var cc= {
   i: 10,
   valueOf: function() {
     console.log('valueOf');
     return this.i;
   }
 }

 alert(cc);// [object Object]
 alert(+cc); // 10 valueOf
 alert(''+cc); // 10 valueOf
 alert(String(cc)); // [object Object]
 alert(Number(cc)); // 10 valueOf
 alert(cc== '10'); // true valueOf
```
我们会发现有些不同，有些童鞋可能怀疑，对于那个[object Object]，估计是从Object那里继承过来的，我们再去掉它看看

```
Object.prototype.toString = null;

var dd= {
  i: 10,
  valueOf: function() {
    console.log('valueOf');
    return this.i;
  }
}

alert(dd);// 10 valueOf
alert(+dd); // 10 valueOf
alert(''+dd); // 10 valueOf
alert(String(dd)); // 10 valueOf
alert(Number(dd)); // 10 valueOf
alert(dd== '10'); // true valueOf
```

通过以上几个例子我们发现：只重写了toString，对象转换时会无视valueOf的存在来进行转换。但是，如果只重写了valueOf方法，在要转换为字符串的时候会优先考虑toString方法并会在原型链中去找。在不能调用toString的情况下，只能调用valueOf 方法了。

望大家多多提意见在下方评论哈！
