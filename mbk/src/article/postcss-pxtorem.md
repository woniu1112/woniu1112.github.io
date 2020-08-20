<p id="tittle" data-id="4" data-tag="vue,postcss-pxtorem,js">postcss-pxtorem移动端适配</p>

---------------------------------------

执行命令 安装插件[postcss-pxtorem](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.postcss.com.cn)
```
npm install postcss-pxtorem -D
```
**postcss.config.js** 新建package.json同一个目录下，文件内容如下
```
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 32,//结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
      propList: ['*'], //属性的选择器，*表示通用
      selectorBlackList:[]    忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }
  }
}
```
**postcss.config.js**此文件配置完成后需要重启项目生效

在根目录**src**中新建util目录下新建rem.js等比适配文件
```
// rem等比适配配置文件
// 基准大小
const baseSize = 750 // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
```
在 **main.js**中引入  rem.js  文件，然后启动项目

![](https://upload-images.jianshu.io/upload_images/3119430-11768843d896bf4d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/3119430-8be39109df5a71fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


