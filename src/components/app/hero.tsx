import React from "react";
import students from "../../../public/csokstudents3.jpg";
import students2 from "../../../public/csokstudents.jpg";
import learn from "../../../public/csoklearn.jpg";

function Hero() {
  return (
    <div className="h-screen relative">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold text-title font-body mt-52">
          Guide,
          <span className="text-body text-green-500">Uplift,</span>
          Impact
        </p>
        <h1 className="text-[5rem] font-semibold text-title font-body">
          Computer Society
        </h1>
        <h1 className="text-[5rem] -mt-8 mb-12 font-semibold text-title font-body">
          of Kimathi
        </h1>
        <p className="text-2xl max-w-2xl text-body font-body text-center mt-12">
          A student-run community within Dedan Kimathi ​University of Technology
          dedicated to cultivating ​a strong tech community and empowerment!
        </p>
      </div>
      <img
        src={students}
        alt="students"
        className="h-80 w-64 r rounded-full object-cover absolute right-0 top-0 rotate-[10deg]"
      />
      <img
        src={students2}
        alt="students"
        className="h-72 w-96 rounded-[70%] object-cover absolute left-0 top-0 rotate-[4deg]"
      />
      <img
        src={students}
        alt="students"
        className="h-[20rem] w-[15rem] r rounded-[85%] object-cover absolute right-0 bottom-36 -rotate-[10deg]"
      />
      <img
        src={students}
        alt="students"
        className="h-64 w-[22rem] r rounded-[90%] object-cover absolute left-0 bottom-36 rotate-[19deg]"
      />
    </div>
  );
}

export default Hero;
