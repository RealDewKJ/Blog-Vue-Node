import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import ('@/views/BlogView.vue')
    },
    {
      path: '/new-story',
      name: 'newstory',
      component: () => import ('@/views/NewStoryView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import ('@/views/SignupView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import ('@/views/LoginView.vue')
    }
  ]
})

export default router
