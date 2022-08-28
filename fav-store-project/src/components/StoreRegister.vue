<template>
  <v-app>
  <v-form>
    <v-container class="allcontainer">
      <div class="title">
      <h1>{{ title }}</h1>
      </div>
      <v-row>
        <v-col cols="2" class="infomestion_taga">登録ID</v-col>
        <v-col cols="10" sm="4">
          <v-text-field 
            v-model="RegisterId"
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">店名</v-col>
        <v-col cols="10" sm="4">
          <v-text-field 
            v-model="Name" 
            label="Name" 
            clearable 
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">登録日</v-col>
        <v-col cols="10" sm="4">
          <v-text-field 
            v-model="RegistrationDate" 
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">営業時間</v-col>
        <v-col cols="10" sm="4">
          <v-text-field 
            v-model="OpeningHours" 
            label="open" 
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">優先度</v-col>
        <v-col cols="10" sm="3">
        <v-select 
          :items="items" 
          v-model="Priority" 
          dense >
        </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">評価</v-col>
        <v-col cols="10" sm="3">
          <v-select 
            :items="Rates" 
            v-model="Rate" 
            dense>
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">電話番号</v-col>
        <v-col cols="10" sm="4">
          <v-text-field 
            v-model="Phonenumber" 
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="infomestion_taga">URL</v-col>
        <v-col cols="10" sm="7">
          <v-text-field 
            v-model="URL" 
            label="URL" 
            dense>
          </v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary" @click='register' class="register">
        新規登録
      </v-btn>
    </v-container>
  </v-form>
  </v-app>
</template>

<script>
import { getDatabase , ref, push } from 'firebase/database';

export default {
  components: {
  },
  data(){
    return {
      title: "登録画面",
      RegisterId: '',
      items: ["高", "中", "低"],
      Rates: [ "★1", "★★2", "★★★3", "★★★★4", "★★★★★5" ],
      Name: '',
      RegistrationDate: new Date().toISOString().substr(0, 10),
      OpeningHours: '',
      Priority: '',
      Rate: '',
      Phonenumber: '',
      URL: '',
    }
  },
  methods:{
    register() {
    //DB接続
    const db = getDatabase()
      //入力情報追加
      push(ref(db, 'StoreList/'), {
      RegisterId: this.RegisterId,
      Name: this.Name,
      RegistrationDate: this.RegistrationDate,
      OpeningHours: this.OpeningHours,
      Priority: this.Priority,
      Rate: this.Rate,
      Phonenumber: this.Phonenumber,
      URL: this.URL,
      })
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      this.resetForm();
    },
    //データリセット
    resetForm(){
        this.RegisterId = '';
        this.Name = '';
        this.OpeningHours = '';
        this.Priority = '';
        this.Rate = '';
        this.Phonenumber = '';
        this.URL = '';
    }
  }
}
</script>

<style scoped>
#main{
  min-height: 500px;
}
.allcontainer{
  padding-left: 40px;
}
.title{
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 50px;
  padding:  20px 0px;
}
.infomestion_taga  {
  display: block;
  padding-top: 20px;
  }
.register{
  margin: 40px;
}
</style>
