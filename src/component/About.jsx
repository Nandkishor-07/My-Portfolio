// About.jsx
import React from "react";

function About() {
  return (
    <div className="about-us max-md:w-[80vw] max-md:mt-[40px] max-md:m-auto scroll-animation md:px-[80px] md:mb-[70px] md:pt-[70px]">
      <section id="about" className="relative">
        <h3 className="max-md:text-3xl md:text-4xl">
          About
          <span className="h-[1.1px] absolute w-[90%] left-[8%] max-md:left-0 max-md:w-full bottom-[-6px] max-md:bottom-[-4px] bg-[#fec86a] block"></span>
        </h3>
      </section>
      <p className="md:ml-[50px] my-[50px] md:text-[16px] md:leading-6">
        Hello! I'm Nandkishor Khandare, a passionate web developer with over 2.5
        years of experience working at Tata Consultancy Services (TCS).
        Throughout my career, I've honed my skills in building dynamic and
        responsive websites that provide excellent user experiences.
      </p>
    </div>
  );
}

export default About;
