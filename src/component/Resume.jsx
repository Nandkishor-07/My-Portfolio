import React from "react";

const Resume = () => {
  return (
    <div
      id="resume"
      className="resume scroll-animation relative md:max-w-[90vw] md:my-[100px] max-md:max-w-[80vw] m-auto"
    >
      <h3 className="max-md:text-3xl relative max-md:mt-[100px] max-md:mb-[40px] md:mb-14 text-4xl">
        Resume
        <span className="h-[1.1px] absolute w-[90%] left-[10%] max-md:left-0 max-md:w-full bottom-[-6px] max-md:bottom-[-4px] bg-[#fec86a] block"></span>
      </h3>
      <div className="w-full md:max-w-[80vw] mt-5 flex md:flex md:gap{50px} mx-auto max-md:block">
        <div className="block gap-[50px] max-md:flex-wrap justify-center">
          <fieldset className="max-md:w-full p-5 md:py-12 max-md:mb-[50px] sm:py-8 sm:w-full sm:p-2 aos-init ">
            <button className="nohover w-auto border-gray-200 rounded-3xl py-1 font-semibold text-3xl">
              Experience
            </button>
            <div className=" relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full  border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full  border-2 border-yellow-500"></div>
              </div>
              <div className="card-wrapper w-[100%] sm:w-full mt-5 flex flex-col items-center mx-auto">
                <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg ">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Front-End Developer
                  </h1>
                  <a
                    className="max-w-[230px]"
                    href="https://www.tcs.com/"
                    target="_blank"
                  >
                    <span className="text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                        </g>
                      </svg>
                      Tata Consultancy Services
                    </span>
                  </a>
                  <a
                    className="max-w-[230px]"
                    href="https://www.pfizer.com/"
                    target="_blank"
                  >
                    <span className="text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                        </g>
                      </svg>
                      Pfizer Inc. Limited (Project)
                    </span>
                  </a>
                  <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    Dec 2021 - Present
                  </span>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    I'm a passionate front-end developer with 2.6 years of
                    experience at TCS, crafting engaging user experiences
                    through code. My expertise lies in building interactive
                    websites utilizing:<br></br> <br></br>
                    <b>Core Technologies:</b> HTML, CSS, JavaScript, jQuery{" "}
                    <br></br>
                    <b>Interactive Elements:</b> Canvas animation, dynamic
                    content management<br></br>
                    <b> Content Management Systems:</b>
                    Drupal, AEM (Adobe Experience Manager)<br></br> <br></br>{" "}
                    <b>Delivering Client Value:</b> My contributions at TCS
                    include successfully developing and maintaining interactive
                    Pfizer websites that met strict business requirements. I'm a
                    strong collaborator, actively participating in daily
                    stand-up calls for estimates, bug negotiation, and
                    production queries. Embracing Innovation: A keen learner,
                    I'm constantly expanding my skillset. I'm delving into
                    frameworks like ReactJS, NodeJS, NextJS, ExpressJS, and
                    MongoDB. By building personal projects with these
                    technologies, I'm enhancing my development capabilities and
                    staying ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="max-md:w-full p-5 md:py-12 sm:py-8 sm:w-full sm:p-2 aos-init ">
            <button className="w-auto nohover mb-5 border-gray-200 rounded-3xl py-1 font-semibold text-3xl ">
              Education
            </button>
            <div className="relative">
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full  border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full  border-2 border-yellow-500"></div>
              </div>
              <div className="flex flex-col gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg ">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.E, Engineering [ENTC]
                </h1>
                <a className="max-w-[290px]" href="https://geca.ac.in/">
                  <span className=" text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                      </g>
                    </svg>{" "}
                    GECA, Chhatrapati Sambhajinagar
                  </span>
                </a>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2018 - Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Driven by a passion for connecting the physical and digital
                  worlds, I'm a BE graduate specializing in Embedded Systems &
                  Communication technologies. My expertise lies in
                  Microcontroller programming with Embedded C, as well as
                  utilizing Ultrasonic and GSM technologies to build intelligent
                  solutions. During my internship (Feb-Mar 2021), I actively
                  explored the exciting potential of 5G and IoT, further fueling
                  my interest in the future of Telecom. I'm a highly motivated
                  and results-oriented individual with a collaborative spirit. I
                  thrive in environments that encourage continuous learning and
                  innovation. Now, I'm eager to leverage my skills and
                  contribute to solving real-world problems through innovative
                  projects in the field of Embedded Systems and communication
                  technologies.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
