<template>
  <div class="article-list">
    <div class="list-tittle">
      吐槽文章
    </div>
    <div class="content" v-for="item in articles" :key="item.name" @click="titleClick(item)">
      <span>{{item.tittle}}</span>
      <div class="tag-div">
        <span v-for="(item2, index) in item.tag" :key="index">{{item2}}</span>
      </div>
      <!--<span>阅读</span>-->
    </div>
  </div>
</template>

<script>
import cryptoJs from 'crypto-js'
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
      let info = {
        ...this.getTittle(value),
        name: moduleName,
        url: modulePath.replace(/^.\/(.*\.md)/, '@/article/$1')
      }
      this.articles.push(info)
    })
    this.articles = this.articles.sort((a, b) => this.dateForTime(b.date) - this.dateForTime(a.date))
    window.localStorage.setItem('articles', JSON.stringify(this.articles))
  },
  methods: {
    titleClick (item) {
      // window.localStorage.setItem('article', JSON.stringify(item))
      this.$state.articles = item
      this.$router.push({name: 'view'})
    },
    getTittle (val) {
      let el = document.createElement('div')
      el.innerHTML = val
      let titleDom = el.querySelector('#tittle')
      let articleInfo = {
        tittle: titleDom.innerHTML,
        tag: titleDom.getAttribute('data-tag').split(/,|，/),
        id: cryptoJs.MD5(titleDom.innerHTML).toString(),
        date: titleDom.getAttribute('data-date')
      }
      return articleInfo
    },
    dateForTime (time) {
      return new Date(time).getTime()
    }
  }
}
</script>

<style scoped lang="scss">
  .article-list {
    max-width: 80%;
    margin: 0 auto;
    background: #fff;
    border-radius: 3px;
    box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
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
      & > span:nth-of-type(1) {
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
        color: #1d1d1d;
      }
      .tag-div {
        display: inline-block;
        span {
          display: inline-block;
          color: #2c3e50;
          border: 1px solid #075d513d;
          padding: 0 10px;
          font-size: 14px;
          border-radius: 12px;
          line-height: 25px;
          margin-left: 3px;
        }
      }
    }
    .content:hover {
      box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
      border-radius: 15px;
      -webkit-transform: scale(1.02);
      -moz-transform: scale(1.02);
      -ms-transform: scale(1.02);
      -o-transform: scale(1.02);
      transform: scale(1.02);
    }
    .list-tittle {
      background: #a69292;
      line-height: 52px;
      font-size: 18px;
      color: #fff;
    }
  }
</style>
