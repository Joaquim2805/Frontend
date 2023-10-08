import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    // ...
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
   
  },
 
  plugins: [
    vue(),
    vuetify(),

    
  ],
  server: {
    host: true,
    port: 8000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
  preview: {
    host : true,
    port : 8080 
  }
})
