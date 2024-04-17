import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import TechnologiesPage from '@/pages/TechnologiesPage.vue'
import HousingPage from '@/pages/HousingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: TechnologiesPage
    },
    {
      path: '/housing',
      name: 'housing',
      component: HousingPage
    }
  ]
})

export default router
