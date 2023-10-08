import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Chart from 'chart.js/auto'; // Utilisation de 'chart.js/auto' pour la version moderne de Chart.js


loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
