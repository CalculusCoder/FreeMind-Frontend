import { useEffect } from "react";
import Image from "next/image";
import style from "./VideoOne.module.css";
import React from "react";

const VideoOne = () => {
  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

    const thresholdsLargeScreen = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
    ];
    const thresholdsSmallScreen = [
      0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3,
      0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.show);
          }
        });
      },
      {
        threshold: isLargeScreen
          ? thresholdsLargeScreen
          : thresholdsSmallScreen,
      }
    );

    const elements = document.querySelectorAll(`.${style.hidden}`);

    // Start observing after a delay
    setTimeout(() => {
      elements.forEach((el) => observer.observe(el));
    }, 100);

    // Clean up
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-32 lg:mr-56 xl:mr-64">
      <div
        className={`order-2 lg:order-2 lg:mr-4 mt-16 lg:mt-0 ${style.hidden}`}
      >
        <div className="flex flex-col justify-center items-center ">
          <header className="text-center text-4xl  mb-4 lg:mb-0 ">
            Engage in Our{" "}
            <span className="text-purple-500 font-extrabold">Community</span>{" "}
            Forum
          </header>
          <p className="lg:max-w-md p-8 lg:p-0 lg:mx-0 max-w-md mx-auto text-lg mt-6 text-center">
            Dive into discussions, share your experiences, and learn from others
            in our exclusive FreeMind community forum. With its user-friendly
            interface, you can personalize your profile, choose your unique
            username, and start connecting with like-minded individuals. Begin
            your journey toward recovery and personal growth with us today.
          </p>
          <div className="mt-10">
            <Image
              alt="/"
              width={250}
              height={50}
              src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973750/community_vu0bvl.png"
            ></Image>
          </div>
        </div>
      </div>
      <div className={`order-1 lg:order-1 ${style.hidden}`}>
        <video
          className="hidden md:block w-full md:w-auto h-auto md:h-64 lg:w-auto lg:h-auto"
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dlogcew99/video/upload/v1713973789/mockrocket-export1_f3bd3l.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="block md:hidden">
          <Image
            alt="laptop"
            src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973859/mockrocket-capture4_oi9eaj.png"
            width={500}
            height={240}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoOne;
