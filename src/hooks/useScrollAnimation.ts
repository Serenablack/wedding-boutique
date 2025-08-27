import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  triggerOnce?: boolean;
  onIntersect?: (index: number) => void;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-fade-in',
    triggerOnce = false,
    onIntersect,
  } = options;

  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation class
            entry.target.classList.add(animationClass);

            // Call onIntersect callback if provided
            if (onIntersect) {
              const index = parseInt(
                entry.target.getAttribute('data-index') || '0'
              );
              onIntersect(index);
            }

            // If triggerOnce is true, disconnect observer for this element
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Remove animation class when element goes out of view
            // This allows the animation to trigger again when it comes back into view
            entry.target.classList.remove(animationClass);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all elements
    elementRefs.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, animationClass, triggerOnce, onIntersect]);

  const setElementRef = (index: number) => (element: HTMLElement | null) => {
    elementRefs.current[index] = element;
  };

  return { setElementRef };
};
