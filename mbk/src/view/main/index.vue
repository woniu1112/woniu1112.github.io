<template>
  <div class="main-view">
    <animeComponent></animeComponent>
    <div class="content">
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
  margin: 0 auto;
  color: #fff;
  & > div {
    font-size: 52px;
    line-height: 88px;
  }
  .content {
    max-width: 736px;
    margin: 0 auto;
  }
  .begin {
    span {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
