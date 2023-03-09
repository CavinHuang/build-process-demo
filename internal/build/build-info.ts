import { defineConfig } from 'vite'
import type { InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export const buildInfo = defineConfig({
  plugins: [
    vue()
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'GalaUi',
      fileName: (format, entryName) => `${entryName.replace(/[\/src]/ig, '')}.${format}.js`,
    },
    target: 'es2018',
    sourcemap: true,
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
}) as InlineConfig