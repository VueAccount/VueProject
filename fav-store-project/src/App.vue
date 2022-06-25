<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped >
      <v-container>
      </v-container>
    </v-navigation-drawer>
    
    <!--1番上のツールバー-->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetifiy(タイトル募集中)</v-toolbar-title>
    </v-app-bar>

    <!--メイン画面-->
    <v-main>
      <v-container>
        <Tab/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    Tab,
  },
  data() {
    return{
      drawer: null
    }
  }
}
</script>

<style>


</style>
