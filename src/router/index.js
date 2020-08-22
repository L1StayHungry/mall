import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('@/views/home/home.vue')
const Cart = () => import('@/views/cart/cart')
const Category = () => import('@/views/category/category')
const Profile = () => import('@/views/profile/profile')
const Detail = () => import('@/views/details/detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
