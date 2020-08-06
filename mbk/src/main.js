// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/main.scss'
import VueParticles from 'vue-particles'
import showdown from 'showdown'
// import 'highlight.js/styles/monokai-sublime.css'
// var showdownHighlight = require('showdown-highlight')

Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter()
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
