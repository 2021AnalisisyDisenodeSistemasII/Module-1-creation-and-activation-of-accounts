import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { name: "Home", path: "/", component: () => import("@/views/Home.vue") },
  { name: "Login", path: "/login", component: () => import("@/views/Login.vue") },
  { name: "Logout", path: "/logout", component: () => import("@/views/Logout.vue") },
  { name: "Services", path: "/services", component: () => import('@/views/Services.vue') },
  { name: "CreateAccount", path: "/create-account", component: () => import('@/views/CreateAccount.vue') },
  { name: "Error", path: "/error", component: () => import('@/views/Error.vue') },
  { path: "*", component: () => import('@/views/404.vue') }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
