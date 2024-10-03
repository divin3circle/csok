import React from "react";
import Navbar from "../components/app/navbar";
import Hero from "../components/app/hero";

function HomePage() {
  return (
    <div className="max-w-[1290px] mx-auto my-0">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
