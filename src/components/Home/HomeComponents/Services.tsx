import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../GlobalComponents/Button";
import style from "./Services.module.css";
import { motion, useAnimation } from 'framer-motion';


const Services = () => {
  // useEffect(() => {
  //   const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  //   const thresholdsLargeScreen = [
  //     0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
  //   ];
  //   const thresholdsSmallScreen = [
  //     0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3,
  //     0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
  //   ];

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add(style.show);
  //         }
  //       });
  //     },
  //     {
  //       threshold: isLargeScreen
  //         ? thresholdsLargeScreen
  //         : thresholdsSmallScreen,
  //     }
  //   );

  //   const elements = document.querySelectorAll(`.${style.hidden}`);

  //   // Start observing after a delay
  //   setTimeout(() => {
  //     elements.forEach((el) => observer.observe(el));
  //   }, 100);

  //   // Clean up
  //   return () => {
  //     elements.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);

  const variants = {
    hidden: { opacity: 0, x: -200 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // Increase duration for a slower animation
        ease: "easeInOut" // This easing function offers a smooth start and end
      }
    }
  };

  const variantsFirstImage = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const variantsSecondImage = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } // Delayed by 0.3 seconds
    }
  };
  
  

  return (
    <div className="lg:flex lg:justify-around bg-[#F1E6FF] pt-16 lg:pt-0 dark:bg-[#0e1118]">
      <motion.div 
         className={`flex justify-center`}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: 0.2 }}>
          
        <motion.div 
        className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-950 dark:to-cyan-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]"
        variants={variants}
        >
          <div className="space-y-3 lg:space-y-5">
            <header className="text-center mt-5 font-extrabold text-4xl text-white">
              Welcome to FreeMind
            </header>
            <p className="py-1 mt-1 text-center text-white text-lg"></p>
            <p className="py-1 mt-1 text-center text-white text-lg">
              Here at FreeMind, we use a combination of effective self-help
              therapy, which includes crucial CBT (Cognitive Behavioral Therapy)
              methods. In addition, we provide stress management techniques and
              personalized online support among other resources.
            </p>
            <div className="flex justify-center">
              <Image
                alt="check"
                src="/images/fear.png"
                width={60}
                height={70}
              />
            </div>
            <p className="py-1 mt-1 text-center text-white text-lg">
              I personally understand the battle with anxiety, having once
              suffered from severe anxiety, panic attacks, OCD, and
              depersonalization and derealization disorder. A year later, I have
              made an almost complete recovery!
            </p>
            <div className="flex justify-center">
              <Image
                alt="check"
                src="/images/jumping-man.png"
                width={60}
                height={70}
              />
            </div>
            <p className="py-1 mt-1 text-center text-white text-lg">
              FreeMind Recovery offers a comprehensive, scientifically backed
              anxiety recovery program, along with several resources and tools
              designed to guide you towards a full and lasting recovery.
            </p>
            {/* <div className="flex justify-center">
              <Image
                alt="check"
                src="/images/reading.png"
                width={60}
                height={70}
              />
            </div> */}
          </div>
        </motion.div>
      </motion.div>

      <motion.div className={`flex justify-center mt-16 lg:mt-0`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="lg:flex lg:items-center lg:gap-24">
          <motion.div className="w-[360px] h-[297px] bg-[#F7DBDC] dark:bg-blue-950 dark:border dark:border-solid dark:border-cyan-300 rounded-xl shadow-2xl mt-16 lg:mt-0 flex justify-center items-center flex-col"
          variants={variantsFirstImage}
          >
            <Image
              alt="/"
              width={200}
              height={30}
              src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973266/anxiety1_ah4w83.png"
            ></Image>
            <span className="mt-6 font-extrabold text-[#A71EF9] text-lg dark:text-white">
              Anxiety
            </span>
          </motion.div>
          <motion.div className="w-[360px] h-[297px] bg-[#C5D5F2] dark:bg-blue-950 dark:border dark:border-solid dark:border-purple-400 mt-10 mb-10 lg:mt-0 lg:mb-0 rounded-xl shadow-2xl flex justify-center items-center flex-col"
          variants={variantsSecondImage}
          >
            <Image
              alt="/"
              width={140}
              height={30}
              src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973294/panic_jif9td.png"
            ></Image>
            <span className="mt-6 font-extrabold text-[#A71EF9] dark:text-white text-lg">
              Panic
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
