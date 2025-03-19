import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/tao-ui/',
  assetsDir: 'tao-ui/assets',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'TaoUI',
      fileName: (format) => `tao-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue' , 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia'
        },
      },
    },
  },
  plugins: [vue()],
  test: {
    globals: true, // 启用全局 API
    environment: 'jsdom', // 必须！用于 DOM 测试
    setupFiles: './tests/setup.js' // 可选：全局测试初始化文件
  }
})
