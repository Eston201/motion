import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "../stores/appStore";

const homePage = () => import('../views/home/Home.vue');
const delayPage = () => import('../views/delay/Delay.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/delay',
            name: 'delay',
            component: delayPage
        },
    ]
});


router.afterEach(() => {
    const appStore = useAppStore();
    appStore.setIsRouting(false);
});

export default router;