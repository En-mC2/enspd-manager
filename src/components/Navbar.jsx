import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={20} height={20} />
        <input
          type="text"
          placeholder="Rechercher"
          className="bg-transparent border-none focus:outline-none text-sm p-1.5"
        />
      </div>
      {/* ICONS&USERS */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
          <Image src="/annonces.png" alt="" width={20} height={20} />
          <div className="absolute -top-4 -right-3 w-6 h-6 flex items-center justify-center bg-purple-500 text-xs rounded-full text-white">
            99+
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Johanita Ebang</span>
          <span className="text-[10px] text-gray-50 text-right">Etudiante</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
