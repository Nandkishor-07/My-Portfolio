import React, { useState, useEffect } from "react";
import mypic from "../assets/profile-photo-hd.webp";
import pdf from "../assets/Nandkishor_khandare_final_resume.pdf"

function main() {
  const Texts = ["Web Developer", "Designer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (currentCharIndex < Texts[currentTextIndex].length) {
          setDisplayedText(
            (prev) => prev + Texts[currentTextIndex][currentCharIndex]
          );
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 100);
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % Texts.length);
        }
      }
    };

    const interval = setInterval(handleTyping, 100);
    return () => clearInterval(interval);
  }, [currentCharIndex, isDeleting, Texts, currentTextIndex]);

  return (
    <section
      id="home"
      className="main-section max-md:max-w-[80vw] max-md:m-auto pt-[74px] scroll-animation"
    >
      <div className="parent mt-[20px] md:max-w-[70vw] max-[768px]:flex-col-reverse max-[768px]:flex md:min-h-[60vh] max-[1024px]:min-h-[40vh] sm:flex justify-around items-center m-auto">
        <div className="section-1 md:w-[50vw] name-animation max-md:mt-[50px]">
          <p className="md:text-2xl max-[768px]:text-[2rem] my-[20px]">
            I'M{" "}
            <span className="text-[#fec86a] text-3xl max-md:text-[2rem]">
              Nandkishor Khandare
            </span>
          </p>
          <h2 className="text-2xl max-md:text-[2rem] my-[10px] min-h-[38px] typing name-animation text-[30px] font-extrabold text-[#fec86a] ">
            {displayedText}
          </h2>
          <p className="md:my-[20px] md:text-[20px] md:mb-[40px] max-md:mb-[20px] max-sm:text-[.95rem] font-[600]">
            Working Professional
          </p>
          <div className="buttons flex flex-wrap items-center gap-4">
            <button className="bg-transparent px-[20px] leading-normal uppercase py-[10px] text-sm rounded-[12px] border-zinc-400 border-2 border-[2px solid white]">
              <a href="#contact" className="text-sm font-[600]">
                contact me
              </a>
            </button>
            <button className="bg-transparent px-[20px] leading-normal uppercase py-[10px] text-sm rounded-[12px] border-zinc-400 border-2 border-[2px solid white]">
              <a href={pdf} className="text-sm flex gap-[10px] items-center font-[600]">
                RESUME
                <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              </a>

            </button>
          </div>

          <div className="icons my-[40px] flex">
            <ul className="flex gap-5">
              <li>
                <a href="https://github.com/Nandkishor-07" target="_self">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nandkishor-khandare-aa046b203/"
                  target="_self"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section2">
          <img
            className="object-[center_top] lg:ml-[60px] md:w-[80vw] md:min-w-full md:h-full max-md:h-auto overflow-hidden mr-auto"
            loading="lazy"
            src={mypic}
            alt="my-profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default main;
