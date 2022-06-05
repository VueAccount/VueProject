<template>
<body>
  <div id="app">
    <!--<Tab/>-->
    <Tab/>
    <StoreList/>
  </div>
</body>
</template>

<script>
import Tab from './components/Tab.vue'

import StoreList from './components/StoreList'

export default {
  name: 'App',
  components: {
    Tab,
    StoreList,
    main
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
