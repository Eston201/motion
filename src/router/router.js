import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "../stores/appStore";

const homePage = () => import('../views/home/Home.vue');
const delayPage = () => import('../views/delay/Delay.vue');
const hierarchyScrollerPage = () => import('../views/delay/HierarchyScroller.vue')

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
            component: delayPage,
            children: [
                {
                    path: '',
                    name: 'delay',
                    component: hierarchyScrollerPage
                }
            ]
        },
    ]
});


router.afterEach(() => {
    const appStore = useAppStore();
    appStore.setIsRouting(false);
});

export default router;