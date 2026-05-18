import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Register from "../page/Register.vue";
import Login from "../page/Login.vue";

export const router = createRouter({ routes:[
    {
        path: '/',
        component: Home
    }, 
    {
        path:'/register', 
        component: Register
    }, {
        path:'/login',
        component: Login
    }
], 
history: createWebHistory()
}
)