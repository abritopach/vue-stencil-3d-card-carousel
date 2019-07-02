<template>
  <div>
    <h1>{{ msg }}</h1>
    <st-3D-card-carousel></st-3D-card-carousel>
  </div>
</template>

<script>
export default {
  name: 'CardCarousel',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
