<template>
  <div class="talk-area">
    评论区
    <div  id="gitalk-container"  ></div>
  </div>
</template>

<script>
export default {
  name: 'talk-area',
  data () {
    return {
      gitalk: new Gitalk({
        // id: '1',
        clientID: '627fafddf767c8014821',
        clientSecret: '835037abb7b9be36bf5ef50d7249bd80a7493c92',
        repo: 'talkArea',
        owner: 'woniu1112', //
        admin: ['woniu1112'], // github用户名
        // labels: ['woniu1112'],
        perPage: 50,
        distractionFreeMode: false
      })
    }
  },
  mounted () {
    this.gitalk.render('gitalk-container')
  }
}
</script>

<style scoped lang="scss">

</style>
