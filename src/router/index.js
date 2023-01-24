import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
    children:[
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path:'login',
        name:'Login',
        component:() => import('../views/Login.vue')
      },
      {
        path:'gouwu',
        name:'Gouwu',
        component:() => import('../views/main/Gouwu.vue')
      },
      {
        path:'user',
        name:'User',
        component:() => import('../views/main/User.vue')
      },
      {
        path:'items',
        name:'Items',
        component:() => import('../views/main/Items.vue'),
      },
      {
        path:'*',
        redirect:'/home'
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
