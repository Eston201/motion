import './styles/index.scss';
import App from './App.vue';
import router from './router/router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
