import Vue from 'vue'
import App from './App.vue'

import router from './conf/router'

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount("#app");
