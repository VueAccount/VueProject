<template>
  <div id="main">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
        <div class="item">
      <label class="label">店名</label>
      <input type="text" name="name" size="15" v-model="Name">
    </div>
    <div class="item">
      <label class="label" name="storeName">登録日</label>
      <input type="text" name="name" size="15" v-model="RegistrationDate">
    </div>
        <div class="item">
      <label class="label" name="storeName">営業時間</label>
      <input type="text" name="name" size="15" v-model="OpeningHours">
    </div>
    <div class="item">
      <label class="label" name="storeName">優先度</label>s
    </div>
    <div class="item">
      <label class="label" name="storeName">評価</label>
      <input type="text" name="name" size="15" v-model="Rate">
    </div>
    <div class="item">
      <label class="label" name="storeURL">URL</label>
      <input type="text" name="name" size="15" v-model="URL">
    </div>
    <div class="item">
      <label class="label" for="storeMemo">メモ</label>
      <textarea rows="4" id="message" name="comment"></textarea>
    </div>
    <DeleteButton/>
    <v-btn variant='primary' @click='register'> 登録</v-btn>
  </div>
</template>

<script>
import DeleteButton from './DeleteButton.vue' 

export default {
  components: {
    DeleteButton
  },
  data(){
    return {
      title: "店名(基本条件)"
    }
  }
}
</script>

<style scoped>
#main{
    min-height: 500px;
}
.title{
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 50px;
  padding:  20px 0px;
}
.item{
  display: block;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: 20px;
}
.item .label {
  float: left;
  padding: 5px;
  margin: auto;
}
.item input[type=text]{
  display: block;
  margin-left: 100px;
  width: 200px;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 13px;
}
.item textarea {
  display: block;
  outline: none;
  border: 1px solid #ccc;
  resize: vertical;
  margin-left: 100px;
  width: 195px;
}


</style>
