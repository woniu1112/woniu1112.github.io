<template>
  <div class="main-header" id="mainHeader">
    <div class="container">
      <router-link to="/">首页</router-link>
      <a href="//www.cnblogs.com/" target="_blank">博客园</a>
      <router-link to="/articleList">文章</router-link>
      <span>woniu1112</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped lang="scss">
.main-header {
  background: rgba(0,0,0,.8);
  height: 38px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 1s;
  .container {
    width: 80%;
    margin: 0 auto;
    text-align: right;
    line-height: 38px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      margin-right: 15px;
    }
    span {
      color: #fff;
    }
    img {
      border-radius: 50%;
      width: 32px;
      vertical-align: middle;
      margin-bottom: 1px;
      margin-left: 15px;
    }
  }
}
</style>
