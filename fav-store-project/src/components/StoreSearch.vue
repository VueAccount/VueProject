<template>
  <div>
    <div class="title">
    </div>

    <div class="searchbox">
      <br>
      <label class="label" name="storeSearch">店名を入力してください</label>
      <input type="text" name="name" size="25 ">
      <button class="searchbutton" role="button">検索</button>
    </div>
    <div class= "map">
      <label class="label">Googleマップ(予定)</label>
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
.searchbox .label {
  display: block;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: 20px;
}
.searchbox input[type=text]{
  margin-left: 25px;
}
.searchbox .searchbutton{
  margin-left: 5px;
}
.map {
  border: solid;
  margin-top: 50px;
  padding: 200px;
  width: 200px;
}


</style>