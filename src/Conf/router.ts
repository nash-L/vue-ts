import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: h => require(['@/App/Main'], h)
    },
    {
      path: '/book'
    },
    {
      path: '/'
    }
  ]
})
