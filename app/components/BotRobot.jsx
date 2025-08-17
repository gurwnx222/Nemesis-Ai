'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import { TextReveal } from '@/components/magicui/text-reveal';
import eye from '@/public/robot-images/Eye.png';
import robot from '@/public/robot-images/Robot.png';

import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';

const BotRobot = ({ formData, formSubmit }) => {
  const [emotions, setEmotions] = useState('');
  const prevMessage = useRef('');

  const [blurAmount, setBlurAmount] = useState(0);
  const [isSticky, setIsSticky] = useState(true);
  const threshold = 800;
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const maxBlur = 8;
        const blur = Math.min(scrollTop / 100, maxBlur);
        setBlurAmount(blur);
        setScrollY(scrollTop);

        setIsSticky(scrollTop > threshold && scrollTop < threshold + 1200);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    let newResponse = '';

    if (formSubmit) {
      newResponse = '🎉 Thanks for Joining!';
    } else if (!formData) {
      newResponse = `Hello Creator! I'm bubble`;
    } else if (!formData.includes('@')) {
      newResponse = 'Waiting for your response.';
    } else if (formData.includes('happy')) {
      newResponse = 'You seem happy!';
    } else if (formData.includes('sad')) {
      newResponse = `Aww, don't be sad.`;
    } else if (formData.includes('.com') || formData.includes('.in')) {
      newResponse = '❤ You are my Favorite Human Today!';
    } else {
      newResponse = 'Scanning...';
    }

    if (newResponse !== prevMessage.current) {
      prevMessage.current = newResponse;
      setEmotions(newResponse);
    }
  }, [formData, formSubmit]);

  return (
    <section id="vision">
      <div
        className="relative bg-black transition-all duration-500 ease-out"
        ref={containerRef}
      >
        {/* Sticky Bot Section */}
        <div className="sticky top-20 z-10 py-10">
          <div
            className="relative w-fit mx-auto transition-all duration-300 ease-in-out"
            style={{
              filter: `blur(${blurAmount}px)`,
              transition: 'filter 0.2s ease-in-out',
            }}
          >
            {/* Rounded Background - Centered */}
            <div className="absolute inset-0 lg:top-40 top-60 flex items-center justify-center -z-10">
              <div className="bg-[#1E1E1E] rounded-[100px] w-[300px] h-[370px] " />
            </div>

            {/* Bot Container */}
            <div className="relative z-10 overflow-x-hidden">
              {/* Chat Bubble - Positioned above robot */}
              <div className="absolute top-18 left-2/3 transform -translate-x-1/2 w-full max-w-xs">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={emotions}
                    initial={{ scale: 0.95, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
                    className="text-center  text-white rounded-full py-3 px-6 mx-auto"
                  >
                    {emotions}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bot Image - Centered */}
              <div className="flex justify-center lg:-translate-x-0 -translate-x-120 lg:w-auto w-[400%] h-full ">
                <Image
                  src={robot}
                  alt="bot"
                  width={1020}
                  height={1020}
                  className="w-[] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 mx-auto lg:px-4 max-w-4xl pb-40">
          {/* Mission Section - Fixed when sticky */}
          {scrollY > threshold && (
            <div
              className={`transition-all duration-500 ${
                isSticky ? 'fixed top-20 left-0 right-0 z-30' : 'relative pt-20'
              }`}
            >
              <AnimatedGradientTextDemo text={'Our Mission'} img={eye} />
            </div>
          )}

          {/* Text Reveal Sections */}
          <div className="space-y-40 mt-[50vh]">
            <AnimatePresence>
              <motion.div
                key="first-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white hidden sm:inline"
              >
                <TextReveal>
                  We believe every Threads creator deserves to be seen. That’s
                  why we’re building an AI assistant that takes care of
                  monetizing your reach so you can dive into creating, while we
                  make sure your voice spreads far and wide
                </TextReveal>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="first-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white sm:hidden "
              >
                <TextReveal>
                  We believe every Threads creator deserves to be seen. That’s
                  why we’re building bubble to help you automate boring stuff
                </TextReveal>
              </motion.div>
            </AnimatePresence>

            {/* <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white"
            >
              <TextReveal>
                Our AI agent eliminates this creator trap completely — it
                automates your entire conversion funnel, handles personalized
                outreach, and turns your engaged viewers into paying customers
                while you sleep.
              </TextReveal>
            </motion.div>
          </AnimatePresence> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotRobot;
