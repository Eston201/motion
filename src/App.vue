<template>
  <!-- Motion is art. Design is impact. -->
  <div class="spa--container">
    <div class="nav--container">
      <Navigation/>
    </div>

    <main class="router--container">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.nav--container', {
    y: "+=100%",
    opacity: 0,
    delay: 1.2,
    ease: 'back.out(1.75)',
    duration: 0.8
  });
});
</script>

<style lang="scss" scoped>
.spa--container {
  height: 100%;
  width: 100%;
}

.nav--container {
  position: fixed;
  bottom: 22px;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);

  width: min(30%, 400px);
  height: 55px;

  background-color: rgba(24, 25, 27, 0.4);
  border-radius: 4px;
  backdrop-filter: blur(14px);
}

.router--container {
  height: 100%;
  width: 100%;
}
</style>
