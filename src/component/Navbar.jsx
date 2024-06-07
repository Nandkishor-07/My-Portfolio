import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`navbar-container shadow-md max-[768px]:block max-[768px]:text-center flex parent-bg justify-between z-20 items-center fixed w-full top-0 px-4 sm:px-8 py-4 ${
        visible ? "" : "transform -translate-y-full"
      }`}
    >
      <div className="mylogname max-md:max-w-[80vw] max-md:m-auto text-2xl sm:text-3xl hover:font-extra-bold max-md:text-left font-[400]">
        <a className="cursor-pointer text-xl" href="/"> <span><i>Web&lt;code&gt;</i><sup>NK</sup></span></a>

      </div>
      <button
        className="block md:hidden hamburger absolute right-[28px] top-[20px] focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex gap-4 menu-ul md-mx:space-y-1 max-md:w-full max-md:py-[20px] md-max:gap-[5px] md:gap-7 max-[768px]:flex-col flex justify-between items-center cursor-pointer text-base max-md:text-[13px] uppercase max-[768px]:right-0 max-[768px]:absolute max-[768px]:mt-[15px]`}
      >
        <li className="hover:text-grey-600">
          <a
            href="#"
            className="cursor-pointer hover:text-[#fec86a] hover:underline hover:font-[700] font-[600]"
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li className="hover:text-[#fec86a] text-white">
          <a
            href="#about"
            className="cursor-pointer hover:text-[#fec86a] hover:underline hover:font-[600] font-[600]"
            onClick={closeMobileMenu}
          >
            About
          </a>
        </li>
        <li className="hover:text-yellow-600 text-white">
          <a
            href="#resume"
            className="cursor-pointer hover:text-[#fec86a] hover:underline hover:font-[600] font-[600]"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </li>
        <li className="hover:text-yellow-600 text-white font-[600]">
          <a
            href="#contact"
            className="cursor-pointer hover:text-[#fec86a] hover:underline hover:font-[600] "
            onClick={closeMobileMenu}
          >
            Contact me
          </a>
        </li>
        <button className="p-2 px-4 sm:px-7 font-[600] text-white cursor-pointer border-zinc-400 border-2 border-[2px solid white] rounded-md hover:text-brown-400 hover:bg-slate-700">
          <a
            href="https://www.linkedin.com/in/nandkishor-khandare-aa046b203/"
            target="_self"
            className="uppercase"
            onClick={closeMobileMenu}
          >
            Hire me
          </a>
        </button>
        <button
          className="togglebutton uppercase font-[600] border-zinc-400 border-2 border-[2px solid white] rounded-md p-2 px-4 sm:px-7"
          onClick={() => {
            toggleTheme();
            closeMobileMenu();
          }}
        >
          <a>{theme === "light" ? "Dark" : "Light"}</a>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
