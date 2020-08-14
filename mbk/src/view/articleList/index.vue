<template>
  <div class="article-list">
    <div class="list-tittle">
      吐槽文章
    </div>
    <div class="content" v-for="item in articles" :key="item.name" @click="titleClick(item)">
      <span>{{item.tittle}}</span>
      <span>阅读</span>
    </div>
  </div>
</template>

<script>
const modulesFiles = require.context('@/article', true, /.md$/)
export default {
  name: 'article-list',
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    modulesFiles.keys().map(modulePath => {
      const moduleName = modulePath.replace(/^.\/(.*)\.md/, '$1')
      const value = modulesFiles(modulePath)
      this.articles.push({
        name: moduleName,
        tittle: this.getTittle(this.md2html(value)),
        url: modulePath.replace(/^.\/(.*\.md)/, '@/article/$1')
      })
    })
    console.log(this.articles)
  },
  methods: {
    titleClick (item) {
      window.localStorage.setItem('article', JSON.stringify(item))
      this.$router.push({name: 'view'})
    },
    getTittle (val) {
      let el = document.createElement('div')
      el.innerHTML = val
      return el.querySelector('#tittle').innerHTML
    }
  }
}
</script>

<style scoped lang="scss">
  .article-list {
    max-width: 80%;
    margin: 0 auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 16px 5px rgba(219, 219, 219, .8);
    overflow: auto;
    height: 90vh;
    .content {
      margin: 0px 20px;
      cursor: pointer;
      border-bottom: 1px solid #e9eee6;
      line-height: 40px;
      color: #2c3e50;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      border-radius: 15px;
      overflow: hidden;
      -webkit-transition: ease-in .2s;
      -moz-transition: ease-in .2s;
      -ms-transition: ease-in .2s;
      -o-transition: ease-in .2s;
      transition: ease-in .2s;
      span:nth-of-type(1) {
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
        color: #88b99e;
      }
    }
    .content:hover {
      box-shadow: 2px 2px 16px 5px rgba(219, 219, 219, .8);
      border-radius: 15px;
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
      -ms-transform: scale(1.02);
      -o-transform: scale(1.02);
      transform: scale(1.02);
    }
    .list-tittle {
      background: #92b59c;
      line-height: 52px;
      font-size: 18px;
      color: #fff;
    }
  }
</style>
