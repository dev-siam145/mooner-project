import React from "react";
import bg from "../../assets/images/error-bg.png";
import bg2 from "../../assets/images/error-bg-2.png";
import Images from "../utils/Images";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center py-11 relative">
      <Images src={bg} alt="img" className="w-[80%]" />
      <div className="absolute left-[49.5%] top-[30%]">
        <Images src={bg2} alt="img" />
        <div className=" flex flex-col items-center absolute top-20 left-1/2 -translate-x-1/2">
          <span className="font-bold text-[120px] font-montserrat text-[#5F5FFF]  block leading-none">
            404
          </span>
          <p className="text-base font-bold font-montserrat text-[#000619] ">
            Sorry, Page not Found
          </p>
          <Link
            to="/"
            className="mt-[18px] bg-[#5F5FFF] text-white font-montserrat text-sm font py-4 px-[30px] inline-block rounded-[25.5px]"
          >
            back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
