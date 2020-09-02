// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/main.scss'
import VueParticles from 'vue-particles'
import {state} from '@/store/store.js'

Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.prototype.$state = state
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
