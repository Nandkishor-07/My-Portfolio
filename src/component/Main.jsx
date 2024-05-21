import React from "react";

const main = () => {
  return (
    <main className="main-section mt-[77px] min-h-[80vh] flex justify-between items-center px-[100px]">
      <div className="section-1 w-6/12">
        <h2 className="text-4xl my-[20px]">Hey, I am Nandkishor Khandare</h2>
        <h2 className="text-2xl my-[20px]">Web developer</h2>
        <p className="text-s my-[20px] font-medium ">Working professional</p>
      </div>
      <div className="section2 w-6/12">
        <img
          className=" h-[450px] rounded-full w-[450px] md:h-[300px] object-[center_top] md:w-[300px] overflow-hidden object-cover  md:m-auto sm:m-0"
          loading="lazy"
          src="/my-profile-pic-latest.jpeg"
          alt="my-profile-pic"
        />
      </div>
    </main>
  );
};

export default main;
