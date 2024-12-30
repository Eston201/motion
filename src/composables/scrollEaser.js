import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export function useScrollEaser(scroller, ease = 4) {
    // Delta
    let current = Date.now();
    let delta = 0.016;

    let frameId = null;
    const scroll = {
        element: null,
        deltaEase: ease / 10,
        position: 0,
        target: 0,
        limit: 0
    }

    function easeScroller(e) {
        scroll.target = scroll.target + (e.deltaY * scroll.deltaEase);
        scroll.target = gsap.utils.clamp(0, scroll.limit, scroll.target);
    }

    function updateScroller() {
        // Get delta
        const currentTime = Date.now();
        delta = (currentTime - current) / 1000;
        current = currentTime;

        scroll.position += (scroll.target - scroll.position) * ease * delta;
        scroll.element.scrollTop = scroll.position;
        frameId = requestAnimationFrame(updateScroller);
    }

    onMounted(() => {
        scroll.element = document.querySelector(scroller);
        scroll.limit = scroll.element.scrollHeight - scroll.element.clientHeight;
        scroll.element.addEventListener('wheel', easeScroller);
        updateScroller();
    });

    onUnmounted(() => {
        window.removeEventListener('wheel', updateScroller);
        cancelAnimationFrame(frameId);
    });
}