import React from "react";
import {
  IconTrendingUp,
  IconBulbFilled,
  IconBriefcase2Filled,
} from "@tabler/icons-react";
function Vision() {
  return (
    <div className="w-full my-12 flex flex-col items-center justify-center">
      <h1 className="font-body text-title text-4xl lg:text-[4rem] text-center md:text-start md:mb-4 md:text-5xl">
        Our Vision & Mission
      </h1>
      <div className="h-1 rounded-lg bg-gray-500 w-[15%]"></div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center md:gap-4 gap-8 mt-16 mx-4">
        <div className="flex rounded-lg items-center justify-between flex-col gap-8">
          <IconTrendingUp size={64} className="text-gray-500" />
          <div className="bg-[#004C4A] rounded-2xl py-12">
            <p className="text-white font-body md:text-xl text-lg my-8 leading-relaxed gap-2 px-8">
              To promote development of knowledge into technical skills among
              students by hosting practical workshops, guest lectures and
              meetups.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col gap-8">
          <IconBulbFilled size={64} className="text-gray-500" />
          <div className="bg-[#004C4A] rounded-2xl py-12">
            <p className="text-white font-body md:text-xl text-lg my-8 leading-relaxed gap-2 px-8">
              To promote development of knowledge into technical skills among
              students by hosting practical workshops, guest lectures and
              meetups.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col gap-8">
          <IconBriefcase2Filled size={64} className="text-gray-500" />
          <div className="bg-[#004C4A] rounded-2xl py-12">
            <p className="text-white font-body text-lg md:text-xl my-8 leading-relaxed gap-2 px-8">
              To promote development of knowledge into technical skills among
              students by hosting practical workshops, guest lectures and
              meetups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
