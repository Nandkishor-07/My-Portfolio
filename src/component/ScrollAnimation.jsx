import { useEffect } from 'react';

const ScrollAnimation = (selector, animationClass, rootMargin = '0px', threshold = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    }, { rootMargin, threshold });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [selector, animationClass, rootMargin, threshold]);
};

export default ScrollAnimation;
