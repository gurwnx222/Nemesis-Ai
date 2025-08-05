import React from 'react';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import rocket from './components/rocket.png';
import Image from 'next/image';
import image1 from './components/images/image1.png';
import image2 from './components/images/image2.png';

const Team = () => {
  return (
    <div className="gap-10 h-auto text-white mt-30">
      <div>
        {/* beam */}
        <AnimatedGradientTextDemo text={'The Team'} img={rocket} />
      </div>

      <div className="relative flex flex-col items-center right-26 mt-26">
        <div className="relative w-[300px] rounded-[50px]  p-7 z-0 bg-[#1E1E1E] ">
          {/* Box-1 */}
          <Image
            src={image1}
            alt="inverted comma"
            width={30}
            className=" float-right -mt-2"
          />
          <div className="flex mt-6 text-justify  ">
            Currently there is no dedicated platform for growing on Threads. I
            envisioned automating the Threads journey to empower creators like
            us, so if we’re not doing it, then who will?
          </div>

          <Image src={image2} alt="inverted comma" width={30} />
        </div>
        {/* Box-2 */}
        <div className="relative w-[300px] rounded-[50px] left-[18%] -top-10 p-7 z-10 bg-[#1E1E1E]">
          {/* Box-1 */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
            saepe beatae, ipsa iure neque pariatur tempora magnam ipsum vitae?
            Ullam ex minima, sapiente tempore ipsam molestias quae suscipit est.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
