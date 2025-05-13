
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'data-[state=animate-in]:translate-x-0 -translate-x-10 opacity-0 data-[state=animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'right':
        return 'data-[state=animate-in]:translate-x-0 translate-x-10 opacity-0 data-[state=animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'down':
        return 'data-[state=animate-in]:translate-y-0 -translate-y-10 opacity-0 data-[state=animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'up':
      default:
        return 'data-[state=animate-in]:translate-y-0 translate-y-10 opacity-0 data-[state=animate-in]:opacity-100 transition-all duration-500 ease-out';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getDirectionClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
