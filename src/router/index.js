import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/shopcart',
        component: Shopcart
    },
    {
        path:'/profile',
        component: Profile
    },
    {
        path:'/category',
        component: Category
    }
]
const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router