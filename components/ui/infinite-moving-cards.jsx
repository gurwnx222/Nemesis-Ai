'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export const InfiniteMovingCards = ({
  items,
  direction = 'right',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // ✅ define function inside useEffect so it's available immediately
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        // ✅ call helpers
        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    function getDirection() {
      if (containerRef.current) {
        containerRef.current.style.setProperty(
          '--animation-direction',
          direction === 'left' ? 'forwards' : 'reverse'
        );
      }
    }

    function getSpeed() {
      if (containerRef.current) {
        containerRef.current.style.setProperty(
          '--animation-duration',
          speed === 'fast' ? '10s' : speed === 'normal' ? '20s' : '40s'
        );
      }
    }

    addAnimation(); // ✅ call AFTER defining
  }, [direction, speed]); // include deps to avoid warnings

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-[500px] min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[200px] shrink-0 rounded-2xl bg-[#1E1E1E] px-8 py-6 md:w-[220px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              <span className="relative z-20 text-xl font-normal leading-[1.6] text-[#4F4F4F] dark:text-gray-100">
                {item.title}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-normal leading-[1.6] text-[#656464] dark:text-gray-400">
                    {item.quote}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
