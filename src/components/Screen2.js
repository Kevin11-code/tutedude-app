import React from "react";
import Element from "./Element";
import { UserGroupIcon , CurrencyRupeeIcon, TagIcon, ReceiptPercentIcon, WalletIcon } from "@heroicons/react/24/solid";

const Screen2 = () => {
  return (
    <div className="px-44 sm:px-16 sm:mt-5">
      <div className="py-7 text-sm font-normal">UI/UX {">"} Refer & Earn</div>
      <div className="flex space-x-40 mb-8 sm:flex-col sm:space-x-0 sm:space-y-5">
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 shadow-shad p-5 rounded-3xl sm:grid-cols-2 sm:gap-x-8">
          <div className="">
            <div className="text-new text-sm">Referral Earning</div>
            <div className="font-medium text-3xl mt-1">$ 2500</div>
          </div>
          <div className="sm:col-start-3">
            <div className="text-new text-sm">Total Referrals</div>
            <div className="font-medium text-3xl mt-1">7</div>
          </div>
          <div className="">
            <div className="text-new text-sm">Wallet Balance</div>
            <div className="font-medium text-3xl mt-1">$ 500</div>
          </div>

          <div className="col-span-3 text-center min-w-max my-auto sm:col-span-2">
            <button className="bg-new rounded-full px-4 py-2 text-white">
              Withdraw Balance
            </button>
          </div>
        </div>

        <div className="w-[350px] sm:w-auto">
          <p className="font-semibold text-new text-2xl mb-4">
            Your Referral Code
          </p>
          <div className="p-[2px] bg-grad rounded-2xl sm:w-full">
            <span className="flex text-xl text-new bg-white rounded-2xl justify-between px-16 py-4 sm:w-full">
              <p>E</p>
              <p>C</p>
              <p>D</p>
              <p>H</p>
              <p>5</p>
              <p>4</p>
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl">
        <p className="font-semibold text-2xl text-new mb-2">
          How does it work ?
        </p>
        <div className="grid grid-cols-2 px-3 sm:flex sm:flex-col">
          <Element
            icon={<UserGroupIcon className="text-new" />}
            title="Invite your Friends"
            description="Share the link tutedude.com with your friends"
          />
          <Element
            icon={<TagIcon className="text-new" />}
            title="Friend purchases any course"
            description="Using your REFERRAL CODE in the payments page"
          />
          <Element
            icon={<CurrencyRupeeIcon className="text-new" />}
            title="You get ₹ 200 as referral money"
            description="On total purchase the friend makes, into your wallet"
          />
          <Element
            icon={<ReceiptPercentIcon className="text-new" />}
            title="Your Friend gets ₹ 200 Off "
            description="Share the link tutedude.com with your friends"
          />
          <Element
            icon={<WalletIcon className="text-new" />}
            title="Transfer money from wallet"
            description="When the wallet balance reaches
₹200 or more, you can withdraw it"
          />
        </div>
      </div>
      <div className="text-new text-md font-medium mt-14">
        Friends Who Enrolled
      </div>
    </div>
  );
};

export default Screen2;
