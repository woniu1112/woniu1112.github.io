<template>
  <div class="layout-box">
    <div class="author-box">
      <author></author>
      <span id="busuanzi_value_site_pv"></span>
      <span id="busuanzi_value_site_uv"></span>
      <span id="busuanzi_value_page_pv"></span>
    </div>
    <div class="view-container">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <particles></particles>
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
  }
}
</script>

<style scoped lang="scss">
  .layout-box {
    height: 100%;
    width: 80%;
    margin: 50px auto 0;
  }
  .author-box {
    float: left;
    width: 300px;
    position: relative;
    z-index: 100;
  }
  .view-container {
    position: relative;
    margin-left: 300px;
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
