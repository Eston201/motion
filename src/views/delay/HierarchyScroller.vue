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

        <section class="about-section">
            <div class="about-header">
                <h1>Our Grease</h1>
                <p>At Grease Monkeys, we’re driven to keep you moving safely and smoothly. From quick tune-ups to major repairs, our skilled team delivers top-notch service you can trust. We’re passionate about cars, committed to quality, and dedicated to making every visit a satisfying experience.</p>
            </div>
            <div class="icon--container">
                <!-- Taken from https://svgmix.com/item/XnPwll/monkey-zodiac -->
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5925 18.1345C22.9329 16.6704 24.5079 13.1567 20.0846 10.8141C19.0793 10.1634 18.5 8.50002 17.5714 5.44585C13.7178 3.33107 5 3.00018 4 14.0004V44" stroke="#f2f2f2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 25C21.5818 26.673 28.0333 30.2543 32 41C33.5333 44.7543 40.5067 45.8705 43.5 40C44.4978 38.0432 44 34.5035 39.5818 32.4503C36.4615 31.0002 34 26 38.5 24.0003C40.3478 23.397 42.4291 24.08 44 27.0002" stroke="#f2f2f2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29 35.0004C24.6552 33.8942 15.7724 34.5187 15 44" stroke="#f2f2f2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </section>


        <section class="stats-section">
            <div class="icon--container">
                <!-- Taken from https://www.svgrepo.com/svg/322818/monkey-wrench -->
                <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f2f2f2" d="M417.972 37.51c-1.67-.02-3.093.17-4.218.544l-20.127 6.71 63.95 63.948-22.628 22.627 21.212 21.212 27.576-27.578c6.01-6.01 7.04-13.12 4.383-23.152-2.655-10.033-9.698-21.883-18.933-32.438-9.235-10.554-20.62-19.874-31.123-25.603-7.878-4.297-15.083-6.214-20.092-6.27zM354.338 98.81l-45.952 45.95c5.99 1.255 12.28 2.304 18.506 2.534 12.166.45 23.204-1.815 32.397-11.008l6.362-6.363 17.64 17.64.073.073 4.914 4.914 9.9-9.9-43.842-43.84zm67.884 45.254l-21.214 21.215 21.212 21.213 21.213-21.214-21.21-21.214zm-56.57 14.156c-1.773 0-3.545.703-4.95 2.107-2.808 2.808-2.808 7.09 0 9.9 2.81 2.81 7.09 2.81 9.9 0 2.808-2.81 2.808-7.092 0-9.9-1.405-1.405-3.177-2.108-4.95-2.108zm-72.32 1.596l-28.09 28.09 93.516 93.513c1.927-.694 5.33-2.472 9.257-5.14 4.036-2.746 8.643-6.35 13.44-10.464-7.204 2.642-15.128 1.97-21.463-4.366l-33.942-33.94c-16.086-16.088 4.237-42.443 23.043-41.142 1.67.116 3.328.455 4.948 1.034-2.19-1.138-4.24-2.62-6.066-4.446-5.053-5.053-7.464-11.816-7.246-18.507-4.92.785-9.81 1.008-14.502.834-12.924-.478-24.25-3.404-32.894-5.466zm94.226 17.47c-1.107 2.04-2.513 3.953-4.228 5.668-7.18 7.18-17.813 9.033-26.78 5.573 1.688.903 3.32 2.09 4.856 3.624l33.94 33.94c6.817 6.816 7.093 15.475 3.722 23.093 8.43-8.698 16.1-17.75 21.014-24.975 2.67-3.925 4.45-7.328 5.144-9.256l-37.668-37.668zM254.3 202.42l-26.195 43.66 4.04 19.296 17.374 3.31 35.523-35.523L254.3 202.42zm93.024 1.96c-3.75.04-11.022 7.926-8.547 10.4l33.94 33.942c2.83 2.828 12.73-7.07 9.902-9.898l-33.943-33.942c-.353-.353-.817-.508-1.353-.502zm-38.24 52.824l-4.95 4.95c-7.424 7.424-10.522 14.256-11.244 19.304-.72 5.05.637 8.274 2.758 10.395 2.12 2.12 5.346 3.48 10.395 2.758 5.048-.72 11.88-3.82 19.304-11.244l4.95-4.95-21.213-21.212zm-95.91 5.4L47.7 428.076c4.836 1.544 9.377 4.213 13.188 8.024 3.812 3.813 6.48 8.357 8.024 13.192l165.215-165.215-17.143-3.265-3.81-18.21zM37.554 444.377c-3.82 0-7.638 1.485-10.605 4.45-5.934 5.935-5.934 15.28 0 21.214 5.932 5.934 15.28 5.934 21.212 0 5.933-5.933 5.933-15.28 0-21.213-2.967-2.967-6.788-4.452-10.608-4.452z"/>
                </svg>
            </div>
            <h1>Monkey Metrics</h1>

            <div class="stats-grid">
                <article class="stat-block">
                    <h4>1000000+</h4>
                    <span>Liters Of Oil Changed</span>
                </article>
                <article class="stat-block">
                    <h4>3000+</h4>
                    <span>Cars Repaired</span>
                </article>

                <article class="stat-block">
                    <h4>97%</h4>
                    <span>Satisfaction</span>
                </article>

                <article class="stat-block">
                    <h4>15,000 Hrs</h4>
                    <span>Under The Hood</span>
                </article>

                <article class="stat-block">
                    <h4>3,000+</h4>
                    <span>Brakes Replaced</span>
                </article>

                <article class="stat-block">
                    <h4>1000+</h4>
                    <span>Dents Repaired</span>
                </article>

                <article class="stat-block">
                    <h4>4000+</h4>
                    <span>Cars Washed</span>
                </article>

                <article class="stat-block">
                    <h4>500+</h4>
                    <span>Batteries Replaced</span>
                </article>
            </div>
        </section>
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
            trigger: '.hero-section',
            start: 'top 50%',
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
            trigger: '.about-section',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('.about-section .icon--container', {
        y: "+=50%",
        opacity: 0,
        ease: 'sine.inOut'
    })
    .from('.about-section .about-header h1', {
        x: -100,
        opacity: 0,
    })
    .from('.about-section .about-header p', {
        x: -50,
        opacity: 0,
    });
    // Stats Section
    gsap.timeline({
        scrollTrigger: {
            scroller: '.hierarchy-scroller',
            trigger: '.stats-section',
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 1,
            // markers: true
        }
    })
    .from('.stats-section > h1', {
        opacity: 0,
        scale: 0
    })
    .from('.stats-section .icon--container', {
        y: "-=100%",
        opacity: 0,
    }, "<50%")
    .from('.stats-section > .stats-grid > .stat-block', {
        scale: 0,
        opacity: 0,
        stagger: {
            amount: 0.5,
            grid: 'auto',
            from: 'random'
        },
        // duration: 2
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
%grid-12-6 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);   
}

