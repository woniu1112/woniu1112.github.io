<template>
  <div class="showArticle">
    <div id="markdownBox">
      <div id="write" v-html="readme"></div>
      <div class="talk-area">
        <talkArea :articles="articles"></talkArea>
      </div>
    </div>
    <!--<button class="btn" @click="talkArticle">{{btnword}}</button>-->
    <!--<div class="talk-area" :style="{width: talkAreaWidth, opacity: talkAreaWidth ? 1 : 0}">-->
      <!--<talkArea :articles="articles"></talkArea>-->
    <!--</div>-->
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
  computed: {
    articles () {
      return this.$state.articles
    }
  },
  watch: {
    articles: {
      handler: 'initRender',
      immediate: true
    }
  },
  data () {
    return {
      readme: '',
      // btnword: '吐槽',
      talkAreaWidth: 0
    }
  },
  mounted () {
  },
  methods: {
    initRender (newVal) {
      let name = this.articles.name
      this.readme = require('@/article/' + name + '.md')
    }
    // talkArticle () {
    //   if (this.btnword === '吐槽') {
    //     this.talkAreaWidth = '56%'
    //   } else {
    //     this.talkAreaWidth = 0
    //   }
    //   this.btnword = this.btnword === '吐槽' ? '放弃' : '吐槽'
    // }
  }
}
</script>

<style scoped lang="scss">
  .showArticle {
    position: relative;
    .btn {
      position: absolute;
      top: 18px;
      left: 10%;
      background: #92b59c;
      color: #fff;
      border: none;
      line-height: 33px;
      padding: 0 10px;
      border-radius: 3px;
      width: 30px;
      cursor: pointer;
      outline: none;
    }
    .talk-area {
      /*position: absolute;*/
      /*top: 32px;*/
      /*left: 6.4%;*/
      width: 100%;
      -webkit-transition: ease-in-out .5s;
      -moz-transition: ease-in-out .5s;
      -ms-transition: ease-in-out .5s;
      -o-transition: ease-in-out .5s;
      transition: ease-in-out .5s;
    }
  }
  #markdownBox {
    max-width: 80%;
    margin: 0 auto;
    background: #ac9a9a;
    border-radius: 3px;
    box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
    overflow: auto;
    min-height: 90vh;
  }
</style>
