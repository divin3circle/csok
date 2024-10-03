import React from "react";
import Navbar from "../components/app/navbar";
import Hero from "../components/app/hero";
import About from "../components/app/about";

function HomePage() {
  return (
    <div className="max-w-[1290px] mx-auto my-0">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default HomePage;
