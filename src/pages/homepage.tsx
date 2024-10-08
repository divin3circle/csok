import React from "react";
import Navbar from "../components/app/navbar";
import Hero from "../components/app/hero";
import About from "../components/app/about";
import Vision from "../components/app/vision";
import Team from "../components/app/team";
import Testimonials from "../components/app/testimonials";
import Footer from "../components/app/footer";

function HomePage() {
  return (
    <div className="max-w-[1290px] mx-auto my-0">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
