import Vue from 'vue'
import App from './App/App.vue'

const app = new Vue({
  render: h => h(App)
})

app.$mount("#app");
