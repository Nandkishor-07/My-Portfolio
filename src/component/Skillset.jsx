import React from "react";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import nextjsLogo from "../assets/nextjs.svg";
import tailwindlogo from "../assets/tailwind.svg";

const skills = [
  {
    name: "HTML",
    level: 90,
    image: htmlLogo,
  },
  {
    name: "CSS",
    level: 90,
    image: cssLogo,
  },
  {
    name: "TailwindCSS",
    level: 80,
    image: tailwindlogo,
  },
  {
    name: "JavaScript",
    level: 80,
    image: jsLogo,
  },
  {
    name: "React",
    level: 75,
    image: reactLogo,
  },
  {
    name: "Next.js",
    level: 70,
    image: nextjsLogo,
  },
];

const Skillset = () => {
  return (
    <div className="skillset relative scroll-animation md:px-[80px] max-[768px]:max-w-[80vw] max-[768px]:m-auto md:py-[50px]">
      <h1 className="md:text-[50px] max-sm:text-4xl text-center mb-[30px]">Skillset </h1>
      {skills.map((skill, index) => (
        <div className="skill w-1/2 max-lg:w-[100%]" key={index}>
          <div className="md:text-2xl max-sm:text-xl flex items-center gap-[8px] mb-[20px] relative w-full">
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            />
            <h3 className="md:text-[18px]">{skill.name}</h3>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div
        className="flex-1 skillbox flex flex-wrap max-sm:flex-nowrap p-5 gap-10 items-center lg:absolute max-[768px]:unset top-[25%] right-[10%] w-[auto] justify-center"
      >
        <div className=" flex flex-col gap-10 ">
          <div className="z-[] max-sm:max-w-[30vw] max-sm:max-h-[30vw] box w-[11rem] h-[11rem] rounded-lg text-white shadow-2xl flex flex-col items-center justify-center gap-4 p-1">
            <div className="w-14 sm:w-12 bg-black exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl overflow-hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
              </svg>
            </div>
            <p className=" exsm:text-sm font-medium">MongoDB</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-[180px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="max-sm:max-w-[30vw] max-sm:max-h-[30vw] w-[11rem] h-[11rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 p-1"
          >
            <div className="bg-white text-black w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl overflow-hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
              </svg>
            </div>
            <p className=" exsm:text-sm font-poppins font-medium">Express.js</p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Skillset;
