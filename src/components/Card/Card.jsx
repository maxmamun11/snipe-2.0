/* eslint-disable no-unused-vars */
import React from "react";
// import { TERipple } from "tw-elements-react";
import avatar from "../../assets/Avatar.png";
import blogImage from "../../assets/image.png";

export default function BlogSectionCard() {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img className="rounded-t-lg" src={blogImage} alt="" />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Boost Your Conversion rate
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          accusantium praesentium eius, ut atque fuga culpa, similique sequi cum
          eos quis dolorum.
        </p>
        <h1>Roel Aufderehar</h1>
        <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar"></img>
      </div>
    </div>
  );
}
