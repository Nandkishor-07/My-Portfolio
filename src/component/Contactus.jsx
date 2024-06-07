import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Contactus() {
  const form = useRef();
  // const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const from_name = form.current.from_name.value.trim();
    const from_email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!from_name || !from_email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_h4uz0hf",
        "template_kvgw7y8",
        form.current,
        "tjIBvgRsB_CHsIFfq"
      )
      .then(
        () => {
          alert("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="text-gray-600 m-auto relative max-w-[90vw] mt-8 max-md:max-w-[80vw] contact-container body-font scroll-animation "
    >
      <h3 className="max-md:text-3xl relative text-4xl">
        Contact
        <span className="h-[1.1px] absolute w-[90%] left-[10%] max-md:left-0 max-md:w-full bottom-[-6px] max-md:bottom-[-4px] bg-[#fec86a] block"></span>
      </h3>
      <div className="md:items-center flex max-[1024px]:flex-wrap justify-between md:px-5 md:py-24 max-[1024px]:justify-center">
        <div className="md:w-[50vw] mb-12">
          <section className="contact-section">
            <p className="md:text-4xl max-md:block relative pb-1 max-sm:text-2xl max-md:hidden my-[15px] md:mb-[30px]">
              Let's Speak
            </p>
            <p className="max-md:text-[16px] md:text-[16px] md:leading-6 my-[20px] mt-[50px]">
              I am always eager to connect with like-minded professionals and
              explore new opportunities. Whether you have a project in mind or
              just want to chat about the latest in web development, feel free
              to reach out!
            </p>
            <div className="flex items-center my-[30px] justify-start gap-8 max-md:gap-4 max-md:flex-wrap">
              <a
                href="https://www.linkedin.com/in/nandkishor-khandare-aa046b203/"
                target="_self"
                className="box font-medium flex items-start justify-end gap-1"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className=" text-xl hover:scale-125 cursor-pointer"
                  height="17px"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                <p>Linkedin</p>
              </a>
              <a
                href="mailto:nandkishor.khandare2204@gmail.com"
                target="_self"
                className="box font-medium text-white flex tems-start justify-center gap-1 aos-init aos-animate"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className=" text-xl hover:scale-125 cursor-pointer"
                  height="17px"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                <p>Email</p>
              </a>
              <a
                href="https://wa.me/9850476329"
                target="_self"
                className="box font-medium text-white flex tems-start justify-center gap-1 aos-init aos-animate"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className=" text-xl hover:scale-125 cursor-pointer"
                  height="17px"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path>
                </svg>
                <p>WhatsApp</p>
              </a>
            </div>
          </section>
        </div>
        <div className="md:w-[50vw] md:mx-[100px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-[18px] font-[400] text-gray-600"
                >
                  Name
                </label>
                <input
                  placeholder="e.g nandkishor khandare"
                  className="w-full my-[10px] font-[700] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg bg-opacity-50 bg-transparent border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  name="from_name"
                  id=""
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 font-[400] text-gray-600"
                >
                  Email
                </label>
                <input
                  placeholder="nandkishorkhandare@gmail.com"
                  className="w-full my-[10px] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg bg-transparent bg-opacity-50 border border-gray-300 focus:border-indigo-500 font-[700] focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="email"
                  name="from_email"
                  id=""
                  required 
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-[18px] font-[400] text-gray-600"
                >
                  Message
                </label>
                <textarea
                  placeholder="Hey i am nandkishor....."
                  id="message"
                  name="message"
                  required 
                  className="w-full my-[10px] shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg bg-transparent bg-opacity-50 border-gray-300 border focus:border-indigo-500 font-[700] focus:ring-2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex gap-2 justify-center items-center mx-auto bg-transparent hover:bg-[#fec86a] w-full px-[20px] leading-normal uppercase py-[10px] text-[16px] rounded-[12px] border-zinc-400 border-2 border-[2px solid white] text-[20px] hover:text-[#34353b]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className=" text-xl blackhover hover:scale-125 cursor-pointer"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </g>
                </svg>
                <input className="cursor-pointer" type="submit" value="Send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contactus;
