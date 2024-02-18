import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home.vue'
import RegionsVew from '@/views/Regions.vue'
import AboutView from '@/views/AboutUs.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/regions',
    name: 'regions',
    component: RegionsVew
  },
  {
    path: '/about',
    name: 'about',
   component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
