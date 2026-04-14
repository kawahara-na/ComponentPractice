import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentRegistrationView from '@/views/ComponentRegistrationView.vue'
import PropsView from '@/views/PropsView.vue'
import ComponentEventView from '@/views/ComponentEventView.vue'
import ComponentDefineModelView from '@/views/ComponentDefineModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: ComponentRegistrationView,
    },
    {
      path: '/props',
      name: 'props',
      component: PropsView,
    },
    {
      path: '/componentEvent',
      name: 'componentEvent',
      component: ComponentEventView,
    },
    {
      path: '/componentDefineModel',
      name: 'componentDefineModel',
      component: ComponentDefineModelView,
    },
  ],
})

export default router
