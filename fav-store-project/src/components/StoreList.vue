<!---->
<template>
  <div class="store-list">
  {{ stores }}
    <ul>
      <li v-for="(store, index) in stores" :key="store.storeName" class="test">
        <td>ID： {{ store.RegisterId }}、 </td>
        <td>店名： {{ store.Name }}、 </td>
        <td>登録日： {{ store.RegistrationDate }}、</td>
        <td>営業時間： {{ store.OpeningHours }}、</td>
        <td>優先度： {{ store.Priority }}、</td>
        <td>評価： {{ store.Rate }}、</td>
        <v-btn @click="deleteStore(index)" v-if="relode">削除ボタン</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, child, get, remove} from 'firebase/database';
import Vue from 'vue';

export default Vue.extend ({
  name: 'StoreList',
  components: {
  },

  data() {
    return {
      // 辞書型 ID:{店名等,メモ,...}の形で登録
      stores: [],
      item: true,
      showContent: false,
      postItem: "",
      relode: true,
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
    deleteStore(index){
      const db = getDatabase()
      remove(ref(db, 'StoreList/' + index),{
      });
      this.relode = false;
      this.$nextTick(() => (this.relode = true));
    },
  }
})
</script>

<style>
.test{
  margin-top: 30px;
}

</style>