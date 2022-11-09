import { createRouter, createWebHistory } from 'vue-router'
import HomeProject from '@/components/HomeProject.vue'
import LoginProject from '@/components/LoginProject.vue'
import FundacionesProject from '@/components/FundacionesProject.vue'
import RegisterButton from '@/components/RegisterButton.vue'
import SeeMore from '@/components/SeeMore.vue'

const routes = [    
    {
        path: '/', 
        name: '',
        component: HomeProject
    },
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
    },
    {
        path: '/Register', 
        name: 'Register',
        component: RegisterButton
    },
    {
        path: '/Foundation', 
        name: 'Foundation',
        component: SeeMore
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router 


  