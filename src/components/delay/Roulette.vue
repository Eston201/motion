<template>
    <div class="roulette--container">
        <div class="roulette">
            <Transition
                @enter="onEnter"
                @leave="onLeave"
                :css="false"
                appear
            >
                <ul class="roulette-transitioner" :key="data">
                    <li
                        v-for="x of data"
                        :key="x"
                    >
                        <slot :data="x">
                            {{ x }}
                        </slot>
                    </li>
                </ul>
            </Transition>
        </div>

        <div class="btn--container">
            <button class="previous" aria-label="previous" @click="() => btnClick('prev')">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                </svg>
            </button>
            <button class="next" aria-label="next" @click="() => btnClick('next')">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    data: {
        type: Array,
        default: ["Card 1", "Card 2", "Card 3", "Card 4"]
    }
});

const emit = defineEmits(['change']);

const translateDir = ref('');
function btnClick(direction) {
    translateDir.value = direction;
    emit('change', direction);
}
// Card Trasition functions
function onEnter(el, done) {
    const y = (translateDir.value === 'prev') ? '-=100%' : '+=100%';
    const stagger = (translateDir.value === 'prev') ? -1 : 1;
    gsap.timeline({
        onComplete: done
    })
    .from(el, {
        y,
        duration: 1,
    })
    .from(el.children, {
        y,
        opacity: 0,
        stagger: 0.2 * stagger,
        duration: 1,
    }, "<");
}
function onLeave(el, done) {
    const y = (translateDir.value === 'prev') ? '+=100%' : '-=100%';
    gsap.to(el, {
        opacity: 0,
        y,
        onComplete: done,
        duration: 1.25,
    });
}
</script>

<style lang="scss" scoped>
.roulette--container {
    height: 100%;
    display: flex;
    gap: 22px;
}

.roulette {
    position: relative;
    flex: 1;
    height: 100%;
    overflow: hidden;
    
    .roulette-transitioner {
        // Out of flow for better transition
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

ul {
    flex: 1;
    height: 100%;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 12px;

    padding: 0;
    overflow: hidden;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.btn--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    button {
        width: 40px;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--slate-12);
        border: 1px solid var(--slate-6);
        border-radius: 4px;
        background-color: transparent;
        transition: transform 0.2s ease-out, border-color 0.2s ease-out;
        cursor: pointer;

        &:hover {
            border-color: var(--slate-12);
        }

        &.previous {
            &:active {
                transform: translateY(-6px);
            }
        }
        
        &.next {
            &:active {
                transform: translateY(6px);
            }
        }
    }
}
</style>