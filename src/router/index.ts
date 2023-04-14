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
    name: '虚拟列表',
    component: () => import('@/views/optimize/index.vue'),
  },
  {
    path: '/bigFileUpload',
    name: '大文件上传',
    component: () => import('@/views/bigFileUpload/index.vue'),
  },
  {
    path: '/imgLazyLoad',
    name: 'imgLazyLoad',
    component: () => import('@/views/imgLazyLoad/index.vue'),
  },
  {
    path: '/PdfToCanvers',
    name: 'PdfToCanvers',
    component: () => import('@/views/PdfToCanvers/index.vue'),
  }, {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/calendar/index.vue'),
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