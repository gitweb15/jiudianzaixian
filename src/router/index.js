import Vue from 'vue'
import VueRouter from 'vue-router'
import commodity_fenlei from '../views/commodity_fenlei.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'commodity_fenlei',
    component: commodity_fenlei
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
