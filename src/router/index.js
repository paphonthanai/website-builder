import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Login from '@/components/Auth/Login.vue'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import Editor from '@/components/Editor/Editor.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/editor/:siteId', name: 'Editor', component: Editor }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
