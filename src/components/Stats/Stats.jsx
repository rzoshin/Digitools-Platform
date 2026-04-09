import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 px-50">
      <div className="flex w-full flex-col lg:flex-row items-center justify-items-center">
        <div className="rounded-box grid h-32 grow place-items-center flex flex-col gap-3">
          <span className="text-[60px] text-white font-extrabold">50K+</span>
          <span className="text-2xl text-white/80 font-medium">Active Users</span>
        </div>
        <div className="w-full h-px md:w-px md:h-16 bg-white/30"></div>
        <div className="rounded-box grid h-32 grow place-items-center flex flex-col gap-3">
            <span className="text-[60px] text-white font-extrabold">200+</span>
            <span className="text-2xl text-white/80 font-medium">Premium Tools</span>
        </div>
        <div className="w-full h-px md:w-px md:h-16 bg-white/30"></div>
        <div className="rounded-box grid h-32 grow place-items-center flex flex-col gap-3">
            <span className="text-[60px] text-white font-extrabold">4.9</span>
          <span className="text-2xl text-white/80 font-medium">Rating</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
