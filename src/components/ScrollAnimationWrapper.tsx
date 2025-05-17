
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
              // Add animate-in class to all children except those with class 'scan-input'
              entry.target.querySelectorAll(':scope > *:not(.scan-input)').forEach((child) => {
                child.classList.add('animate-in');
              });
              entry.target.classList.add('parent-animate-in'); // Add a class to the parent to signal animation started
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
        return 'data-[state=parent-animate-in]:translate-x-0 -translate-x-10 opacity-0 data-[state=parent-animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'right':
        return 'data-[state=parent-animate-in]:translate-x-0 translate-x-10 opacity-0 data-[state=parent-animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'down':
        return 'data-[state=parent-animate-in]:translate-y-0 -translate-y-10 opacity-0 data-[state=parent-animate-in]:opacity-100 transition-all duration-500 ease-out';
      case 'up':
      default:
        return 'data-[state=parent-animate-in]:translate-y-0 translate-y-10 opacity-0 data-[state=parent-animate-in]:opacity-100 transition-all duration-500 ease-out';
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
