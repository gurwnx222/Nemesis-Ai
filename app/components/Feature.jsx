import React from 'react';

// Import an icon component
import { RocketIcon } from '@radix-ui/react-icons'; // or any icon you prefer

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import rocket from '@/public/rocket.png';

import { AnimatedGradientTextDemo } from './AnimatedGradientTextDemo';

const Feature = () => {
  return (
    <section id="features">
      <div className="text-white">
        {/* beam */}
        <AnimatedGradientTextDemo text={'Features'} img={rocket} />
        {/* Main Section */}
        <BentoGrid>
          <BentoCard
            name="Feature 1"
            description="This is a description of the first feature"
            Icon={RocketIcon}
            href="/feature-1"
            cta="Learn more"
            background={
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-full h-full" />
            }
          />
          <BentoCard
            name="Feature 2"
            description="This is a description of the second feature"
            Icon={RocketIcon}
            href="/feature-2"
            cta="Explore"
            background={
              <div className="bg-gradient-to-br from-green-500 to-blue-600 w-full h-full" />
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default Feature;
