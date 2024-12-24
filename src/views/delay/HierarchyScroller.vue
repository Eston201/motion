<template>
    <main class="hierarchy-scroller">
        <div class="scroll-me">
            <h1>Scroll Me</h1>
            <div class="arrow-down--container">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </div>
        </div>

        <section id="hero-section"><h1>Hero</h1></section>
        <section id="about-section"><h1>About</h1></section>
        <section id="stats-section"><h1>Our Stats</h1></section>
    </main>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

const createTimeLine = () => {
    // Hero Section
    gsap.timeline({
        scrollTrigger: {
            scroller: '.hierarchy-scroller',
            trigger: '#hero-section',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('#hero-section > h1', {
        opacity: 0,
        scale: 0
    });
    // About Section
    gsap.timeline({
        scrollTrigger: {
            scroller: '.hierarchy-scroller',
            trigger: '#about-section',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('#about-section > h1', {
        opacity: 0,
        scale: 0
    });
    // Stats Section
    gsap.timeline({
        scrollTrigger: {
            scroller: '.hierarchy-scroller',
            trigger: '#stats-section',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('#stats-section > h1', {
        opacity: 0,
        scale: 0
    });
}

onMounted(() => {
    createTimeLine();
})
</script>

<style lang="scss" scoped>
.hierarchy-scroller {
    height: 100%;
    overflow-y: scroll;
    @include mixins.scroller();


    .scroll-me {
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 22px;

        font-size: var(--font-3);
    }
    
    section {
        height: 100%;
        border: 1px solid blue;
        
        font-size: var(--font-2);
    }
}


.arrow-down--container {
    animation: indicateDown 0.8s ease-in-out infinite alternate;
}

@keyframes indicateDown {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-10px);
    }
}
</style>