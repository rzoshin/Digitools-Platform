import React from "react";
import { NavLink } from "react-router";

const Join = () => {
  return (
    <div className="flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
      <div className="max-w-[80%] mx-auto text-center text-white">
        <div>
          <h2 className="font-extrabold text-[40px] mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-white/90 mb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br />
            Start your free trial today.
          </p>
          <div className="flex gap-4 justify-center mb-4">
            <a href="#products" className="rounded-[100px] bg-white py-3.75 px-4 hover:cursor-pointer hover:-translate-0.2"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span></a>
            <a href="#pricing" className="rounded-[100px] border border-white py-3.75 px-8.75 hover:bg-white hover:text-[#9439f6] hover:cursor-pointer">
              View Pricing
            </a>
          </div>
          <p className="text-white/80">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Join;
