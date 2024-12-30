<template>
    <div class="page--container home-page">
        <div class="home-header" ref="homeHeader">
            <h1>
                <div
                    v-for="letter of header"
                    :class="[
                        'letter',
                        {'letter-space': (letter === ' ')}
                    ]" 
                >
                    {{ letter }}
                </div>
            </h1>

            <div class="overflow--p">
                <p>Things move here. Sometimes on purpose, sometimes by accident. Enjoy!</p>
            </div>
        </div>
        
        <div class="circles--container">
            <div 
                class="circle" 
                v-for="x of 10" :key="x + 'circle'"
            >
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { onBeforeRouteLeave } from 'vue-router';

const header = "Motion Design";

onBeforeRouteLeave(async () => {
    gsap.to('.circles--container', {
        opacity: 0,
        scale: 0,
        duration: 1
    })
    await gsap.timeline({
        defaults: {
            duration: 0.3
        }
    })
    .to('.home-header h1 > .letter', {
        x: -50,
        stagger: {
            amount: 0.2
        },
        opacity: 0,
    })
    .to('.home-header p', {
        x: -50,
        opacity: 0,
    }, "<");
});

// Animation
const enterAnimation = () => {
    gsap.timeline({
    })
    .from('.home-header h1 > .letter', {
        y: 100,
        opacity: 0,
        stagger: {
            amount: 0.2
        },
        ease: 'back.out(0.5)',
        duration: 0.6
    })
    .from('.home-header p', {
        y: 10,
        opacity: 0,
        ease: 'back.out(0.5)',
        duration: 0.6
    }, "<0.5")
    .to('.circles--container .circle', {
        scale: 2,
        opacity: 0,
        stagger: {
            each: 0.4,
        },
        duration: 8
    }, "<")
    .fromTo('.circles--container .circle', {
        scale: 0,
        opacity: 1,
    }, {
        scale: 2,
        opacity: 0,
        stagger: {
            each: 0.9,
            ease: 'none',
            repeat: -1,
        },
        duration: 10
    }, "<50%");
}

onMounted(() => {
    enterAnimation();
});
</script>

<style lang="scss" scoped>
.home-page {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    overflow: hidden;

    .home-header {
        align-self: center;
        grid-column: 2 / 7;
        grid-row: 3;

        display: flex;
        flex-direction: column;
        gap: 8px;

        h1 {
            font-size: var(--font-4);
            overflow: hidden;

            .letter {
                display: inline-block;
            }
            .letter-space {
                width: 20px;
                height: 100%;
            }
        }

        .overflow--p {
            overflow: hidden;

            p {
                font-size: 18px;
                letter-spacing: 1px;
            }
        }
        
    }
    
    .circles--container {
        grid-column: 6 / -2;
        grid-row: 2 / 6;

        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        .circle {
            position: absolute;
            width: 60%;
            height: 70%;

            background-color: var( --slate-1);
            border: 2px solid var(--slate-11);
            border-radius: 50%;
            transform: scale(0);
        }
    }
}
</style>