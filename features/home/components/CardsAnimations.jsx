// ="use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
    </div>
  );
}

const testimonials = [
  {
    title: "01. Sign Up",
    quote:
      "Create an account on ThreadSnatch. Login with threads account and start using bubble.",
    name: "Charles Dickens",
    
  },
  {
       title: "02. Select Post",
    quote:
      "After creating an acc-ount. Select the postyou wanted to do thebubble its magic.",
    name: "William Shakespeare",
 
  },
  {
    title: "03. Add Trigger",
    quote: "After selecting the bubble. Add its trigger like (droping Hi in comments etc) to share the resource you wanted to share.",
    name: "Edgar Allan Poe",
    
  },

];
