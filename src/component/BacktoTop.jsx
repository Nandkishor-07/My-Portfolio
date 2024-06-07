import React from "react";
import { useState,useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="back-to-top animate-bounce fixed bottom-[10%] right-[20px] z-10"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <button
        className="p-2"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 10 L12 3 L19 10"></path>
          <path d="M12 3 L12 21"></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
