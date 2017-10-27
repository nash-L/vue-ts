import Vue from 'vue'

import App from './App.vue'

import './conf/ui'
import router from './conf/router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})