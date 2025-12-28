import React from "react";
import { NETFLIX_LOGO, USER_IMG } from "../utils/photo_constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  return (
    <div className="flex justify-between items-center w-full absolute z-20 bg-gradient-to-b from-black">
      <div>
        <img
          src={NETFLIX_LOGO}
          alt="logo"
          className="w-[180px] my-4 mx-[10rem]"
        />
      </div>
      {user && (
        <div className="flex justify-between items-center">
          <img src={USER_IMG} alt="user-image" className="w-12 m-4" />
          <button
            className="text-2xl font-bold text-white mr-4"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
