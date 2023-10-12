import { createRouter, createWebHistory } from "vue-router";
import drag_drop from '../components/drag_drop.vue';
import Header from '../components/Header.vue';
import login from '../components/login.vue';




const routes = [
    {
      path: '/',
      component: Header, // Définissez le composant Header comme route par défaut
    },
    {
      path: '/file',
      name: 'file',
      component: drag_drop,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
      },
    // Autres routes...
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;