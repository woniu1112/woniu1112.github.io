
<p id="tittle" data-id="1" data-tag="随笔">拿到npm命令行中的一些属性</p>

--------------------------------------------

#### `npm_package_属性名`可以拿到package.json 文件中的属性值
package.json 文件
```
{
"name":"foo",

"version":"1.2.5",

"scripts":{

"view":"node view.js"
}
```
> `process.env.npm_package_name` 返回结果为  属性 “name” 的值 ‘foo’

#### **npm_lifecycle_event** 返回当前正在运行的脚本名称

>执行 `npm run dev` ， `process.env.npm_lifecycle_event` 返回的结果为 ‘dev’

#### **npm_config_**

>例如执行的命令为 `npm run dev --test` , 则 `process.env.npm_config_test` 返回值为  true
`npm run dev --cdn` 则 `process.env.npm_config_cdn` 返回值为  true

#### 执行顺序
如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。

如果是并行执行（即同时的平行执行），可以使用**&**符号。
```
$ npm run script1.js&npm run script2.js
```
如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用**&&**符号。
```
$ npm run script1.js&&npm run script2.js
```
