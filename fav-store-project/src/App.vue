<template>
  <div id="app">
    
    <!-- HelloWorld msg="Welcome to Your Vue.js App"/ -->
    <EditScreen/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import EditScreen from './components/EditScreen.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    EditScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
