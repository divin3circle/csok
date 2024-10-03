import React from "react";
import logo from "../../../public/csoklogo.png";
import { FaBurger } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

function Navbar() {
  return (
    <div className="flex justify-between items-center my-2 border-b-[1px] border-gray-500">
      <div>
        <img src={logo} alt="logo" className="w-28 h-28" />
      </div>
      <div className="md:flex items-center justify-between gap-2 lg:gap-4 hidden">
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">Home</h1>
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">About Us</h1>
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">Objectives</h1>
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">Leads</h1>
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">Events</h1>
        <h1 className="font-body mx-2 lg:text-lg cursor-pointer">Gallery</h1>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <button className="bg-primary lg:px-12 px-4 py-2 rounded-xl lg:text-lg font-body text-white mr-8">
          Join us
        </button>
      </div>

      <Drawer>
        <DrawerTrigger className="md:hidden flex items-center justify-center mx-4">
          <IoMdMenu className="text-3xl text-body" color="#17252a" size={48} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-between">
                <img src={logo} alt="logo" className="w-28 h-28" />
                <button className="bg-primary px-8 py-2 rounded-xl text-lg font-body text-white">
                  Join us
                </button>
              </div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex gap-8 flex-col">
            <h1 className="font-body mx-2 text-lg cursor-pointer">Home</h1>
            <h1 className="font-body mx-2 text-lg cursor-pointer">About Us</h1>
            <h1 className="font-body mx-2 text-lg cursor-pointer">
              Objectives
            </h1>
            <h1 className="font-body mx-2 text-lg cursor-pointer">Leads</h1>
            <h1 className="font-body mx-2 text-lg cursor-pointer">Events</h1>
            <h1 className="font-body mx-2 text-lg cursor-pointer">Gallery</h1>
          </div>
          <DrawerClose className="mb-10">
            <button>Close</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navbar;
