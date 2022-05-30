import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Credentials = () => import('../views/Credentials/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/credentials',
    name: 'credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
