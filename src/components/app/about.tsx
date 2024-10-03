import React from "react";
import logo from "../../../public/csokcontinuity.png";

function About() {
  return (
    <div className="my-4 mx-2">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className="flex flex-col gap-4 md:w-[60%] w-full">
          <h1 className="font-body text-title text-4xl lg:text-[4rem] text-center md:text-start md:mb-4 md:text-5xl">
            Who We Are
          </h1>
          <p className="px-2 mt-2 md:text-lg">
            We are an academic-technology club founded in 2012 that has a
            mission of cultivating a tech structure through meetups, talks,
            training, hackathons and social activities for its members.
          </p>
          <p className="px-2 mt-2 md:text-lg">
            The club membership is open for students and staff within the
            university. We aim to create awareness, promote growth of computer
            knowledge and entrepreneurship and nurture technological and
            programming talent.
          </p>
        </div>
        <div>
          <img src={logo} alt="CSOK Continuity" className=" mx-auto" />
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-normal">
        <button className="bg-transparent border-4 border-black px-12 mx-2 text-black font-body text-lg py-2 rounded-3xl mt-4 lg:text-xl">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default About;
