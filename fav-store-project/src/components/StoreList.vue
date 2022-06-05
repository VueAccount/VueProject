<!---->
<template>
  <div class="store-list">
  {{items}}
    <ul>
      <li v-for="item in items" :key="item.storeName">
      <!--
      {{ item }}
      -->
      店名： {{ item.Name }} 、メモ： {{ item.Memo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from 'firebase/database';
import Vue from 'vue';

export default Vue.extend ({
  name: 'StoreList',

  data() {
    return {
      // 辞書型 ID:{店名等,メモ,...}の形で登録
      items: [],
    }
  },
  mounted() {
    //接続
    const db = getDatabase()
    const dbRef = ref(db)

    //データ取得
    get(child(dbRef,'StoreList')).then((snapshot) => {
      if (snapshot.exists()) {
        this.items = snapshot.val()
      } else {
        console.log('No data available')
    }
    }).catch((error) => {
      console.error(error)
    })
  },
})
</script>

<style>

</style>