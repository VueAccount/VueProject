<template>
<body>
  <div id="app">
    <Tab/>
  </div>
</body>
</template>

<script>
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
      Tab,
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
