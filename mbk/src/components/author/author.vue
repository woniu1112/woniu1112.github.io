<template>
  <div>
    <div class="author">
      <img src="https://avatars2.githubusercontent.com/u/23164486?s=60&v=4" alt="">
      <div class="nav">
        <a href="//www.cnblogs.com/" target="_blank">博客园</a>
        <router-link to="/articleList">文章</router-link>
      </div>
      <p>永无止境</p>
      <CalenderComponent></CalenderComponent>
    </div>
    <div class="contact-type">
      <span>Email：syl18188@163.com</span>
    </div>
  </div>
</template>

<script>
import CalenderComponent from 'vue-calendar-component'
export default {
  name: 'author',
  components: {
    CalenderComponent
  }
}
</script>

<style scoped lang="scss">
  .author {
    background: #fff;
    box-shadow: 2px 2px 16px 5px rgba(219, 219, 219, .8);
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 80px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      margin-top: 10px;
    }
    p {
      text-align: center;
      margin: 20px 0;
    }
    .nav {
      display: flex;
      justify-content: space-around;
      color: #88b99e;
    }
  }
  /deep/ .wh_content_all {
    background-color: #92b59c !important;
    .wh_content_item .wh_isToday {
      background: #ccc;
    }
  }
  .contact-type {
    margin-top: 20px;
  }
</style>
