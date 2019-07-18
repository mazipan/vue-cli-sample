import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "page-about" */ './views/About.vue')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import(/* webpackChunkName: "page-films" */ './views/Films.vue')
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: () => import(/* webpackChunkName: "page-film-detail" */ './views/FilmDetail.vue')
    }
  ]
})
