<template>
  <div id="overlay">
    <div id="content">
      <div id="title">
        <p>{{ title }}</p>
      </div>
      <li v-for="(item, index) in data" :key="index">
        {{index}} {{ item }}
      </li>
      <div class="close">
        <button v-on:click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWind',
  props: ['val'],
  data(){
    return {
      title: "これがモーダルウィンドウです。",
      data: ["りんご", "バナナ", "ぶどう"]
    }
  }
}
</script>

<style>
#overlay{
  z-index:1;
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
  height: 70%;
  padding-top: 5em;
  background:#fff;
  padding-bottom: 5em;
  text-align: center;
}
.close {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>
