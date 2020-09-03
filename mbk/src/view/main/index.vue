<template>
  <div class="main-view">
    <!--<animeComponent></animeComponent>-->
    <div class="content">
      <img class="fly-img" src="//cdn.jsdelivr.net/gh/woniu1112/static-cdn/static/img/fly.png" alt="">
      {{content}}
    </div>
    <div class="begin">
      <span @click="handlerClick">start</span>
    </div>
  </div>
</template>

<script>
const animeComponent = resolve => require(['@/components/anime/anime.vue'], resolve)
export default {
  name: 'main-view',
  components: {
    animeComponent
  },
  data () {
    return {
      content: 'Life only onece , be you want to be , do you want to do'
    }
  },
  methods: {
    handlerClick () {
      this.$router.push({name: 'layout'})
    }
  }
}
</script>

<style scoped lang="scss">
.main-view {
  margin: 20vh auto;
  color: #fff;
  & > div {
    font-size: 52px;
    line-height: 88px;
  }
  .content {
    max-width: 736px;
    margin: 0 auto;
    position: relative;
    .fly-img {
      width: 50px;
      position: absolute;
      left: 0;
      top: 80px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      animation: flyAnime 6s linear 1s;
      animation-fill-mode:forwards;
    }
    @keyframes flyAnime {
      0% {
        left: 0;
        top: 80px;
      }
      60% {
        left: 700px;
        top: 80px;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      61% {
        left: 700px;
        top: 80px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      90% {
        left: 500px;
        top: 280px;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      91% {
        left: 500px;
        top: 280px;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        transform: rotate(270deg);
      }
      100% {
        left: 410px;
        top: 250px;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        transform: rotate(270deg);
      }
    }
  }
  .begin {
    span {
      cursor: pointer;
      text-decoration: underline;
      animation: spanColor 2s linear 7s infinite;
    }
    @keyframes spanColor {
      0% {
        color: #fff;
      }
      33% {
        color: #88ff93;
      }
      66% {
        color: #86c3ff;
      }
      100% {
        color: #fff;
      }
    }
  }
}
</style>
