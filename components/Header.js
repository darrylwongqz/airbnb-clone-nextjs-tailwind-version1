import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Header = () => {
  const [transparentNav, setTransparentNav] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 200) {
      setTransparentNav(true);
    } else {
      setTransparentNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
  }, []);

  return (
    <header
      className={
        transparentNav
          ? `fixed top-0 z-50 grid items-center grid-cols-3 p-5 bg-white shadow-md md:px-10 header w-full active-header`
          : `fixed top-0 z-50 grid items-center grid-cols-3 p-5 md:px-10 header w-full`
      }
    >
      {/* Left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://i.ibb.co/BfWhx1n/Airbnb-Logo-B-lo-svg.png"
          alt="Airbnb logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - search bar */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className={
            transparentNav
              ? `flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none duration-500 transition-colors`
              : `flex-grow pl-5 text-white placeholder-white bg-transparent outline-none`
          }
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div
        className={
          transparentNav
            ? `flex items-center justify-end space-x-4 text-gray-500 duration-500 transition-colors`
            : `flex items-center justify-end space-x-4 text-white`
        }
      >
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon class="h-6 cursor-pointer" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
