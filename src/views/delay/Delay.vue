<template>
    <div>
        
        <h1>Delay</h1>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
    gsap.from('h1', {
        y: 40
    })
})
</script>

<style lang="scss" scoped>

</style>