import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import './style/base.less'
import mittBus from 'mitt'
const app = createApp(App)
const mitt = mittBus()
declare module 'vue' {
    export interface ComponentCustomProperties {
        $bus : typeof mitt
    }
 }
 app.config.errorHandler = (error, vm, info) => {
    console.log(error , vm , info , '监听错误')
 }
app.config.globalProperties.$bus = mitt
app.config.globalProperties.custom = '自定义'
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.mount('#app')