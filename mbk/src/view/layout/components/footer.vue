<template>
  <div class="main-footer">
    <div>
      Contact author : Email-syl18188@163.com
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-footer'
}
</script>

<style scoped lang="scss">
.main-footer {
  background: rgba(0,0,0,.2);
  height: 50px;
  & > div {
    width: 80%;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
  }
}
</style>
