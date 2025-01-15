import { gsap } from 'gsap';

export const fadeInFromTop = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    duration: 0.8,
    y: 30,
    opacity: 0,
    delay
  });
};

export const fadeInFromSide = (element: string, direction: 'left' | 'right', delay: number = 0) => {
  return gsap.from(element, {
    duration: 0.8,
    x: direction === 'left' ? -50 : 50,
    opacity: 0,
    delay
  });
};

export const staggerCards = (element: string) => {
  return gsap.from(element, {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom-=100'
    }
  });
};