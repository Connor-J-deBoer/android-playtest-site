import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: () => import('../views/AboutGameView.vue')
    },
    {
      path: '/me',
      name: 'about',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue')
    }
  ]
})

export default router
