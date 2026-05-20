import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/Home.vue";
import Register from "../page/Register.vue";
import Login from "../page/Login.vue";
import AdminLandingPage from "../page/admin/AdminLandingPage.vue";
import PesanCucian from "../page/cutomer/cucian/PesanCucian.vue";
import RincianCucian from "../page/cutomer/cucian/RincianCucian.vue";
import KelolaCucian from "../page/cutomer/cucian/KelolaCucian.vue";
import LaporanKeuangan from "../page/admin/LaporanKeuangan.vue";
import Nota from "../page/Nota.vue";
import Payment from "../page/Payment.vue";
function getUser() {
    return {
        role: 'admin'
        // role: 'user'
        // role: 'guest'
    }
}

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                requiresAuth: false,
                role: getUser().role
            }
        },
        {
            path:'/admin',
            component: AdminLandingPage, 
            meta: {
                requiresAdmin: true
            }
        }, 
        {
            path: '/register',
            component: Register
        },

        {
            path: '/login',
            component: Login
        }, 
            {
                path: '/cucian',
                children: [
                    {
                    path: 'pesan',
                    name: 'post-cucian',
                    component: PesanCucian
                    },
                    {
                    path: ':id',
                    name: 'detail-cucian',
                    component: KelolaCucian
                    },
                    {
                    path: '',
                    name: 'all-cucian',
                    component: RincianCucian
                    }
                ]
            },
            {
                path:"/dashboard/keuangan", 
                component: LaporanKeuangan
            },{
                path:'/nota/:id', 
                component: Nota
            }, 
            {
                path:'/payment/:id', 
                component: Payment
            }
    ]
})
router.beforeEach((to, from, next) => {
    const user = getUser()
    if (to.meta.requiresAdmin && user.role !== 'admin') {
        return next('/')
    }
    if (to.path === '/' && user.role === 'admin') {
        return next('/admin')
    }
   
    next()
})

export default router