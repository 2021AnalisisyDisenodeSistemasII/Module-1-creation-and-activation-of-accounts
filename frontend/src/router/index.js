import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/Services/SelectService.vue') },
  { path: '/create-account', name: 'ServicesCreateAccount', component: () => import('../views/Services/CreateAccount.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
