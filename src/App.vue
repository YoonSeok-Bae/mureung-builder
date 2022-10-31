<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <index />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Index,
  },
  data: () => ({
    layout: null
  }),
  watch: {
    $route(to) {
      if(to.meta.layout != undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "User"
      }
    }
  },
}
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Secular One', sans-serif;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>