'use client';

import React, { useState } from 'react';

import axios from 'axios';

import rocket from '@/public/rocket.png';

import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';
import BotRobot from './BotRobot';
import Feature from './Feature';
import Team from './Team';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);

  const handleWaitListForm = async e => {
    e.preventDefault();
    // logic of backend

    try {
      const res = await axios.post('/api/email', { email });
      console.log('Success: ', res.data);
      setFormSubmit(true);
      setEmail('');
    } catch (err) {
      console.error('Error: ', err);
      setFormSubmit(false);
    }

    // console.log(formData);

    // setFormSubmit(true);
    // setFormData('');
  };

  return (
    <section id="home" className="m-8 lg:m-10 w-auto  h-auto">
      <div className="flex flex-col mx-auto items-center pt-10 gap-5 text-center sm:p-10">
        <AnimatedGradientTextDemo text={'Launching soon!'} img={rocket} />
        <h2 className=" hidden sm:inline text-4xl 2xl:text-5xl 2xl:leading-auto font-semibold bg-gradient-to-r from-[#BB86FC] to-[#D0A8FF] text-transparent bg-clip-text">
          Reclaim Your Time—Let Bubble Handle <br />
          Your Threads Audience
        </h2>
        <h2 className="sm:hidden text-3xl lg:text-4xl  2xl:leading-auto font-semibold bg-gradient-to-r from-[#BB86FC] to-[#D0A8FF] text-transparent bg-clip-text">
          Let Bubble Handle Your Resource Sharing
        </h2>
        <p className="sm:inline hidden text-[#9F9F9F] text-sm -mt-4 2xl:text-lg 2xl:mt-4.4">
          Our AI agent delivers your resources directly to your audience&apos;s
          DMs and comments, <br />
          so you can spend more time doing what you love.
        </p>
        <p className="sm:hidden text-[#9F9F9F] text-sm -mt-4 2xl:text-lg 2xl:mt-4.4">
          Our Ai sends your resources to your audience’s DM and comments
        </p>
      </div>

      {/* Form - waitlist */}
      <div className="p-[2px] w-[280px] lg:w-[23%] md:w-[26%] mx-auto mt-14 rounded-xl bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500">
        <div className="bg-black h-14 lg:h-16  rounded-lg py-2 text-white flex flex-row gap-2 justify-center items-center ">
          <form onSubmit={handleWaitListForm}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="pl-2 p-3 translate-y-4 outline-none border-none bg-transparent md:h-4 md:text-lg md:pl-4"
            />

            <button
              className="p-2 lg:ml-20 ml-42 lg:w-30 w-24 text-sm 2xl:ml-50 lg:-translate-y-3.5 -translate-y-6 bg-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer rounded-lg"
              type="submit"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Bot Robot data */}
      <BotRobot email={email} formSubmit={formSubmit} />

      <Team />

      <Feature />
    </section>
  );
};

export default Hero;
