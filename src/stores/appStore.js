import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAppStore = defineStore('app', () => {
    // Global Routing
    const routing = ref(false);
    const isRouting = computed(() => routing.value)
    function setIsRouting(isRouting) {
        routing.value = isRouting;
    }

    return {
        isRouting,
        setIsRouting
    };
})