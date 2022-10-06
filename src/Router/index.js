import { createRouter, createWebHistory } from 'vue-router'
import HomeProject from '@/components/HomeProject.vue'
import LoginProject from '@/components/LoginProject.vue'
import FundacionesProject from '@/components/FundacionesProject.vue'


const routes = [
    {
        path: '/Home', 
        name: 'Home',
        component: HomeProject
    },
    {
        path: '/Login', 
        name: 'Login',
        component: LoginProject
    },
    {
        path: '/Fundaciones', 
        name: 'Fundaciones',
        component: FundacionesProject
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router 


  