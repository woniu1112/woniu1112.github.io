<template>
  <div class="talk-area">
    <p class="title">评论区</p>
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'talk-area',
  props: ['articles'],
  data () {
    return {
      gitalk: {}
    }
  },
  watch: {
    articles: {
      handler (val) {
        this.gitalk = {}
        document.querySelector('#gitalk-container').innerHTML = ''
        this.initGitTalk(val.id)
      }
    }
  },
  mounted () {
    // let id = JSON.parse(window.localStorage.getItem('article')).id
    this.initGitTalk(this.articles.id)
  },
  methods: {
    initGitTalk (id) {
      this.gitalk = new Gitalk({
        id: id || '',
        title: this.$state.articles.tittle,
        clientID: '627fafddf767c8014821',
        clientSecret: '835037abb7b9be36bf5ef50d7249bd80a7493c92',
        repo: 'talkArea',
        owner: 'woniu1112', //
        admin: ['woniu1112'], // github用户名
        // labels: ['woniu1112'],
        perPage: 50,
        distractionFreeMode: false
      })
      this.gitalk.render('gitalk-container')
    }
  }
}
</script>

<style scoped lang="scss">
.talk-area {
  background: rgba(255, 255, 255, .9);
  box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
  overflow: hidden;
  margin-top: 20px;
  .title {
    font-weight: bold;
    background: #a38a8a;
    margin: 0;
    height: 40px;
    text-align: center;
    color: #fff;
    line-height: 40px;
  }
}
</style>
<style lang="scss">
  #gitalk-container {
    padding: 0 5px;
    /*background: #bdbbbb;*/
    .gt-container .gt-meta {
      margin: 0!important;
      padding: 8px 0;
      border: none;
    }
    .gt-comments {
      /*height: 50vh;*/
      /*overflow: auto;*/
    }
  }
</style>
