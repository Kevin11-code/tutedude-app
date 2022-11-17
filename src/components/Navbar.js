import React from "react";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="flex items-center h-20 sm:mt-14 sm:justify-between">
      <div className="">
        <img src="tutedude.png" alt="logo" className="ml-20 h-16 sm:ml-3" />
      </div>
      <div className="flex [&>*]:opacity-50 hover:[&>*]:opacity-100 ml-auto items-center text-new text-lg font-medium space-x-7 mr-20 sm:hidden">
        <a href="#" className="">
          My Assignment
        </a>
        <a href="#" className="">
          Chat with Mentor
        </a>
        <a href="#" className="flex items-center">
          <UserCircleIcon className="h-6 w-6 text-new mr-1" />
          <span className="mr-1">ProfileName</span>
          <ChevronDownIcon className="h-6 w-6 text-new" />
        </a>
      </div>

      <button className="hidden sm:flex text-white bg-new p-3 rounded-lg sm:mr-14">
        <div className="mr-3 font-medium">ProfileName</div>
        <div className="">
          <ChevronDownIcon className="h-6 w-6" />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;
