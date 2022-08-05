import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import libCss from 'vite-plugin-libcss';
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), libCss()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/libs/mixin.scss";'
      }
    }
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libs'),
      name: 'tgdesign',
      fileName: (format) => `tgdesign.${format}.js`
    },
    cssCodeSplit:false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
