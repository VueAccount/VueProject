<template>
  <div id="overlay">
    <div id="content">
      <v-card-title class="pa-1 pl-2 caption blue-grey lighten-1 grey--text text--lighten-3" >
        <span>お店①</span>
      </v-card-title>
      <v-card-text class="pa-3 pt-2">
        <v-row dense>
          <v-col cols="6">
            <v-text-field 
              readonly
              class="mx-3 my-3"
              label="店名"
              v-model="storesTest.Name"
              persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              readonly
              class="mx-3 my-3"
              label="登録日"
              v-model="storesTest.RegistrationDate"
              persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
            readonly
            class="mx-3 my-3"
            label="営業時間"
            v-model="storesTest.OpeningHours"
            persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
            readonly
            class="mx-3 my-3 centered-input"
            label="優先度"
            v-model="storesTest.Priority"
            persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
            readonly
            class="mx-3 my-3 centered-input"
            label="評価"
            v-model="storesTest.Rate"
            persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
            readonly
            class="mx-3 my-3"
            label="電話番号"
            v-model="storesTest.Phonenumber"
            persistent-placeholder
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
            readonly
            class="mx-3 my-3"
            label="URL"
            v-model="storesTest.URL"
            persistent-placeholder
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn @click="test('-N8O1xwpknprXw6ddwsO')">データ取得ボタン</v-btn>
      <button class="button" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from 'firebase/database';
import Vue from 'vue';

export default Vue.extend ({
  name: 'ModalWind',
  props: ['val'],

  data(){
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
      // テーブルリセット
      this.items = [];
      })
    },
    methods: {
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
#overlay{
  z-index:1;
  border-radius: 8px;
  border-style: none;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content{
  z-index:2;
  width:70%;
  height: 450px;
  padding-top: 0px;
  background:#fff;
  padding-bottom: 3em;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
}
.close {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}
.button{
  background-color: skyblue;
  border-radius: 8px;
  border-style: none;
  color: #FFFFFF;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;

  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.centered-input input {
  text-align: center
}
</style>
