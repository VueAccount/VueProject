<template>
<div id="app">
    <ul class="tab-head">
      <li :class="{ active: activeTab == 1 }">
        <button @click="tabChange(1)">一覧</button>
      </li>
      <li :class="{ active: activeTab == 2 }">
        <button @click="tabChange(2)">検索</button>
      </li>
      <li :class="{ active: activeTab == 3 }">
        <button @click="tabChange(3)">設定</button>
      </li>
      <li :class="{ active: activeTab == 4 }">
        <button @click="tabChange(4)">マイページ</button>
      </li>
    </ul>
    <div class="tab-body">
      <div v-if="activeTab == 1">
        <div class="tab1">店舗一覧(基本情報)</div>
        <StoreList/>
      </div>
      <div v-else-if="activeTab == 2">
        <div class="tab2">店舗検索</div>
        <Search/>
      </div>
      <div v-else-if="activeTab == 3">
        <div class="tab3">TABコンテンツ3</div>
      </div>
      <div v-else-if="activeTab == 4">
        <div class="tab4">TABコンテンツ4</div>
        <EditScreen/>
      </div>
    </div>
</div>
</template>

<script>
import Search from './StoreSearch.vue'
import EditScreen from './EditScreen.vue'
import StoreList from './StoreList.vue'

export default {
    name: 'TabComponent',
    components: {
      Search,
      EditScreen,
      StoreList,
    },
    data(){
        return {
            activeTab: 1,
        }
    },
    methods: {
    }
}
</script>

<style>
.tab-head {
  display: flex;
  padding-left: 0!important;
  list-style: none;
  margin-left: 50px;
  margin-right: 50px;
  width: 1000px;
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
.tab1,
.tab2,
.tab3,
.tab4 {
  padding: 12px;
  color: #fff;
  width: 800px;
  margin-left: 25px;
}
.tab1 {
  background: #1867c0;
}
.tab2 {
  background: #4caf50;
}
.tab3 {
  background: #ff5252;
}
.tab4 {
  background: yellow;
}
.test {
  border: solid;
  margin-top: 50px;
}
</style>