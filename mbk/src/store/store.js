import Vue from 'vue'

const localState = JSON.parse(window.sessionStorage.getItem('myState'))
export const state = Vue.observable({
  articles: localState && localState.articles,
  tags: localState && localState.tags
})
