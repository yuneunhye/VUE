import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages({
      // dirs: 'src/views'
    }),
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   server: {
            proxy: {
                "/api": {
                    target: 'http://localhost:8090',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                    secure: false,
                    ws: true,
                },
            },
        },
})
