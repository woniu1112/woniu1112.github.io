<template>
  <div class="layout-box">
    <mainHeader></mainHeader>
    <div class="main">
      <div class="author-box">
        <author></author>
        <tagBall></tagBall>
      </div>
      <div class="view-container">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <mainFooter></mainFooter>
    <!--<particles></particles>-->
    <audio src="//mp3.9ku.com/hot/2014/07-16/642431.mp3" autoplay loop></audio>
  </div>
</template>

<script>
const particles = resolve => require(['@/components/vueParticles/index'], resolve)
const author = resolve => require(['@/components/author/author.vue'], resolve)
const talkArea = resolve => require(['@/components/talkArea/talkArea.vue'], resolve)
const tagBall = resolve => require(['@/components/tag-cloud/tag-ball.vue'], resolve)
const mainHeader = resolve => require(['./components/header.vue'], resolve)
const mainFooter = resolve => require(['./components/footer.vue'], resolve)
export default {
  name: 'layout',
  components: {
    particles,
    author,
    talkArea,
    tagBall,
    mainHeader,
    mainFooter
  },
  data () {
    return {
      domTagBall: ''
    }
  },
  mounted () {
    this.$nextTick(vm => {
      document.body.addEventListener('scroll', this.bodyScroll, false)
    })
  },
  methods: {
    bodyScroll (e) {
      let scrollTop = e.target.scrollTop
      let mainHeader = document.querySelector('#mainHeader')
      if (scrollTop > 0) {
        mainHeader.style.background = 'rgba(0,0,0,.2)'
      }
      if (scrollTop === 0) {
        mainHeader.style.background = 'rgba(0,0,0,.8)'
      }
    }
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.bodyScroll)
  }
}
</script>

<style scoped lang="scss">
  .main {
    margin: 58px auto 20px;
    width: 80%;
  }
  @media screen and (max-width: 1020px){
    .layout-box {
      width: 98%;
    }
  }
  .author-box {
    float: left;
    width: 20%;
    min-width: 250px;
    position: relative;
    z-index: 100;
  }
  .view-container {
    position: relative;
    margin-left: 20%;
    padding: 0 10px;
    z-index: 100;
  }
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: scale(1.2);
    opacity: 0;
  }
</style>
