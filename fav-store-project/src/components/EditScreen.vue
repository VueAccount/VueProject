<template>
  <div>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    
    <!-- コンテンツエリア -->
    <div class="item">
      <label class="label" name="storeName">店名</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">URL</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">優先度</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">メモ</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">営業時間</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">登録日</label>
      <input type="text" name="name" size="15 ">
    </div>
    <div class="item">
      <label class="label" name="storeName">評価</label>
      <input type="text" name="name" size="15 ">
    </div>
    <button class="delete" role="button">削除</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "店名(基本条件)"
    }
  }
}
</script>

<style scoped>
.title{
  margin-left: 50px;
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
  margin: 0;
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

.delete {
  background-color: orange;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin-left: 300px;
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

.delete:hover,
.delete:focus {
  background-color: #F082AC;
}




</style>
