import React from 'react';
import Image from 'next/image';

import gurwinder from '@/public/images/gurwinder.png';
import image1 from '@/public/images/image1.png';
import image2 from '@/public/images/image2.png';
import yash from '@/public/images/yash.png';
import rocket from '@/public/rocket.png';

import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';

const Team = () => {
  return (
    <div className="gap-10 h-auto text-white mt-30">
      <div>
        {/* beam */}
        <AnimatedGradientTextDemo text={'The Team'} img={rocket} />
      </div>

      {/* For Gurwinder */}
      <div className="relative flex flex-col items-center right-26 mt-26 ">
        <div className="relative w-[330px] h-[300px] rounded-[50px]  p-7 z-0 bg-[#1E1E1E] flex flex-col justify-center ">
          {/* Box-1 */}
          <Image
            src={image1}
            alt="inverted comma"
            width={30}
            className="ml-[250px] -mt-2"
          />
          <div className="flex text-justify text-xl  ">
            Currently there is no dedicated platform for growing on Threads. I
            envisioned automating the Threads journey to empower creators like
            us, so if we’re not doing it, then who will?
          </div>

          <Image src={image2} alt="inverted comma" width={30} />
        </div>
        {/* Box-2 */}
        <div className="relative w-[330px] h-[300px] rounded-[50px] left-[18%] -top-10 p-7 z-10 bg-[#1E1E1E] flex flex-col justify-center ">
          {/* Box-1 */}

          <Image src={gurwinder} alt="gurwinder" />
        </div>
      </div>

      {/* for yash */}
      <div className="relative flex flex-col items-center right-26 mt-26 ">
        <div className="relative w-[330px] h-[300px] rounded-[50px]  p-7 z-0 bg-[#1E1E1E] flex flex-col justify-center ">
          {/* Box-1 */}
          <Image
            src={image1}
            alt="inverted comma"
            width={30}
            className="ml-[250px] -mt-2"
          />
          <div className="flex text-justify text-xl  ">
            We built this to help creators automate smarter, grow faster, and
            focus on what truly matters — without wasting energy on repetitive
            tasks.
          </div>

          <Image src={image2} alt="inverted comma" width={30} />
        </div>
        {/* Box-2 */}
        <div className="relative w-[330px] h-[300px] rounded-[50px] left-[18%] -top-10 p-7 z-10 bg-[#1E1E1E] flex flex-col justify-center ">
          {/* Box-1 */}

          <Image src={yash} alt="yash" />
        </div>
      </div>
    </div>
  );
};

export default Team;
