import React from "react";

const Element = ({ icon, title, description }) => {
  return (
    <div className="flex max-w-md bg-late-100 space-x-7 px-5 py-3 items-center sm:px-0">
      <div className="h-[65px] w-[75px] bg-gray-100 rounded-full p-4">{icon}</div>
      <div className="">
        <p>{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Element;
