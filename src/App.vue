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
    //
  }),
}
</script>
