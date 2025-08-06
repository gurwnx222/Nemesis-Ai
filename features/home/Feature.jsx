import React from 'react';
import { AnimatedGradientTextDemo } from './components/AnimatedGradientTextDemo';
import rocket from './components/rocket.png';

const Feature = () => {
  return (
    <div className="text-white">
      {/* beam */}
      <AnimatedGradientTextDemo text={'Features'} img={rocket} />

      {/* Main Section */}
      <main >
        <div className="grid grid-cols-[2fr_1fr] border-2">
          <div className="bg-gray-800 p-4 border-r-2">Left 1 </div>
          <div className="bg-gray-700 p-4">Right 1 </div>
        </div>

        {/* <!-- Row 2: Wide Right --> */}
        <div className="grid grid-cols-[1fr_2fr] border-x-2 border-b-2">
          <div className="bg-gray-700 p-4 border-r-2">Left 2 </div>
          <div className="bg-gray-800 p-4">Right 2 </div>
        </div>
      </main>
    </div>
  );
};

export default Feature;
