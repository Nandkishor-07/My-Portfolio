import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container flex justify-between bg-white items-center fixed w-full z-10 top-0 border-b-2 border-black px-[100px] py-4 shadow-amber-400">
      <div className="mylogname text-3xl hover:font-extra-bold font-bold">
        Nk<span className="text-yellow-600">.</span>
      </div>
      <ul className="space-x-10 flex justify-between items-center cursor-pointer text-lg font-medium">
        <li className="hover:text-yellow-600 font-bold text-yellow-600">
          <a href="/" className="cursor-pointer"></a>Home
        </li>
        <li className="hover:text-yellow-600 font-bold">
          <a href="/about" className="cursor-pointer"></a>About me
        </li>
        <li className="hover:text-yellow-600 font-bold">
          <a href="/contact" className="cursor-pointer"></a>Contact me
        </li>
        <button className="bg-red-800 p-2 px-7 text-white cursor-pointer rounded-md hover:text-gray-400 hover:bg-slate-700">
          <a href="" className="src"></a>Hire me
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
