import React from "react";
import {
  IconTrendingUp,
  IconBugFilled,
  IconBriefcase2Filled,
} from "@tabler/icons-react";
function Vision() {
  return (
    <div className="w-full my-12 flex flex-col items-center justify-center">
      <h1 className="font-body text-title text-4xl lg:text-[4rem] text-center md:text-start md:mb-4 md:text-5xl">
        Our Vision & Mission
      </h1>
      <div className="h-1 rounded-lg bg-gray-500 w-[15%]"></div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
        <div className="flex items-center justify-between flex-col">
          <IconTrendingUp size={56} className="text-gray-500" />
          <div className="bg-[#004C4A] rounded-md px-2 py-4">
            <p className="text-white font-body text-lg">
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
