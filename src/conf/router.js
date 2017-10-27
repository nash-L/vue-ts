import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: r => require(['@/App/Main.vue'], r),
      children: [
        {
          path: "/",
          component: r => require(['@/App/Main/Store.vue'], r)
        },
        {
          path: "classify",
          component: r => require(['@/App/Main/Classify.vue'], r)
        },
        {
          path: "ranking",
          component: r => require(['@/App/Main/Ranking.vue'], r)
        }
      ]
    }
  ]
})
