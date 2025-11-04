import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import './styles/tailwind.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects/:id', name: 'Project', component: Project, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')