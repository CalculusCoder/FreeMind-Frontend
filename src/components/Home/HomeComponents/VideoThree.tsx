import { useEffect } from "react";
import Image from "next/image";
import style from "./VideoThree.module.css";
import React from "react";

const VideoThree = () => {
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
    <div className="flex flex-col lg:flex-row justify-center items-center pt-32 lg:ml-56 xl:ml-64 lg:pr-6">
      <div
        className={`order-2 lg:order-1 lg:mr-24 mt-16 lg:mt-0 ${style.hidden}`}
      >
        <div className="flex flex-col justify-center items-center ">
          <header className="text-center text-4xl  mb-4 lg:mb-0 ">
            Discover Instant Help <span>with Our Anxiety </span>
            <span className="text-cyan-300 font-extrabold">Recovery AI</span>
          </header>
          <p className="lg:max-w-md p-8 lg:p-0 lg:mx-0 max-w-md mx-auto text-lg mt-6 text-center">
            Step into the future of mental health support with our unique
            Anxiety Recovery Chatbot. Trained to understand the complexities of
            anxiety, OCD, and DPDR, this AI is ready to answer your questions at
            any time. Gain immediate insights, receive guidance, and find
            comfort in its empathetic responses. Let our chatbot be your
            companion on this journey towards self-awareness and recovery.
          </p>
          <div className="mt-10">
            <Image
              alt="brain-thinking"
              width={250}
              height={50}
              src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973481/brain-thinking-resized_qqlzmq.png"
            ></Image>
          </div>
        </div>
      </div>
      <div className={`order-1 lg:order-2 ${style.hidden}`}>
        <div className="flex relative">
          {/* <div className="absolute left-2 top-4 sm:top-8 sm:left-5 lg:top-11 lg:left-6 xl:top-16 xl:left-7"> */}
          <div className={`${style.centered}`}>
            <video
              autoPlay
              muted
              playsInline
              loop
              className="rounded-3xl h-auto w-[111px]  sm:w-[170px] lg:w-[195px] xl:w-[280px]"
            >
              <source
                src="https://res.cloudinary.com/dlogcew99/video/upload/v1713973623/phone-bot-final_al3s1a.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* <div className="absolute right-0 -top-8 xl:-top-14 bg-purple-900 w-[385px] sm:w-[600px] lg:w-[700px] xl:w-[1000px] xl:h-14 h-8"> */}
          <div className="absolute bg-purple-900 w-[385px] sm:w-[600px] lg:w-[700px] xl:w-[1000px] xl:h-14 h-8">
            <div className="flex gap-2 items-center h-full ml-2">
              <div className="w-3 h-3 xl:w-4 xl:h-4 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 xl:w-4 xl:h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 xl:w-4 xl:h-4 bg-green-400 rounded-full"></div>
            </div>
          </div>
          {/* <div className="absolute -left-4 top-4 sm:-left-5 sm:top-7 lg:top-9 lg:-left-6 xl:-left-10 xl:top-14"> */}
          <div className={`${style.centered}`}>
            <Image
              className="sm:w-[250px] lg:w-[290px] xl:w-[410px]"
              alt="mockup"
              width={160}
              height={300}
              src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973524/mockup_lvomj4.png"
            />
          </div>
          <div className="lg:w-[700px] xl:w-[1000px] ">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="rounded-b-xl h-auto w-[385px] sm:w-[600px] lg:w-[2000px] "
            >
              <source
                src="https://res.cloudinary.com/dlogcew99/video/upload/v1713973672/chatbot-video-3_xjvy1i.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoThree;
