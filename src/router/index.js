import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import TechnologiesPage from '@/pages/TechnologiesPage.vue'
import HousingPage from '@/pages/HousingPage.vue'
import PolicyPage from '@/pages/PolicyPage.vue'
import LegalNotesPage from '@/pages/LegalNotesPage.vue'
import NotFound from '@/NotFound.vue'

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
    },
    {
      path: '/policy',
      name: 'policy',
      component: PolicyPage
    },
    {
      path: '/legalnotes',
      name: 'legalnotes',
      component: LegalNotesPage
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
