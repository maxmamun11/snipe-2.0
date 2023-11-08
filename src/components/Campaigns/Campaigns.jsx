/* eslint-disable no-unused-vars */
import React from "react";
import MyCart from "../MyCart";

const Campaigns = () => {
  return (
    <div className="w-full h-[2753px] relative bg-gradient-to-bl from-slate-950 to-indigo-950 py-4">
      <div className="w-[209px] text-white text-xl font-normal font-['Avenir'] leading-none py-4 px-4">
        Home / Campaigns
      </div>
      <div className=" w-[1171px] h-[143px] bg-neutral-100 rounded-lg px-4 py-4 md:px-4">
        <div className="w-[119px] text-neutral-800 text-xl font-normal font-['Arial'] leading-[23px] px-4 py-4">
          Campaigns
        </div>
        <div className="w-[51.22px] h-[27px] px-[13px] bg-white border border-neutral-200  gap-2.5 inline-flex">
          <div className="text-stone-500 text-xs font-normal font-['Avenir'] leading-[27px] ">
            Sales
          </div>
          <div className="text-stone-500 text-xs font-normal font-['Avenir'] leading-[27px] px-4">
            Campaigns
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
