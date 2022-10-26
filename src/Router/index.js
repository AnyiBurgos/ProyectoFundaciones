import { createRouter, createWebHistory } from 'vue-router'
import HomeProject from '@/components/HomeProject.vue'
import FundacionesProject from '@/components/FundacionesProject.vue'


const routes = [
    {
        path: '/', 
        name: 'Home',
        component: HomeProject
    },
    {
        path: '/Home', 
        name: 'Home',
        component: HomeProject
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


  