import React from "react";
import Image from "next/image";
import HomeData from "../../../data/Home/Home.json";

const About = () => {
  return (
    <div className="mt-28 ">
      <header className="text-center text-4xl mb-16">About Free Mind</header>
      <div className="md:flex md:justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src="/images/jared2.png"
              alt="jared-icon"
              height={100}
              width={250}
            />
          </div>
          <h1>@Jared</h1>
        </div>
        <div className="text-center mt-10 text-lg md:max-w-lg lg:max-w-2xl p-8 lg:p-0">
          {HomeData[1].description}
        </div>
      </div>
    </div>
  );
};

export default About;
