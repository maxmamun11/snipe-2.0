/* eslint-disable no-unused-vars */
import React from "react";
import avatar from "../../assets/Avatar.png";
import blogImage from "../../assets/image.png";

export default function BlogSectionCard() {
  return (
    //  Blog section start here
    <div className="inline-flex flex-col items-start justify-center pr-px bg-white rounded-lg shadow w-96 h-96">
      <img className="relative h-48 w-96 rounded-t-xl" src={blogImage} alt="" />
      <div className="inline-flex flex-col items-start justify-center gap-20 p-6 bg-white rounded-b-lg w-96 h-80">
        <div className="inline-flex flex-col self-stretch justify-start h-40 gap-2">
          <div className="self-stretch text-indigo-600 text-sm font-medium font-['Inter'] leading-tight">
            Article
          </div>
          <div className="flex flex-col items-start self-stretch justify-start h-32 gap-3">
            <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
              Boost your Conversion rate
            </div>
            <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum.
            </div>
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-3 ">
          <img className="w-10 h-10 rounded-2xl" src={avatar} alt="" />
          <div className="inline-flex flex-col items-start justify-start">
            <div className="text-gray-900 text-sm font-medium font-['Inter'] leading-tight">
              Roel Aufderehar
            </div>
            <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
              Mar 16, 2023 . 6 min read
            </div>
          </div>
        </div>
      </div>
    </div>
    //  Blog section end here
  );
}
