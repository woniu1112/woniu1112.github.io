<template>
  <div>
    <vue-particles
      color="#C0BFB8"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="star"
      :particleSize="2"
      linesColor="#ccc"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'vuePartical'
}
</script>

<style scoped lang="scss">
.lizi {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>
