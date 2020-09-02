<template>
  <div class="main-view">
    <div class="content">
      life is so long , be you want to be , do you want to do
    </div>
    <div class="begin">
      <span @click="handlerClick">start</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-view',
  methods: {
    handlerClick () {
      this.$router.push({name: 'layout'})
    }
  }
}
</script>

<style scoped lang="scss">
.main-view {
  margin: 30vh auto;
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
