<template>
  <div>
    <div class="title">
      <div class="searchbox">
        <br>
        <label class="label" name="storeSearch">店舗検索</label>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="message" class="search_box"
                            label="検索キーワードを入力してください" 
                            type="text"
                            color="green darken-5"
                            clearable
                            maxlength="20">
                  <template v-slot:append-outer>
                    <v-btn color="primary"><v-icon>mdi-magnify</v-icon></v-btn>
                  </template>
              </v-text-field>

            </v-col>
          </v-row>
      </div>
      <div class= "map">
        <label>Googleマップ配置(予定)</label>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      title: "店舗検索"
    }
  }
}
</script>

<style>
.searchbox {
  margin-left: 20px;
 }
.searchbox .label {
  display: block;
  overflow: hidden;
  margin-bottom: 30px;
  font-size: 30px;
}
.map {
  border: solid;
  margin-top: 50px;
  margin-left: 20px;
  padding: 200px;
  width: 50%;
  text-align: center;
}


</style>