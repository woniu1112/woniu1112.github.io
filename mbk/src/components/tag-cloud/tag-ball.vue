<template>
  <div class="tag-ball" id="tagBall">
    <div class="container" id="tagBox">
      <p>标签云</p>
      <div id="myCanvasContainer" class="canvas-container">
        <canvas width="480" height="350" id="myCanvas" ref="canvas"></canvas>
      </div>
      <div id="tags">
        <ul>
          <li v-for="item in tags" :key="item" @click="titleClick(item)"><a href="javascript: void(0)">{{ item }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tag-ball',
  data () {
    return {
      tags: this.$state.tags || [],
      btnContent: '开始',
      running: false,
      domtagBall: '',
      offsetTop: ''
    }
  },
  mounted () {
    this.setElCanvasStyle()
    this.$nextTick(() => {
      this.initTagCanvas()
      this.domtagBall = document.querySelector('#tagBall')
      this.offsetTop = this.domtagBall.offsetTop
      document.body.addEventListener('scroll', this.bodyScroll, false)
    })
  },
  beforeDestroy () {
    document.body.removeEventListener('scroll', this.bodyScroll)
  },
  methods: {
    bodyScroll (e) {
      if (e.target.scrollTop > this.offsetTop) {
        this.domtagBall.setAttribute('class', 'positon-cloud tag-ball')
      } else {
        this.domtagBall.setAttribute('class', 'tag-ball')
      }
    },
    titleClick (item) {
      // if (this.$route.name !== 'view') {
      this.$router.push({name: 'articleList', query: {type: item}})
      // }
    },
    start () {
      this.btnContent = '停止'
      window.TagCanvas.SetSpeed('myCanvas', [5, 1])
    },
    stop () {
      this.btnContent = '开始'
      window.TagCanvas.SetSpeed('myCanvas', [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)])
    },
    /**
     * 设置canvas样式
     */
    setElCanvasStyle () {
      var canvas = this.$refs.canvas
      canvas.width = document.querySelector('#tagBox').offsetWidth
      canvas.height = 300
    },
    /**
     * 初始化tagCanvas
     */
    initTagCanvas () {
      try {
        window.TagCanvas.Start('myCanvas', 'tags', {
          // textHeight: 20,
          textColour: null,
          pulsateTo: 0,
          outlineThickness: 0,
          dragControl: 1,
          decel: 0.95,
          minSpeed: 0.01,
          initial: [
            0.1 * Math.random() + 0.01,
            -(0.1 * Math.random() + 0.01)
          ],
          weight: true,
          // weightMode: ,
          weightGradient: {0: '#f00', 0.33: '#ff0', 0.66: '#0f0', 1: '#00f'}
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background: rgba(255,255,255, .6);
  box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 10px;
  & > p {
    background-color: rgba(166,146,146,.8);
    color: #fff;
    margin: 0;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
  }
  .canvas-container {
    height: 345px;
  }
}
  .positon-cloud {
    position: fixed;
    top: 50px;
  }
</style>
