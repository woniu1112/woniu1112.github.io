<template>
  <div class="tag-ball">
    <div class="container" id="tagBox">
      <p>标签云</p>
      <div id="myCanvasContainer" class="canvas-container">
        <canvas width="480" height="350" id="myCanvas" ref="canvas"></canvas>
      </div>
      <div id="tags">
        <ul>
          <li v-for="item in tags" :key="item.id" @click="titleClick(item)"><a href="javascript: void(0)">{{ item.tittle }}</a></li>
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
      tags: JSON.parse(window.localStorage.getItem('articles')) || [],
      btnContent: '开始',
      running: false
    }
  },
  mounted: function () {
    this.setElCanvasStyle()
    this.$nextTick(function () {
      this.initTagCanvas()
    })
  },
  methods: {
    titleClick (item) {
      this.$state.articles = item
      if (this.$route.name !== 'view') {
        this.$router.push({name: 'view'})
      }
    },
    start: function () {
      this.btnContent = '停止'
      window.TagCanvas.SetSpeed('myCanvas', [5, 1])
    },
    stop: function () {
      this.btnContent = '开始'
      window.TagCanvas.SetSpeed('myCanvas', [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)])
    },
    /**
     * 设置canvas样式
     */
    setElCanvasStyle: function () {
      var canvas = this.$refs.canvas
      canvas.width = document.querySelector('#tagBox').offsetWidth
      canvas.height = 300
    },
    /**
     * 初始化tagCanvas
     */
    initTagCanvas: function () {
      window.onload = function () {
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
            weightMode: 'color',
            weightGradient: {0: '#f00', 0.33: '#ff0', 0.66: '#0f0', 1: '#00f'}
          })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background: #fff9ec;
  box-shadow: 2px 2px 16px 5px rgba(188, 173, 178, .5);
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;
  & > p {
    background: #ac9a9a;
    color: #fff;
    margin: 0;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
