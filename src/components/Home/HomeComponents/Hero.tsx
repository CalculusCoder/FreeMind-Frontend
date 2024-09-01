import React, { useEffect, useState, forwardRef } from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import "animate.css/animate.min.css";
import { useTheme } from "next-themes";
import HomeData from "../../../data/Home/Home.json";

interface Props {
  onButtonClick: () => void;
}

const Hero = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { resolvedTheme } = useTheme();
  const [svgFill, setSvgFill] = useState("#F1E6FF");

  useEffect(() => {
    if (resolvedTheme) {
      setSvgFill(resolvedTheme === "dark" ? "#0e1118" : "#F1E6FF");
    }
  }, [resolvedTheme]);

  return (
    <div>
      <div className="lg:flex lg:justify-around">
        <div className="lg:mt-20">
          <header
            className={`${style.animation2} text-center text-white mt-10 text-6xl mb-16 overflow-hidden animate__animated animate__fadeInUp`}
          >
            FreeMind
          </header>
          <h1
            className={`${style.animation} text-center font-semibold text-white mt-5 text-3xl overflow-hidden animate__animated animate__fadeInUp`}
          >
            Free Yourself From Any{" "}
            <span className="text-cyan-300">Anxiety Disorder</span>
          </h1>
          <p className="text-white text-center mt-6 max-w-lg mx-auto text-lg p-8 lg:p-0">
            FreeMind Recovery is a nonprofit organization dedicated to providing
            anxiety disorder recovery services to individuals across the globe.
            With us, experience the path to tranquility, confidence, and true
            liberation from anxiety at no cost. FreeMind is{" "}
            <span className=" font-extrabold text-xl">100% free</span> and
            committed to supporting you in discovering a life filled with calm
            and freedom.
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={props.onButtonClick}
              className={`${style.btn} font-semibold`}
            >
              See More
            </button>
          </div>
        </div>

        <div>
          <div className="md:mt-16 flex justify-around">
            <div className="flex justify-center items-center ">
              <Image
                src="https://res.cloudinary.com/dlogcew99/image/upload/v1713972821/brain-sad0_wcra06.png"
                alt="Sad Brain"
                width={350}
                height={100}
              />
            </div>
            <div className="flex justify-center items-center ">
              <Image
                src="https://res.cloudinary.com/dlogcew99/image/upload/v1713972810/brain-stretch0_zi6kxh.png"
                alt="Brain Stretch"
                width={350}
                height={100}
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <div
              className={`${style.shadow} absolute top-[850px] lg:absolute lg:top-96`}
            >
              <Image
                src="https://res.cloudinary.com/dlogcew99/image/upload/v1713972789/brain-relaxing0_sysx5a.png"
                alt="Relaxed Brain"
                width={350}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
        className="mt-10  md:mt-10 lg:mt-[-30px] xl:mt-[-70px]"
        data-testid="theme-svg"
      >
        <path
          fill={svgFill}
          fillOpacity="1"
          d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,154.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
});
Hero.displayName = "Hero";

export default Hero;
