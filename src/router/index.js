import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Robot from '../views/Robot.vue'
import HomeManager from '../views/HomeManager.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/robot',
      name: 'robot',
      component: Robot
    },
    {
      path: '/homemanager',
      name: 'homemanager',
      component: HomeManager
    }
  ]
})

export default router
