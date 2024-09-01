import React from "react";
import Image from "next/image";
import Button from "./Button";

const WhyUs = () => {
  return (
    <div className="p-8 text-center">
      <div className="flex justify-center mt-16 lg:mt-0">
        <div className="bg-white dark:bg-cyan-900  max-w-4xl rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]">
          <header className="text-center font-extrabold text-4xl mt-1">
            Why <span className="text-cyan-300">FreeMind</span>?
          </header>
          <p className="py-3 mt-5 text-lg">
            I built this website with one intent, to provide anxiety disorder
            recovery services at no cost to you. When I was at my lowest, I was
            unable to pay my rent, let alone $300, for an anxiety recovery
            course.
          </p>

          <p className="py-3 mt-2 text-lg">
            FreeMind is the anxiety disorder recovery website I needed two years
            ago. It is free and continues to grow daily! FreeMind has several
            pages, links, audios, and much more to help you make a full
            recovery. (Videos coming soon)
          </p>

          <p className="py-3 mt-2 text-lg ">
            New information is constantly added for support members. You will
            get the latest up-to-date anxiety disorder recovery information (OCD
            and DPDR Recovery sections coming soon!). Join hundreds of others in
            recovery today!
          </p>
          <p className="text-center font-bold text-xl mt-4">
            FreeMind is 100% Free! Register Today.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
