import React from "react";

const Card = ({ name, date, amount }) => {
  return (
    <div className="p-5 text-white rounded-3xl min-w-max max-w-cardw w-cardw bg-grad sm:mx-auto">
      <div className="flex justify-between items-center">
        <div className="font-bold text-base">{name}</div>
        <div className="font-light text-sm">{date}</div>
      </div>
      <div className="text-sm mt-2">Course Enrolled(6)</div>
      <div className="flex flex-wrap h-24 scrollbar-thin scrollbar-thumb-nice scrollbar-thumb-rounded-full overflow-y-scroll text-sm w-cardw mt-1 px-3 py-2 [&>*]:border-2 [&>*]:border-nice [&>*]:m-1 [&>*]:p-1.5 [&>*]:rounded-full">
        <div className="">UI/UX</div>
        <div className="">Photoshop</div>
        <div className="">Illustrator</div>
        <div className="">Python</div>
        <div className="">MERN</div>
        <div className="">Java</div>
        <div className="">React</div>
        <div className="">Angular</div>
      </div>
      <div className="flex text-base mt-5 items-center space-x-3">
        <p>Referral Amount</p>
        <span className="font-semibold text-2xl">${amount}</span>
      </div>
    </div>
  );
};

export default Card;
