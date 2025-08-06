'use client';
import React from 'react';
// eslint-disable-next-line camelcase
import { Bruno_Ace_SC } from 'next/font/google';

const brunoAceSC = Bruno_Ace_SC({
  weight: '400', // Only use the available weight
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  return (
    <div
      className={`text-white flex justify-around mt-4 ${brunoAceSC.className}`}
    >
      <h2 className=" tracking-widest  font-bold">Nemesis</h2>
      <div className="bg-white w-8 border  rounded-full  flex justify-center ">
        <button className="text-black cursor-pointer text-xl">☰</button>
      </div>
    </div>
  );
};

export default Navbar;
