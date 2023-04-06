
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import WindCSS from 'vite-plugin-windicss'
import vitePression from 'vite-plugin-compression' // gzip压缩
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({command ,mode})=>{
    return {
      plugins: [vue(),
         autoImport({
        imports : [ 'vue' ],
        dts : 'src/auto-imports.d.ts',
      }),WindCSS(),
      vitePression() // gzip压缩 配合 http 请求字段 content-encoding：gzip 使用 ， 浏览器去进行解压缩任务
    ],
      resolve: {
        alias: {
         '@': resolve(__dirname , './src')
        }
      },
      server : {
        port : 3030
      },
      css:{
        //css模块化生成 类名 
        modules:{
          localsConvention:null
        }
      },
      build:{
        minify:false, //打包不乱码
        rollupOptions:{
        output:{
          assetFileNames:"[hash].[name].[ext]",
          // 分包策略
          manualChunks:(id:string)=>{
            if(id.includes('/node_modules')){
             return 'vendor'
            }
          }
        },
        },
        emptyOutDir:true, //打包之前清空文件夹
        chunkSizeWarningLimit: 1500000,
      }
    }
  })
