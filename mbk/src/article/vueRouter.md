<p id="tittle" data-date="2018-10-03" data-tag="vue,vue-router,js">vue-router 权限配置</p>

---------------------------------------------------------------------

利用router.addRoutes方法可以动态添加路由在routes中，
在切换角色时删除routes的方法重置路由
>router.matcher属性做修改，即新的routes就会替换老的routes, 其实就是replaceRoutes()的含义(但是官方没有提供这个API)
```
router.matcher = new Router({
    routes: constantRouterMap
  }).matcher
```
完整代码：
```
import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import { constantRouterMap } from './constantRouterMap'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  fallback: true,
  routes: constantRouterMap,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
// 重置routes
router.$addRoutes = (routes) => {
  router.matcher = new Router({
    routes: constantRouterMap
  }).matcher
  // 调用addroutes方法根据权限添加路由
  router.addRoutes(routes)
}
router.beforeEach((to, from, next) => {
  let title = (to.meta.title ? to.meta.title + '-' : '') + '测试'
  document.title = title || ''
  // 判断是否登录
  let toPath = to.path
  let status = Cookies.get('status')
  if (!status) {
    if (toPath.indexOf('login') < 0) {
      next({ path: '/login' })
    }
  } else {
    next()
  }
  next()
})
// 当路由初始化完成后调用回调
router.onReady(() => {
  let status = Cookies.get('status')
  if (status && window.localStorage.getItem('permission')) { // 判断是否登录和是否选择了角色
    store.dispatch('getMenuData')  // 后台返回菜单数据
      .then(e => {
        router.$addRoutes(store.state.menu.newItems)
      })
  }
})
router.afterEach((route, redirect) => {
})

export default router

```
