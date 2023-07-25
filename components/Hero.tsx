"use client";

import Image from "next/image";
import { Button } from "@/components";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore and choose your favorite cocktails!
        </h1>

        <p className="hero__subtitle">
          All your favorite drinks on the tip of your fingers
        </p>

        <Button
          title="Explore drinks"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image rounded-xl">
          <Image
            src="/cocktails-5.png"
            alt="cocktails"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
