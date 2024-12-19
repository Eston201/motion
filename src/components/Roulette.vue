<template>
    <nav class="navigation--container">
        <button class="back" aria-label="route back" @click="() => onRoute('back')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
        </button>
        <div class="routes--container">
            <div class="slider">
                <div 
                    v-for="(label, idx) of routes" 
                    :key="label"
                    :class="[
                        'label',
                        {'active' : currentActiveIndex == idx}
                    ]"
                >
                    {{ label }}
                </div>
            </div>
        </div>

        <button class="forward" aria-label="route forward" @click="() => onRoute('forward')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </button>
    </nav>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';

const appStore = useAppStore();

const router = useRouter();

const routes = [
    "",
    "Home",
    "Delay",
];

const currentActiveIndex = ref(1);
const translation = ref('0%');

watch(currentActiveIndex, (newValue) => {
    translation.value = `${-(100 / 3) * (newValue - 1)}%`;

    gsap.to('.slider', {
        x: translation.value,
        ease: "back.out(1)",
        duration: 0.7
    });
});

function onRoute(direction) {
    if (appStore.isRouting) return;

    if (direction === "back") {
        currentActiveIndex.value--;
        if (currentActiveIndex.value < 1) return currentActiveIndex.value = 1;
    }
    else {
        currentActiveIndex.value++;
        if (currentActiveIndex.value > routes.length - 1) return currentActiveIndex.value = routes.length - 1;
    }

    appStore.setIsRouting(true);
    router.push({name: routes[currentActiveIndex.value].toLowerCase()});
}

onMounted(() => {
    const currentRoute = window.location.pathname.replace('/', "");
    if (currentRoute === "") currentActiveIndex.value = 1;
    else {
        const currentActiveRoute = routes.findIndex((r) => r.toLowerCase() === currentRoute);
        currentActiveIndex.value = (currentActiveRoute === -1) ? 1 : currentActiveRoute;
    }
})
</script>

<style lang="scss" scoped>
.navigation--container {
    height: 100%;
    
    display: flex;
    align-items: center;
    gap: 8px;
    padding-inline: 8px;
    overflow: hidden;

    button {
        color: var(--slate-12);
        background-color: transparent;
        border: none;
        cursor: pointer;

        transition: transform 0.2s ease-out;

        &.back:active {
            transform: translateX(-6px);
        }

        &.forward:active {
            transform: translateX(6px);
        }
    }
}

.routes--container {
    flex: 1;
    overflow: hidden;
    
    .slider {
        display: flex;
        justify-content: space-between;

        .label {
            width: calc(100% / 3);
            flex-shrink: 0;
            text-align: center;
            border-bottom: 1px solid transparent;
            transition: border-color 0.3s ease;

            &.active {
                border-bottom-color: var(--slate-12);
            }
        }
    }
}
</style>