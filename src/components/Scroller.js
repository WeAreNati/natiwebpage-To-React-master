import { useEffect } from 'react';

// Define the Scroller class
class Scroller {
  constructor() {
    this.class = {
      fix: 'fix',
      reveal: 'reveal'
    };
    this.fixer = 100;
    this.pos = 0;
    this.elementsToObserve = document.querySelectorAll('[data-reveal]');
    this.each = 200;
    this.scrollableDivs = document.querySelectorAll('.scroll-x');

    window.addEventListener('scroll', () => this.fixDetect());

    this.revealAnimation();
  }

  fixDetect() {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      document.body.classList.add(this.class.fix);
    } else {
      document.body.classList.remove(this.class.fix);
    }

    this.pos = scrollY;
  }

  revealAnimation() {
    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add(this.class.reveal), delay);
          delay += this.each;
          observer.unobserve(entry.target);
        }
      });
    });

    this.elementsToObserve.forEach((element) => {
      observer.observe(element);
    });
  }
}

// Custom hook to use Scroller
const useScroller = () => {
  useEffect(() => {
    const scroller = new Scroller();

    return () => {
      window.removeEventListener('scroll', scroller.fixDetect);
    };
  }, []);
};

export default useScroller;
