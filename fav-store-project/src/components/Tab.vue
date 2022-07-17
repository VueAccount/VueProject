<template>
<v-app>

      <v-tabs class="tab" color="white" background-color="cyan" centered dark>
        <v-tab>一覧</v-tab>
        <v-tab-item>
          <v-card>
            <v-btn class="button" @click="openModal(item)" >モダールテスト</v-btn>
            <ModalWind :val="postItem" v-show="showContent" @close="closeModal"/>
          </v-card>
        </v-tab-item>
        <v-tab>検索</v-tab>
        <v-tab-item>
          <v-card>
            <search/>
          </v-card>
        </v-tab-item>
        <v-tab>設定</v-tab>
        <v-tab-item>
          <v-card>
            <edit-screen/>
          </v-card>
        </v-tab-item>
        <v-tab>マイページ</v-tab>
        <v-tab-item>
          <v-card>
            <store-list/>
          </v-card>
        </v-tab-item>
      </v-tabs>

</v-app>
</template>

<script>
import Search from './StoreSearch.vue'
import ModalWind from './ModalWind.vue'
import EditScreen from './EditScreen.vue'
import StoreList from './StoreList.vue'


export default {
    name: 'Tab-con',
    components: {
      Search,
      ModalWind,
      EditScreen,
      StoreList,
    },
    data(){
        return {
            activeTab: 1,
            showContent: false,
            postItem: null,
            item: true,
        }
    },
    methods: {
        tabChange(id) {
        this.activeTab = id
        },
        openModal (item) {
          this.showContent =true
          this.postItem = item
        },
        closeModal () {
          this.showContent = false
        }
    }
}
</script>

<style>
.tab {
  margin: 10px;
  margin-left: 50px;
  border-radius: 10px 10px 0px 0px;
  max-width: 90%;
}

.button {
  margin: 10px;
}

.tab-head {
  display: flex;
  padding-left: 0!important;
  list-style: none;
  margin-left: 50px;
  margin-right: 50px;
  width: 90%;
}
.tab-head li {
  border-bottom: 3px solid #ccc;
  width: calc(100% / 3);
}
.tab-head li:hover {
  background: #f5f5f5;
}
.tab-head li.active {
  border-bottom: 3px solid #1867c0;
  background: #ebf4ff;
}
.tab-head li button {
  padding: 12px 0;
  width: 100%;
}
.tab-body {
  padding: 20px;  
}


</style>