.hero-section {
    height: 100%;
    @extend %grid-12-6;

    .header {
        grid-column: 2 / -2;
        grid-row: 3;

        h1 {
            width: fit-content;
            font-size: var(--font-5);
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

.about-section {
    @extend %grid-12-6;

    .about-header {
        grid-column: 2 / 8;
        grid-row: 3;

        h1 {
            font-size: var(--font-4);
        }
        
        p {
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 1.6;
        }
    }
    
    .icon--container {
        position: relative;
        grid-column: 9 / -1;
        grid-row: 3;
        width: 50%;
        height: 100%;

        &::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -10;
            
            width: 200%;
            height: 200%;
            transform: translate(-25%, -25%);
            // Generated using https://www.magicpattern.design/tools/blob-generator
            background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M858 624q-63 124-175 200.5T418 904q-153 3-249-122.5T116.5 516Q160 376 225 256t197.5-93.5Q555 189 674 221.5T857 377q64 123 1 247Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.25 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%2318191b%22 d=%22M858 624q-63 124-175 200.5T418 904q-153 3-249-122.5T116.5 516Q160 376 225 256t197.5-93.5Q555 189 674 221.5T857 377q64 123 1 247Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
            background-repeat: no-repeat;
            background-position: center center;
        }
        
        svg {
            width: 100%;
            height: 100%;
        }
    }
}

.stats-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;

    .icon--container {
        width: 125px;
        height: 125px;

        position: absolute;
        top: 0;
        right: 100px;
        transform: rotate(135deg);

        svg {
            width: 100%;
            height: 100%;
        }
    }

    h1 {
        font-size: var(--font-4);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 12px;

        .stat-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            
            padding: 22px;
            border: 1px solid var(--slate-6);
            border-radius: 6px;

            h4 {
                letter-spacing: 1px;
                font-size: var(--font-2);
            }
            
            span {
                font-size: 18px;
                font-family: "Nunito Sans", sans-serif;
            }
        }
    }
}
</style>