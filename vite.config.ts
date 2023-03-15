
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import WindCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({mode}:any) => {
  return defineConfig({
    plugins: [vue(), autoImport({
      imports : [ 'vue' ],
      dts : 'src/auto-imports.d.ts',
    }),WindCSS()],
    resolve: {
      alias: {
        '@': resolve(__dirname , './src')
      }
    },
    server : {
      port : 3030
    }
  })
}
