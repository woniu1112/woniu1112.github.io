<template>
  <div class="layout-box">
    <div class="author-box">
      <author></author>
    </div>
    <div class="view-container">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <particles></particles>
    <audio src="//mp3.9ku.com/hot/2014/07-16/642431.mp3" autoplay loop></audio>
  </div>
</template>

<script>
const particles = resolve => require(['@/components/vueParticles/index'], resolve)
const author = resolve => require(['@/components/author/author.vue'], resolve)
const talkArea = resolve => require(['@/components/talkArea/talkArea.vue'], resolve)
export default {
  name: 'layout',
  components: {
    particles,
    author,
    talkArea
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  .layout-box {
    height: 100%;
    width: 80%;
    margin: 50px auto 0;
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
