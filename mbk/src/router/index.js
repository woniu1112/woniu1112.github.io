import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout'
import view from '@/view/showArticle'
import articleList from '@/view/articleList'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'layout',
    redirect: 'articleList',
    component: layout,
    children: [
      {
        path: '/view',
        name: 'view',
        component: view
      },
      {
        path: '/articleList',
        name: 'articleList',
        component: articleList
      }
    ]
  }
]

const router = new Router({
  mode: 'hash',
  fallback: true,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
export default router
