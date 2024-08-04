"use client";

import Image from "next/image";
import cogImage from "@/public/cog.png";
import cylinderImage from "@/public/cylinder.png";
import noodleImage from "@/public/noodle.png";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip ">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              financio is here
            </div>
            <h1 className="md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Finance with Financio
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Discover expert financial advice, investment tips, and wealth management strategies. Our comprehensive resources and personalized guidance help you make informed decisions, grow your wealth, and secure your financial future. Start your journey to financial success with us today.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="bg-black text-white px-4 py-2 m-5 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                get for free
              </button>
              <button className="bg-white text-black px-4 py-2 m-5 rounded-lg font-medium inline-flex align-items gap-2 items-center tracking-tight">
                <span>learn more</span>
                <img src="/arrow-right.svg" alt="arrow" className="w-7" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} alt="cogImage" className="md:absolute md:h-full md:w-auto md:max-w-none md:left-28" />
            <Image src={cylinderImage} alt="cylinderImage" width={220} height={220} className="hidden md:block -top-8 -left-22 md:absolute" />
            <Image src={noodleImage} alt="noodleImage" width={220} height={220} className="hidden lg:block absolute top-[524px] left-[578px] rotate-[30deg]" />
          </div>
        </div>
      </div>
    </section>
  );
};
