import React from "react";
import Navbar from "../components/app/navbar";
import Hero from "../components/app/hero";
import About from "../components/app/about";
import Vision from "../components/app/vision";

function HomePage() {
  return (
    <div className="max-w-[1290px] mx-auto my-0">
      <Navbar />
      <Hero />
      <About />
      <Vision />
    </div>
  );
}

export default HomePage;
