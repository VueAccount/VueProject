<template>
  <div id="app">
    <Tab/>
    <StoreList/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'
import StoreList from './components/StoreList'

export default {
  name: 'App',
  components: {
    Tab,
    StoreList,


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
