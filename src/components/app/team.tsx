import React from "react";
import el from "../../../public/csokeleanora.jpeg";
import li from "../../../public/csoklili.jpeg";
import ki from "../../../public/csokjomo.jpg";
import co from "../../../public/csokcollins.jpg";
import bo from "../../../public/csokboni.jpg";
import fl from "../../../public/csokflo.jpg";

function Team() {
  return (
    <div className="w-full my-12 flex flex-col items-center justify-center mt-32">
      <h1 className="font-body text-title text-4xl lg:text-[4rem] text-center md:text-start md:mb-4 md:text-5xl">
        Get to Know the CSOK Team
      </h1>
      <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4 mb-12">
        <div className="flex flex-col items-center justify-center">
          <img
            src={li}
            alt="lili"
            className="rounded-full w-36 h-36 md:w-48 md:h-48 mb-4"
          />
          <h1 className="font-body text-title text-2xl text-center md:text-start md:text-3xl">
            Lilian Wanjiku
          </h1>
          <p className="font-body text-title text-lg text-center md:text-start md:mb-4 md:text-xl">
            President
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={el}
            alt="lili"
            className="rounded-full w-36 h-36 md:w-48 md:h-48"
          />
          <h1 className="font-body text-title text-2xl text-center md:text-start md:text-3xl">
            Eleanora Matalanga
          </h1>
          <p className="font-body text-title text-lg text-center md:text-start md:mb-4 md:text-xl">
            Secretary
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
        <div className="flex flex-col items-center justify-center">
          <img
            src={ki}
            alt="kigo"
            className="rounded-full w-28 h-28 md:w-32 md:h-32"
          />
          <h1 className="font-body text-title text-xl text-center md:text-start md:text-2xl">
            Kigo Jomo
          </h1>
          <p className="font-body text-title text-center md:text-start md:mb-4 md:text-lg">
            YouTube Manager
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={co}
            alt="collins"
            className="rounded-full w-28 h-28 md:w-32 md:h-32"
          />
          <h1 className="font-body text-title text-xl text-center md:text-start md:text-2xl">
            Collins Nyaigoti
          </h1>
          <p className="font-body text-title text-center md:text-start md:mb-4 md:text-lg">
            Social Media Manager
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={bo}
            alt="boni"
            className="rounded-full w-28 h-28 md:w-32 md:h-32"
          />
          <h1 className="font-body text-title text-xl text-center md:text-start md:text-2xl">
            Boniface Maina
          </h1>
          <p className="font-body text-title text-center md:text-start md:mb-4 md:text-lg">
            Community Relations
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={fl}
            alt="lili"
            className="rounded-full w-28 h-28 md:w-32 md:h-32"
          />
          <h1 className="font-body text-title text-xl text-center md:text-start md:text-2xl">
            Florence Ndemi
          </h1>
          <p className="font-body text-title text-center md:text-start md:mb-4 md:text-lg">
            Community Relations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
