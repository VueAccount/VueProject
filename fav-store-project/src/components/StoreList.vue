
<template>
  <v-simple-table class="store-table">
     <thead>
        <tr>
          お店一覧
        </tr>
      </thead>
      <hr>
      <tbody>
        <tr
          v-for="store in stores"
          :key="store.Name"
        >
          <td>{{ store.Name }}<br><br>{{ store.Memo }}</td>
        </tr>
      </tbody>
      <br>
    <button @click="test('202205081708')">データ取得ボタン</button><br>
    {{storesTest}}
  </v-simple-table>


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
 //   ModalWind
  },

  data() {
    return {
      // 辞書型 ID:{店名等,メモ,...}の形で登録
      storesTest: [],
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
  }
})
</script>

<style>
.store-table{
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.store-table thead{
  text-align: center;
  font-size: 15pt;
}

.store-table tbody{
  height: 100px;
}

</style>