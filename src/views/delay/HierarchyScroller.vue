<template>
    <div class="hierarchy-scroller">
        <div class="scroll-me">
            <h1>Scroll Me</h1>
            <div class="arrow-down--container">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
            </div>
        </div>

        <section class="hero-section"> 
            <div class="header">
                <h1>Grease Monkeys</h1>
                <p>No Monkey Business, Just Quality Repairs!</p>
            </div>  
            <div class="image--container">
                <img 
                    src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="A mechanic working"
                >
            </div>
        </section>

        <section id="about-section">
            <h1>Our Grease</h1>
            <p>At Grease Monkeys, we believe every car deserves the best care and every driver deserves peace of mind on the road. Our purpose is to keep you moving safely and smoothly, whether it’s a quick tune-up, a major repair, or simply answering your automotive questions. We’re not just fixing cars—we’re building trust, one satisfied customer at a time. Our team of skilled technicians is passionate about delivering top-notch service, and we’re committed to making every visit an experience you’ll want to tell your friends about. At Grease Monkeys, our purpose fuels us, and your satisfaction drives us forward.</p>
        </section>


        <section id="stats-section"><h1>Our Stats</h1></section>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

const createTimeLine = () => {
    // Hero Section
    gsap.timeline({
        scrollTrigger: {
            scroller: '.hierarchy-scroller',
            trigger: '.hero-section',
            start: 'top 40%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('.hero-section .header h1', {
        y: "+=100%",
        opacity: 0
    })
    .from(".hero-section .header p", {
        y: "+=100%",
        opacity: 0
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
    padding-right: 12px;
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

// Sections
.hero-section {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);

    .header {
        grid-column: 2 / -2;
        grid-row: 3;

        h1 {
            width: fit-content;
            font-size: var(--font-5);
            font-family: "Nunito Sans", sans-serif;
        }
        
        p {
            width: fit-content;
            font-size: 18px;
            padding-inline: 12px;
        }
    }


    .image--container {
        position: relative;
        z-index: -1;
        
        height: 100%;

        grid-column: 1 / -1;
        grid-row: 1 / -1;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;

            background-color: rgba(0, 0, 0, 0.6);
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
}
</style>