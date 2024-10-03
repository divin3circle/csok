import React from "react";
import logo from "../../../public/csoklogo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center my-2 border-b-[1px] border-gray-500">
      <div>
        <img src={logo} alt="logo" className="w-28 h-28" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-body mx-2 text-lg cursor-pointer">Home</h1>
        <h1 className="font-body mx-2 text-lg cursor-pointer">About Us</h1>
        <h1 className="font-body mx-2 text-lg cursor-pointer">Objectives</h1>
        <h1 className="font-body mx-2 text-lg cursor-pointer">Leads</h1>
        <h1 className="font-body mx-2 text-lg cursor-pointer">Events</h1>
        <h1 className="font-body mx-2 text-lg cursor-pointer">Gallery</h1>
      </div>
      <div>
        <button className="bg-primary px-12 py-2 rounded-xl text-lg font-body text-white">
          Join us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
