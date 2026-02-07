import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/auth/login.vue";
import Dashboard from "@/pages/borrower/dashboard.vue";
import Signup from "@/pages/auth/signup.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router