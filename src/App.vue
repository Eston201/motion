<template>
  <!-- Motion is art. Design is impact. -->
  <div class="spa--container">
    <div class="nav--container" ref="navContainer">
      <button class="nav-btn" @click="navBtnHandler">
        <span v-if="isNavClosed">></span>
        <span v-else><</span>
      </button>
      <Navigation @navClose="navBtnHandler"/>
    </div>

    <main class="router--container">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import gsap from 'gsap';

const isNavClosed = ref(true);
const navContainer = ref(null);

function navBtnHandler() {
  isNavClosed.value = !isNavClosed.value;
  navContainer.value.classList.toggle('open');
}

onMounted(() => {
  const currentRoute = window.location.pathname.replace('/', "");
  if (currentRoute === "") {
    gsap.from('.nav-btn', {
      x: "-=50%",
      opacity: 0,
      delay: 1
    });
  }
})
</script>

<style lang="scss" scoped>
.spa--container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.nav--container {
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 1000;
  transform: translateX(-100%);
  
  width: 200px;
  height: 90%;
  
  background-color: rgba(24, 25, 27, 0.4);
  border: 1px solid var(--slate-3);
  border-radius: 4px;
  backdrop-filter: blur(14px);
  transition: transform 0.3s ease-out;

  nav {
    opacity: 0;
    transition: opacity 0.5s 0.2s ease-out;
  }
  
  &.open {
    nav { opacity: 1; }
    transform: translateX(10%);
    transition: transform 0.7s cubic-bezier(0.3, 1.5, 0.64, 1);
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    right: 0px;
    z-index: -10;
    transform: translate(100%, -50%);
    
    height: 100px;

    color: var(--slate-1);
    background-color: var(--slate-12);
    border: 1px solid var(--slate-11);
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    cursor: pointer;
  }
}

.router--container {
  height: 100%;
  width: 100%;
}
</style>
