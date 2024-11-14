import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';
// Load các biến môi trường từ file .env
dotenv.config();

// Lấy public path từ biến môi trường
const publicPath = process.env.VITE_PUBLIC_PATH || '';
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    {
      name: 'override-config', // Plugin tùy chỉnh để đặt target esnext
      config: () => ({
        build: {
          target: 'esnext', // Đặt target là esnext để hỗ trợ các tính năng hiện đại
        },
      }),
    },

  ],
  // dung khi dev
  server: {
    host: '0.0.0.0', // Hoặc địa chỉ IP cụ thể của bạn
    port: 5173,
  },
  esbuild: {
    target: 'esnext', // Đặt target cho esbuild
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Thêm alias cho thư mục src
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: 'www',
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,        // Thêm hash vào tên file entry
        chunkFileNames: `[name].[hash].js`,        // Thêm hash vào tên file chunk
        assetFileNames: `[name].[hash].[ext]`,     // Thêm hash vào tên file asset (CSS, hình ảnh, font, v.v.)
      },
    },
  },
});
