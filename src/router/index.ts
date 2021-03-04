import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map-view-example',
    name: 'MapViewExample',
    component: () => import('../views/MapViewExample.vue')
  },
  {
    path: '/scene-view-example',
    name: 'SceneViewExample',
    component: () => import('../views/SceneViewExample..vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
