import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Chart from 'chart.js/auto'; // Utilisation de 'chart.js/auto' pour la version moderne de Chart.js
import router from "./router";


loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
