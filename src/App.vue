<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CardCarousel msg="Welcome to Your Vue.js App. This project is an example of how to integrate a 3 card carousel web component developed in stencil en Vue.js"/>
  </div>
</template>

<script>
import CardCarousel from './components/CardCarousel.vue'

export default {
  name: 'app',
  components: {
    CardCarousel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
