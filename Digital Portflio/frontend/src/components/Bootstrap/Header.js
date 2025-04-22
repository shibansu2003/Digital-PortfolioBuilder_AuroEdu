import React from "react";
import img5 from ".././images/portfolio_logo.png";

const Header = () => {
  return (
    <div className="w-full z-10 bg-gray-900 text-white py-3 md:py-5 flex items-center justify-between px-2 md:px-4 shadow-lg">
      <div className="flex items-center">
        <div>
          <img className="h-8 md:h-10 w-8 md:w-10 mr-6 md:mr-2" src={img5} alt="logo" />
        </div>
        <div className="text-lg md:text-2xl mr-1 tracking-tight font-medium md:font-semibold leading-5 text-indigo-400">
          Digital Portfolio Builder
        </div>
        <div className="hidden md:block text-xs mb-2 text-gray-400">By Shibansu Mandal</div>
      </div>
    </div>
  );
};

export default Header;
