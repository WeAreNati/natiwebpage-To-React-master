import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.motif > *', { y: '0%' }, { y: '25%',
      scrollTrigger: {
        trigger: '.motif',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo('.hero-bg', { y: '0%' }, { y: '25%',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    const about = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    about
      .fromTo('.about-bg', { y: '-20%' }, { y: '20%' }, 'a')
      .fromTo('.about-word div', { x: '20%' }, { x: '-20%' }, 'a');

    gsap.fromTo('.how-bg', { y: '-20%' }, { y: '20%',
      scrollTrigger: {
        trigger: '.how',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    const iframe = document.querySelector('#uniswap-iframe');
    const iframeLoad = ScrollTrigger.create({
      trigger: iframe,
      start: 'top bottom',
      onEnter() {
        iframe.setAttribute('src', iframe.dataset.src);
        iframe.scrollIntoView(false);
        iframeLoad.kill();
      }
    });

    gsap.fromTo('.token-triangle-svg svg', { width: '0%', opacity: 0 }, { width: '100%', opacity: .5,
      scrollTrigger: {
        trigger: '.token',
        start: 'top 60%',
        end: 'top top',
        scrub: true,
      }
    });

    const circleTimeline = {
      trigger: '.token-triangle-trigger',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    };

    const circle = gsap.timeline({ scrollTrigger: circleTimeline });
    circle
      .from('.c92', { duration: 60, strokeDasharray: '0 360' })
      .from('.c7', { duration: 30, strokeDasharray: '0 360' })
      .from('.c1', { duration: 20, strokeDasharray: '0 360' });

    gsap.fromTo('.token-circle-svg', { rotate: 180 }, { duration: 110, rotate: 360, scrollTrigger: circleTimeline });
    gsap.from('.token-title text', { y: '100%', scrollTrigger: circleTimeline });

    gsap.fromTo('.token-bg', { y: '-20%' }, { y: '20%',
      scrollTrigger: {
        trigger: '.token .bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo('.token-triangle', { opacity: 1 }, { opacity: 0,
      scrollTrigger: {
        trigger: '.token .content',
        start: 'top bottom',
        end: 'top 20%',
        scrub: true,
      }
    });

    gsap.fromTo('.road-bg', { y: '-20%' }, { y: '20%',
      scrollTrigger: {
        trigger: '.road',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, []);
};

export default useGsapAnimations;
