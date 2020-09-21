<template>
  <div>
    <div class="author">
      <img src="//cdn.jsdelivr.net/gh/woniu1112/static-cdn/static/img/header.png" alt="">
      <p>woniu1112</p>
      <CalenderComponent></CalenderComponent>
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
    background: rgba(255,255,255, .6);
    box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
    border-radius: 3px;
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
      color: #2c3e50;
    }
  }
  /deep/ .wh_content_all {
    background-color: rgba(166,146,146,.6) !important;
    .wh_content_item .wh_isToday {
      background: #ccc;
    }
  }
</style>
