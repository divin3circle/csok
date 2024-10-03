import React from "react";
import students from "../../../public/csokstudents3.jpg";
import students2 from "../../../public/csokstudents.jpg";
import learn from "../../../public/csoklearn.jpg";

function Hero() {
  return (
    <div className="h-screen relative">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-title font-body mt-52 mb-0 md:mb-8">
          Guide,
          <span className="text-body text-green-500">Uplift,</span>
          Impact
        </p>
        <h1 className="md:text-[5rem] text-4xl font-semibold text-title font-body text-center">
          Computer Society
        </h1>
        <h1 className="md:text-[5rem] md:mt-8 -mt-1 text-4xl font-semibold text-title font-body text-center">
          of Kimathi
        </h1>

        <p className="md:text-2xl text-lg px-4 max-w-2xl text-body font-body text-center mt-12 md:mt-28">
          A student-run community within Dedan Kimathi ​University of Technology
          dedicated to cultivating ​a strong tech community and empowerment!
        </p>
      </div>
      <img
        src={students}
        alt="students"
        className="lg:h-[18rem] h-64 lg:w-64 w-48 r rounded-full object-cover absolute right-0 top-0 rotate-[10deg] hidden md:block"
      />
      <img
        src={students2}
        alt="students"
        className="lg:h-[16rem] h-56 lg:w-96 w-72 rounded-[70%] object-cover absolute left-0 top-0 rotate-[4deg] hidden md:block"
      />
      <img
        src={students}
        alt="students"
        className="lg:h-[20rem] h-[15rem] lg:w-[15rem] w-[13rem] rounded-[85%] object-cover absolute right-0 bottom-36 -rotate-[10deg] hidden md:block"
      />
      <img
        src={students}
        alt="students"
        className="lg:h-64 h-48 lg:w-[22rem] w-[18rem] rounded-[90%] object-cover md:absolute left-0 bottom-36 rotate-[19deg] hidden md:block"
      />
    </div>
  );
}

export default Hero;
