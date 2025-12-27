import React from "react";
import { NETFLIX_LOGO } from "../utils/photo_constant";

const Header = () => {
  return (
    <div className="w-full absolute z-20 bg-gradient-to-b from-black">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="w-[180px] my-4 mx-[10rem]"
      />
    </div>
  );
};

export default Header;
