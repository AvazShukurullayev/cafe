import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscountView from "@/views/DiscountView.vue"
import DashboardView from "@/views/DashboardView.vue"
import MessageView from "@/views/MessageView.vue"
import NotificationView from "@/views/NotificationView.vue"
import SettingsView from "@/views/SettingsView.vue"
import ExitView from "@/views/ExitView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
  ]
})

export default router
