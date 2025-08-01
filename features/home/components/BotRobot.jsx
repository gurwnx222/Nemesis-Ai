'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import robot from './Robot.png';
import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';
import { TextReveal } from '@/components/magicui/text-reveal';
import { AnimatePresence, motion } from 'framer-motion';

const BotRobot = () => {
  const [blurAmount, setBlurAmount] = useState(0);

  const [scrollY, setScrollY] = useState(0);

  // ✅ Update scrollY on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxBlur = 8; // maximum blur in pixels
      const blur = Math.min(scrollTop / 100, maxBlur);
      setBlurAmount(blur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScrollCom = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScrollCom);

    return () => window.removeEventListener('scroll', handleScrollCom);
  }, []);

  return (
    <div className="relative h-[270vh] bg-black">
      {/* Sticky Section */}

      <div className="sticky top-40 z-10">
        <div
          className="relative w-fit mx-auto transition-all duration-300 ease-in-out "
          style={{
            filter: `blur(${blurAmount}px)  `,
            transition: 'filter 0.1s ease-in-out',
          }}
        >
          {/* Rounded Background */}
          <div className="bg-[#1E1E1E] rounded-[100px] w-[300px] h-[370px] absolute top-20 left-88 z-0"></div>

          {/* Bot Image  */}
          <div className="relative z-10 w-auto">
            <Image src={robot} alt="bot" width={1020} height={1020} />
          </div>
        </div>
      </div>

      {/* Content After Bot */}
      <div
        className={`transition-all duration-300 z-20 mx-auto text-center
        ${isSticky ? 'fixed top-20 left-77' : 'relative '}
        `}
      >
        <div className=" text-white relative  z-20 ">
          <AnimatedGradientTextDemo />
        </div>

        <AnimatePresence>
          {scrollY <= 800 && (
            <motion.div
              key="first-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 0.6 }}
              className="text-white relative text-center -top-20 z-20"
            >
              <TextReveal>
                You're bleeding time and money. Every hour you spend manually
                responding to comments and chasing DMs is an hour stolen from
                creating the content that actually grows your audience.
              </TextReveal>
            </motion.div>
          )}

          {scrollY <= 2000 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white relative items-center text-center -top-20 z-20"
            >
              <TextReveal>
                Our AI agent eliminates this creator trap completely — it
                automates your entire conversion funnel, handles personalized
                outreach, and turns your engaged viewers into paying customers
                while you sleep .
              </TextReveal>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default BotRobot;
