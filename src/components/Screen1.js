import React from "react";
import Card from "./Card";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";


const Main = () => {
  return (
    <div className="px-44 sm:px-16 sm:mt-5">
      <div className="py-7 text-sm font-normal">
        UI/UX {">"} Refer & Earn {">"} Friends Referred
      </div>

      <button className="hidden sm:flex text-new space-x-2 font-medium mb-7">
        <div className="">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div>go back</div>
      </button>

      <div className="flex justify-between">
        <div className="w-40 pb-14">
          <p className="font-normal text-new mb-1">Your Referral Code</p>
          <div className="p-3 border-2 border-gray-200 font-normal tracking-widest text-lg text-center rounded-lg">
            E D C H 5 4
          </div>
        </div>
        <div className="w-fit h-fit shadow-shad2 rounded-2xl p-5 mr-8">
          <p className="font-normal text-sm text-new mb-1">Wallet Balance</p>
          <p className="font-normal">$500</p>
        </div>
      </div>
      <div className="font-bold text-new text-xl">
        Friends who enrolled
        <span className="text-gray-400"> (3)</span>
      </div>
      <div className="flex mt-4 space-x-6 max-w-full whitespace-nowrap overflow-hidden overflow-x-scroll rounded-3xl scrollbar-hide sm:flex-col sm:space-y-5 ">
        <Card name="Dhiraj Saxena" date="19 Aug, 2022" amount="185" />
        <Card name="Subhash Mishra" date="26 Oct, 2022" amount="485" />
        <Card name="Praful Mishra" date="13 Dec, 2022" amount="167" />
      </div>
    </div>
  );
};

export default Main;
