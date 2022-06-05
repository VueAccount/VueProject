<template>
<div id="app">
    <ul class="tab-head">
      <li :class="{ active: activeTab == 1 }">
        <button @click="tabChange(1)">一覧</button>
      </li>
      <li :class="{ active: activeTab == 2 }">
        <button @click="tabChange(2)">編集(変更・修正)</button>
      </li>
      <li :class="{ active: activeTab == 3 }">
        <button @click="tabChange(3)">検索</button>
      </li>
      <li :class="{ active: activeTab == 4 }">
        <button @click="tabChange(4)">設定</button>
      </li>
      <li :class="{ active: activeTab == 5 }">
        <button @click="tabChange(5)">マイページ</button>
      </li>
    </ul>
    <div class="tab-body">
      <div v-if="activeTab == 1">
        <div class="tab1">TABコンテンツ1</div>
      </div>
      <div v-else-if="activeTab == 2">
        <div class="tab2">TABコンテンツ2</div>
        <Edition/>
      </div>
      <div v-else-if="activeTab == 3">
        <div class="tab3">TABコンテンツ3</div>
        <Search/>
      </div>
      <div v-else-if="activeTab == 4">
        <div class="tab4">TABコンテンツ4</div>
      </div>
      <div v-else-if="activeTab == 5">
        <div class="tab5">TABコンテンツ5</div>
      </div>
    </div>
</div>
</template>

<script>
import Edition from './EditScreen.vue'
import Search from './StoreSearch.vue'

export default {
    name: 'Tab-con',
    components:{
      Edition,
      Search,
    },
    data(){
        return {
            activeTab: 1,
        }
    },
    methods: {
        tabChange(id) {
        this.activeTab = id
        }
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

}
.tab-head li {
  border-bottom: 2px solid #ccc;
  width: calc(100% / 3);
}
.tab-head li:hover {
  background: #f5f5f5;
}
.tab-head li.active {
  border-bottom: 2px solid #1867c0;
  background: #ebf4ff;
}
.tab-head li button {
  padding: 12px 0;
  width: 100%;
}
.tab-body {
  padding: 16px;  
}
.tab1,
.tab2,
.tab3 {
  padding: 12px;
  color: #fff;
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
.tab5 {
  background: orange;
}
</style>