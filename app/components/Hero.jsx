'use client';

import React, { useState } from 'react';

import rocket from '@/public/rocket.png';

import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';
import BotRobot from './BotRobot';
import Feature from './Feature';
import Team from './Team';

const Hero = () => {
  const [formData, setFormData] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);

  const handleWaitListForm = e => {
    e.preventDefault();
    // logic of backend
    console.log(formData);

    setFormSubmit(true);
    setFormData('');
  };

  return (
    <section className="m-10 w-auto  h-auto">
      <div className="flex flex-col mx-auto items-center gap-5 text-center p-10">
        <AnimatedGradientTextDemo text={'Launching soon!'} img={rocket} />
        <h2 className="text-4xl 2xl:text-5xl 2xl:leading-auto font-semibold bg-gradient-to-r from-[#BB86FC] to-[#D0A8FF] text-transparent bg-clip-text">
          Reclaim Your Time—Let Bubble Handle <br />
          Your Threads Audience
        </h2>
        <p className="text-[#9F9F9F] text-sm -mt-4 2xl:text-lg 2xl:mt-4.4">
          Our AI agent delivers your resources directly to your audience&apos;s
          DMs and comments, <br />
          so you can spend more time doing what you love.
        </p>
      </div>

      {/* Form - waitlist */}
      <div className="p-[2px] w-[23%] md:w-[26%] mx-auto mt-14 rounded-xl bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500">
        <div className="bg-black rounded-lg py-2 text-white flex flex-row gap-2 ">
          <form onSubmit={handleWaitListForm}>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData}
              onChange={e => setFormData(e.target.value)}
              className="pl-2 p-3 outline-none border-none bg-transparent md:h-4 md:text-lg md:pl-4"
              required
            />

            <button
              className="ml-15 p-2 bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer w-30 rounded-xl"
              type="submit"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Bot Robot data */}
      <BotRobot formData={formData} formSubmit={formSubmit} />

      <Team />

      <Feature />
    </section>
  );
};

export default Hero;
