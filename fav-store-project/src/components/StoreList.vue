<!---->
<template>
  <div class="store-table">
  <v-simple-table>
     <thead>
        <tr>
          お店一覧
        </tr>
      </thead>
      <hr>
      <tbody
        v-for="store in stores"
        :key="store.Name"
      >
        <div class="store-record">
        <tr>
          <td>
            <div class="store-name">
              {{ store.Name }}
            </div>
            <div class="edit-btn">
              <v-btn>編集</v-btn>
            </div>
          </td>
        </tr>
        </div>
        <tr class="store-memo">
          <td>{{ store.Memo }}</td>
        </tr>
        <hr>
        
      </tbody>
      <br>
    <button @click="test('202205081708')">データ取得ボタン</button><br>
    {{storesTest}}
  </v-simple-table>
  </div>


<!--
  <div class="store-list">
  {{stores}}
    <ul>
      <li v-for="store in stores" :key="store.storeName">
      <button v-on:click="openModal(item)">店名： {{ store.Name }} 、メモ： {{ store.Memo }}</button>
      </li>
    </ul>
    <ModalWind :val="postItem" v-show="showContent" @close="closeModal"/>
  </div>
  -->



</template>

<script>
import { getDatabase, ref, child, get } from 'firebase/database';
import Vue from 'vue';
//import ModalWind from './ModalWind.vue'

export default Vue.extend ({
  name: 'StoreList',
  components: {
    //ModalWind
  },

  data() {
    return {
      storesTest: [],
      // 辞書型 ID:{店名等,メモ,...}の形で登録
      stores: [],
      item: true,
      showContent: false,
      postItem: "",
    }
  },
  mounted() {
    //接続
    const db = getDatabase()
    const dbRef = ref(db)

    //データ取得
    get(child(dbRef,'StoreList')).then((snapshot) => {
      if (snapshot.exists()) {
        this.stores = snapshot.val()
      } else {
        console.log('No data available')
    }
    }).catch((error) => {
      console.error(error)
    })
  },
  methods:{
    openModal (item) {
      this.showContent =true
      this.postItem = item
    },
    closeModal () {
      this.showContent = false
    },
    test (storeNum) {
      console.log(storeNum);
      const db = getDatabase()
      const dbRef = ref(db)
      get(child(dbRef,'StoreList/'+storeNum)).then((snapshot) => {
      if (snapshot.exists()) {
        this.storesTest = snapshot.val()
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
      console.error(error)
    })
    }
  },
  computed: {
    testcomp: function () {
    //IDを保持してクリックするたびに値を入れ替える
    return true;
    }
  }
})
</script>

<style>
.store-table{
  text-align: center;
  margin: 30px auto;
}
.store-table thead{
  text-align: center;
  font-size: 20pt;
  background-color: #00CED1;
  color: #fff;
}
.store-record{
  height: 80px;
  background-color: #AFEEEE; 
}
.store-name{
  text-align: center;
}
.edit-btn{
  font-size: 15pt;
  text-align: right !important;
}
.store-memo{
  background-color: #E0FFFF;
}
</style>