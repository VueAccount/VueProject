import Vue from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDEeYRMxoLIGha9WEWgQSBm07UGvo49knw",
  authDomain: "fav-store-project.firebaseapp.com",
  databaseURL: "https://fav-store-project-default-rtdb.firebaseio.com",
  projectId: "fav-store-project",
  storageBucket: "fav-store-project.appspot.com",
  messagingSenderId: "627139496894",
  appId: "1:627139496894:web:cca7cc9f0b4326b5db47ef",
  measurementId: "G-PME8X660FF"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.debug(app)

new Vue({
  render: h => h(App),
}).$mount('#app')
