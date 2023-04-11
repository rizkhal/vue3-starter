import vue from '@vitejs/plugin-vue'
import vueExtend from 'vite-plugin-vue-setup-extend'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueExtend(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Vue3 + Vite Starter Template',
          description: 'A single page application created using Vue.js 3'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, '/src')
    }
  }
})
