import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/router',
    name: 'router',
    component: () => import('@/views/router/router.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('@/views/pinia.vue'),
    beforeEnter(to: any , from: any){
      console.log(to)
      console.log(from)
    }
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/axios.vue'),
  },
  {
    path: '/optimize',
    name: 'optimize',
    component: () => import('@/views/optimize/index.vue'),
  }
]
const addroute= [
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/axios.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async(to,from,next)=>{
    next()
})
router.afterEach((to , from )=>{

console.log('afterEach执行')
  
})
export default router