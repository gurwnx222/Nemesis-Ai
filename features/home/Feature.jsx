'use client';
import React from 'react';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import rocket from './components/rocket.png';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { useRef } from 'react';
import { DataFlowAnimation } from './components/DataFlowAnimation';
import Image from 'next/image';
import vector from './components/images/Vector.png';
import vector2 from './components/images/Vector-2.png';
import user_mutiple from './components/images/user-multiple-4.png';
import click from './components/images/click.png';
import { Ripple } from '@/components/magicui/ripple';
import { AnimatedFollowers } from './components/AnimatedFollowers';
import { InfiniteMovingCardsDemo } from './components/CardsAnimations';

const Feature = () => {
  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  return (
    <div className="text-white mx-18 mt-30">
      {/* beam */}
      <AnimatedGradientTextDemo text={'Features'} img={rocket} />

      {/* Main Section */}
      <main className='mt-20 '>
        <div className="grid h-auto grid-cols-[2fr_1fr] border-2 border-[#9F9F9F]">
          <div className=" p-4 border-r-2 border-[#9F9F9F]">
            {/* Top Left section */}
            <DataFlowAnimation />

            <div className="flex flex-col gap-1.5 m-2 mt-15">
              <Image src={vector} alt="vector" />
              <h2 className="font-semibold text-2xl">
                Automated Resource Sharing
              </h2>
              <p className=" text-[#757575]">
                Bubble automatically responds to audience comments with relevant
                resources so creators don't have to manually share them
              </p>
            </div>
          </div>
          <div className="bg-transparent  p-4">
            <InfiniteMovingCardsDemo />
            {/* Contnet */}
            <div className="flex flex-col gap-1.5 m-2">
              <Image src={click} alt='click' />
              <h2 className="font-semibold text-2xl">Simple 3-Click Setup</h2>
              <p className=" text-[#757575]">
                Get started with the platform in a 3 click setup. Cutting down
                hours of manual setup.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Row 2: Wide Right --> */}
        <div className="grid grid-cols-[1fr_2fr] border-x-2 border-b-2 border-[#9F9F9F]">
          <div className="  border-r-2 border-[#9F9F9F]">
            <div className="relative flex gap-1.5 h-[400px] w-full  flex-col items-center justify-center overflow-hidden rounded-lg   bg-transparent ">
              <div className="z-10  text-white m-7 mt-50">
                <Image src={vector2} alt="vector -2" />
                <h2 className="font-semibold text-2xl">
                  Creating Comment funnel
                </h2>
                <p className=" text-[#757575]">
                  Bubble helps you create an exclusive comment funnels to boost
                  your sales while you sleep.
                </p>
              </div>
              <Ripple />
            </div>
          </div>
          <div className=" p-4 ">
            <AnimatedFollowers />

            <div className="m-2">
              <Image src={user_mutiple} alt="users" />
              <h2 className="font-semibold text-2xl">
                Automated DM Conversion
              </h2>
              <p className=" text-[#757575]">
                Bubble sends conditional DMs to convert people into followers
                (by the new Threads DM feature)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feature;
