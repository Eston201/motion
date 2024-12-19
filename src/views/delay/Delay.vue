<template>
    <div class="page--container delay-page">
        <h1>Delay</h1>
        <p>A subtle delay between multiple objects creates a sense of fluidity and layered motion. This approach also guides the user's focus, highlighting an object's position within the hierarchy of elements.</p>
        <main>
            <section class="delay-softness">
                <h4>Softness</h4>
                <article></article>
            </section>
            
            <section class="delay-hierarchy">
                <h4>Hierarchy</h4>
                <article></article>
            </section>
            
            <section class="delay-attention">
                <h4>Attention</h4>
                <article></article>
            </section>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    gsap.from('h1', {
        x: -40,
        opacity: 0,
        duration: 1
    })
})
</script>

<style lang="scss" scoped>
.delay-page {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 150px 50px 1fr;

    overflow-y: scroll;

    h1 {
        align-self: flex-end;
        grid-column: 2 / -1;
        font-size: var(--font-4);
    }

    p {
        grid-row: 2 / 2;
        grid-column: 2 / 9;
        letter-spacing: 1px;
        line-height: 1.6;
    }


    main {
        margin-top: 44px;
        grid-row: 3 / -1;
        grid-column: 1 / -1;
        
        section {
            height: 100%;

            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 50px 1fr;

            &:nth-of-type(even) {
                margin-block: 22px;
            }

            h4 {
                position: relative;
                align-self: flex-end;
                grid-column: 2 / -1;

                color: var(--slate-11);
                font-size: var(--font-1);
                font-family: "Nunito Sans", sans-serif;
                text-transform: uppercase;
                letter-spacing: 1px;

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;

                    width: 40%;
                    height: 1px;
                    background-color: var(--slate-6);
                }
            }
        }
    }
}
</style>