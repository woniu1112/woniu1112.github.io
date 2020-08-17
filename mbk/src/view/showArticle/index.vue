<template>
  <div class="showArticle">
    <div id="markdownBox">
      <div id="write" v-html="readme"></div>
      <talkArea></talkArea>
    </div>
  </div>
</template>

<script>
import '@/styles/vue-dark.css'
const talkArea = resolve => require(['@/components/talkArea/talkArea.vue'], resolve)
export default {
  name: 'showArticle',
  components: {
    talkArea
  },
  data () {
    return {
      readme: ''
    }
  },
  mounted () {
    let name = JSON.parse(window.localStorage.getItem('article')).name
    this.readme = require('@/article/' + name + '.md')
  }
}
</script>

<style scoped lang="scss">
  #markdownBox {
    max-width: 80%;
    margin: 0 auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 16px 5px rgba(219, 219, 219, .8);
    overflow: auto;
    height: 90vh;
  }
</style>
