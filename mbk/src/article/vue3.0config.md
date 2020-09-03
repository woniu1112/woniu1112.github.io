<p id="tittle" data-date="2019-05-03" data-tag="vue3,js">vue-cli 3.0 入门</p>

---------------------------------------

## 环境安装

全新版本的脚手架、逼格非常高、 记住这个名字 `@vue/cli` ，对就是这个 你npm 或者yarn 安装就行了，先保证全局环境有它。

```

   npm install -g @vue/cli

   yarn add global @vue/cli

```

## 创建项目

这里对比下以前`2.X`之前的版本 ，新版本把`插件`以及`模板`等 移植到命令行界面了.

| 旧版 | 创建命令 |
| --- | --- |
| `2.x` | vue init <template-name> <project-name> |
| `3.x` | vue create <project-name> |

来一张图把 ，这里已经有几个默认配好的模板了，我们选最后的`Manually select features`

> `vue-cli3.0`在你创建后会有一个保存当前配置的功能

![image.png](https://upload-images.jianshu.io/upload_images/3119430-259b0aab2159d092.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 配置项目插件和功能

这里就很傻瓜了， 你要集成什么 就选就行了。我这里选个我比较常用的。

*   `TypeScript`
*   `PWA`
*   `Vue-router`
*   `Vuex`
*   `CSS预处理`
*   `eslint prettier`
*   `自动化测试单元测试 、e2e`

![image.png](https://upload-images.jianshu.io/upload_images/3119430-13c1845ed5e508d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我选`LESS`

![image.png](https://upload-images.jianshu.io/upload_images/3119430-d09114ad6754f7dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这里我选`eslint` + `prettier`
![image.png](https://upload-images.jianshu.io/upload_images/3119430-da6ee5c825c3dbd0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这里选择语法检查的方式 保存就检查 还是fix和commit时候检查，我就默认选第一个了

![image.png](https://upload-images.jianshu.io/upload_images/3119430-d14c9ca7469bef60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这里单元测试 插件我选`jest` 
![image.png](https://upload-images.jianshu.io/upload_images/3119430-bf3c3bb723755b0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


这里是把`babel`,`postcss`,`eslint`这些配置文件放哪

1.  独立文件放置
2.  放`package.json`里

个人喜好 这里我独立放 
![image.png](https://upload-images.jianshu.io/upload_images/3119430-035d71d33d2ca3fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

最后就是选择 是否记录一下？ 下次继续使用这套配置 ，这里咱就不存了 这玩呢存多了 我都不知道怎么删 知道的小哥哥小姐姐麻烦 告诉我下哈。
![image.png](https://upload-images.jianshu.io/upload_images/3119430-860ef5fd4098151e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


ok最后确定后 等待装好吧

![image.png](https://upload-images.jianshu.io/upload_images/3119430-aa90ad2c21bd3906.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


嗖 装好了

![image.png](https://upload-images.jianshu.io/upload_images/3119430-6dc4f5b9738cb476.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 启动项目

1.  进入目录,启动项目 这里 `vue-cli 3.x` 默认会打开浏览器 地址也会打在控制台。

```

   yarn serve
   // OR
   npm run serve
```


启动后的界面就不截图了 ，按步骤正常操作下来应该跟之前版本一样。

## 项目分析

首先看下整体目录 比 `2.x`之前 是精简了不少

![image.png](https://upload-images.jianshu.io/upload_images/3119430-d658bf00b3a43bc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

去掉了`2.x` `build`和`config`等目录 ,大部分配置 都集成到`vue.config.js`这里了

> vue.config.js里
> 大概包括了配置 常用的输出路径名、跟目录、预处理、devServer配置、pwa、dll、第三方插件等等
> 详细配置可以看官方文档 [详细config配置](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)

```
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  baseUrl: '/',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  compiler: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},

  // vue-loader 选项
  // 查阅 https://vue-loader.vuejs.org/zh-cn/options.html
  vueLoader: {},

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // 是否使用 `autoDLLPlugin` 分割供应的包？
  // 也可以是一个在 DLL 包中引入的依赖的显性的数组。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#dll-模式
  dll: false,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {
      // `app` 是一个 express 实例
    }
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
```

## 如何随心所欲

### 1\. 服务器配置修改

这里我先改个端口, 修改`vue.config.js` 然后重新启动工程 , 可以看到已经改成`5999`端口了

```
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 5999
  }
}
```

### 2\. 常用webpack配置修改

`webpack`的配置在这个属性里修改`configureWebpack`  

包括`plugins`也可以自己扩展 ，本身尤大已经把常用的都封装了 ，不满足可以自行扩展。

```

这里改个webpack devtool输出方式、默认那个我属实不知道怎么跟踪代码

configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
        config.devtool = 'source-map'
        // mutate config for production...
    }
}

```

其他配置 就不一一介绍了 具体可以看这里[webpack](https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md)

### 3\. 全局变量的设置

在项目根目录 创建二个文件

`.env.development`
`.env.production`

里面配置键值对就行了

> 但要注意 这里必须以`VUE_APP`开头

这样我们就可以自定义个全局变量在某个模式下

```
VUE_APP_MOCK_URL = 'http://xxxx.xxx.xx.xx/mockjs/'
```

比如这样在`axios`中就可以配置根路径了

```

const service = axios.create({
    baseURL: process.env.VUE_APP_MOCK_URL
})
```
[环境变量cli官网配置](https://cli.vuejs.org/zh/guide/mode-and-env.html)
