<p id="tittle" data-date="2020-12-08" data-tag="随笔,js,node">cli搭建</p>

------------------------------------------------------------

> 我们都知道 vue-cli 可是这cli 是怎么实现的呢，下面我们来实现一个自己的 cli

**解决痛点：**
* 项目配置繁琐、耗时，重复无意义的工作
* 项目结构不统一、不规范
* 前端项目类型繁多，不同项目不同配置，管理成本高
* 脚手架也可以是一套命令集，不只用来创建项目

# 用到的 node 知识
**process.argv 接收命令行参数**、**process.cwd()获取当前文件绝对地址**
```
// 终端执行
my-cli init projectName

process.argv
/* [
  'D:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\USER\\AppData\\Roaming\\npm\\node_modules\\s-cli\\bin\\cli',
  'init',
  'projectName'
] */
process.cwd()
/*
  E:\study\node\template
*/
```
# 常用到的几个库
[**commander命令行界面**](https://www.npmjs.com/package/commander)
用来编写指令和处理命令行参数的
```
const program = require('commander')
// 程序命令分析、处理
program.version('1.0.0')
	.command('init <name>')
	.description('generate a new project')
	.action(name => {
		console.log(name)
	})
program.parse(process.argv)
```
**yargs处理命令行参数**

类似 `commander`，还有`minimist`库，都是处理命令行参数
```
var argv = require('yargs').argv;
console.log('hello ', argv.name);

// 测试
s-cli --name=woniu    // hello  woniu
```
[**inquirer**](https://www.npmjs.com/package/inquirer)

输入交互库，就是你在创建项目的时候，输入项目名，项目描述等等
```
const inquirer = require('inquirer')
const promptList = [
	{
		type: 'input', // type: 默认 input，还可以是：number, confirm, list, rawlist, expand, checkbox, password, editor
		name: 'name',
		default: 'vue2-m-template',
		message: 'project name:'
	},
	{
		type: 'input',
		name: 'version',
		default: '1.0.0',
		message: 'version:'
	},
	{
		type: 'input',
		name: 'description',
		message: 'project description:'
	},
	{
		type: 'input',
		name: 'author',
		message: 'author:'
	}
]
inquirer.prompt(promptList).then(async answer => {
			console.log(answer)
		})
```
[参考](https://blog.csdn.net/qq_26733915/article/details/80461257)

**shelljs**
> -f：强制删除文件;
-i：删除之前先询问用户;
-r：递归处理目录;
-v：显示处理过程;
echo：在控制台输出指定内容
exit(code)：以退出码为code退出当前进程
```
const shell = require('shelljs')
shell.rm('-rf','out/test');//强制递归删除out/Release目录
shell.cp('-r','stuff/','out/test');//将`stuff/`中所有内容拷贝至`out/Release`目录
shell.mv(`./ssr-with-${language}`, `./${option.appName}`) // 把文件移到文件
```
[参考](https://juejin.cn/post/6844903847064764429)

**ora加载工具**
显示loading动画
```
const ora = require('ora');
const ora1 = ora('正在创建...')
ora1.start()
setTimeout(function(){
    ora1.succeed('构建成功');
}, 1000)
```
**chalk**
用来修改控制台输出内容样式的，比如颜色

```
const chalk = require('chalk')
const glog = data => console.log(chalk.green(data))
const rlog = data => console.log(chalk.red(data))
glog('green word')
rlog('red word')
```
**git-clone**
用来下载远程模板，支持 github、gitlab等。

```
const gitClone = require('git-clone')
// 拉取模板
const cloneRp = (answer) => {
	return new Promise((resolve, reject) => {
		gitClone('https://github.com/woniu1112/vue2-m-template.git', path.resolve(process.cwd(), answer.name), null, () => {
			// glog('拉取完成')
			ora1.succeed(`创建完成,项目地址：${path.resolve(process.cwd(), answer.name)}`)
			resolve()
		})
	})
}
```
扩展：
```
Github API 接口

// RC 配置下载模板的地方，给 github 的 api 使用
https://api.github.com/users/xxx/repos // https://api.github.com/${type}/${registry}/repos
curl -u name:secret https://api.github.com/user/repos
https://api.github.com/users/xxx // xxx的用户信息，包含粉丝数
https://api.github.com/users/xxx/keys  // xxx的 ssh key
https://api.github.com/users/xxx/gpg_keys // xxx的gpg
https://api.github.com/users/xxx/followers?page=2 // xxx的粉丝
https://api.github.com/users/xxx/following?page=2 // xxx关注谁
https://api.github.com/orgs/bitcoin bitcoin项目的信息
https://api.github.com/orgs/bitcoin/repos bitcoin项目的repos
https://api.github.com/repos/bitcoin/bitcoin
https://api.github.com/repos/bitcoin/bitcoin/contributors bitcoin的贡献者
```
[github API 相关](https://segmentfault.com/a/1190000015144126)

**Handlebars模板引擎**
```
const Handlebars = require('handlebars')
var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
console.log(template({ doesWhat: "rocks!" }));  // 进行编译并输出
```
**ini 格式转换**
```
const fs = require('fs'), { decode, encode } = require('ini')
const config = decode.parse(fs.readFileSync('./config.ini', 'utf-8'))
/*
{
  '<!DOCTYPE html>': true,
  '<html lang': '"en">',
  '<head>': true,
  '<meta charset': '"UTF-8">',
  '<meta name': '"viewport" content="width=device-width, initial-scale=1.0">',
  '<title>Document</title>': true,
  '</head>': true,
  '<body>': true,
  '<p>ddddddddddd</p>': true,
  '</body>': true,
  '</html>': true
}
*/
```
**简单 的cli 示例**

```
#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const path = require('path')
const inquirer = require('inquirer')
const ora = require('ora')
const gitClone = require('git-clone')
const fs = require('fs')
const shelljs = require('shelljs')

// console.log(process.argv)
const glog = data => console.log(chalk.green(data))
const rlog = data => console.log(chalk.red(data))

const ora1 = ora('正在创建...')

const promptList = [
	{
		type: 'input', // type: 默认 input，还可以是：number, confirm, list, rawlist, expand, checkbox, password, editor
		name: 'name',
		default: 'vue2-m-template',
		message: 'project name:'
	},
	{
		type: 'input',
		name: 'version',
		default: '1.0.0',
		message: 'version:'
	},
	{
		type: 'input',
		name: 'description',
		message: 'project description:'
	},
	{
		type: 'input',
		name: 'author',
		message: 'author:'
	}
]

// 拉取模板
const cloneRp = (answer) => {
	return new Promise((resolve, reject) => {
		gitClone('https://github.com/woniu1112/vue2-m-template.git', path.resolve(process.cwd(), answer.name), null, () => {
			// glog('拉取完成')
			ora1.succeed(`创建完成,项目地址：${path.resolve(process.cwd(), answer.name)}`)
			resolve()
		})
	})
}

// 读取package.json 文件并修改部分内容
const readPackageFile = (answer) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.resolve(process.cwd(), `${answer.name}/package.json`),'utf-8', async (err, result) => {
			result = JSON.parse(result)
			result = Object.assign(result, answer)
			await writePackageFile(result)
			resolve()
		})
	})
}

// 写入 package.json 文件
const writePackageFile = (content) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(path.resolve(process.cwd(), `${content.name}/package.json`), JSON.stringify(content, null , 4), 'utf-8', (err, result) => {
			rmGitFile(content.name)
			glog(`you can do
=========================
cd ${content.name}
npm install
npm run dev
=========================
				`)
			resolve()
		})
	})
}

// 删除 .git  文件
const rmGitFile =  function (projectName) {
	shelljs.rm('-rf', path.resolve(process.cwd(), `${projectName}/.git`))
}

// 程序命令分析、处理
program.version('1.0.0')
	.command('init <name>')
	.description('generate a new project')
	.action(name => {
		promptList[0].default = name
		inquirer.prompt(promptList).then(async answer => {
			console.log(answer)
			ora1.start()
			await cloneRp(answer)
			await readPackageFile(answer)
		})
	})
program.parse(process.argv)
```

**扩展**
扩展：npm link把my-cli注册到全局，然后链接到工程目录，可以直接去执行（把当前目录放到当前环境变量）

```
// package.json bin
{
  "name": "syl-cli",
  "version": "1.0.7",
  "description": "",
  "main": "index.js",
  "bin": {
    "syl-cli": "./bin/index.js" //告诉package.json,我的bin叫q-cli,它可执行的文件路径是bin/q-cli.js
  },
  "dependencies": {
    "chalk": "^4.1.0",
    "commander": "^6.2.0",
    "download-git-repo": "^3.0.2",
    "git-clone": "^0.1.0",
    "inquirer": "^7.3.3",
    "ora": "^5.1.0",
    "shelljs": "^0.8.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "syl",
  "license": "ISC"
}
```
