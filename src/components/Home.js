import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-40">
      <NavLink to="/screen1" className="">
        <button className="text-white text-xl bg-new p-3 rounded-lg w-48">
          Screen 1
        </button>
      </NavLink>
      <br />
      <NavLink to="/screen2" className="">
        <button className="text-white text-xl bg-new p-3 rounded-lg mt-10 w-48">
          Screen 2
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
