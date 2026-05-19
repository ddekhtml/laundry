import { createRouter, createWebHistory } from "vue-router";

import Home from "../page/Home.vue";
import Register from "../page/Register.vue";
import Login from "../page/Login.vue";
import AdminLandingPage from "../page/admin/AdminLandingPage.vue";
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
                requiresAuth: false
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