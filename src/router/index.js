import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";

export const router = createRouter({ routes:[
    {
        path: '/',
        component: Home
    }
], 
history: createWebHistory()
}
)