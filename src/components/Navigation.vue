<template>
    <nav>
        <img 
            src="/favicon/favicon.svg" 
            alt="Motion Design Logo"
            @click="() => navigateTo('home')"
        >
        
        <div class="nav-links__container">
            <div
                class="nav-link"
                v-for="route of routes"
                :key="route.label"
                @click="() => navigateTo(route.routeName)"
            >
                <span :class="{'active' : route.routeName === activeRouteName}">
                    {{ route.label }}
                </span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';

const emit = defineEmits(['navClose'])
const appStore = useAppStore();
const router = useRouter();

const activeRouteName = ref('');
const routes = [
    { label: 'Delay', routeName: 'delay' }
];

function navigateTo(routeName) {
    // Fast navigations are not allowed :(
    if (appStore.isRouting) return;

    appStore.setIsRouting(true);
    activeRouteName.value = routeName;
    router.push({name: routeName});
    emit('navClose');
}

onMounted(() => {
    const currentRoute = window.location.pathname.replace('/', "");
    activeRouteName.value = currentRoute;
})
</script>

<style lang="scss" scoped>
nav {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    padding: 22px;

    img {
        width: 40%;
        cursor: pointer;
    }
}

.nav-links__container {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-link {
        width: 100%;
        position: relative;
        font-size: 18px;
        cursor: pointer;
        text-align: center;

        span {
            position: relative;
            display: inline-block;
            width: 100%;
            overflow: hidden;

            // hover Animation setup
            @mixin activeLine($x: 0) {
                content: "";
                position: absolute;
                top: 50%;
                transform: translate($x, -50%);

                width: 25%;
                height: 2px;
                background-color: var(--slate-6);
                border-radius: 4px;
                transition: transform 0.2s ease-out;
            }

            &::before {
                @include activeLine(-60%);
                left: 0;
            }

            &::after {
                @include activeLine(60%);
                right: 0;
            }
            
            &:hover {
                &::before, &::after {
                    transform: translateX(0);
                }
            }
            // Active State
            &.active {
                &::before, &::after { transform: translateX(0); }
            }
        }
    }
}
</style>