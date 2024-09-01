import Image from "next/image";
import Button from "../GlobalComponents/Button";
import { useEffect } from "react";
import style from "./RecoveryBenefits.module.css";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const RecoveryBenefits = () => {
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
    hidden: { opacity: 0, y: 100 }, // Start 100 pixels below the initial position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3, // Maintain duration for a smoother animation
        ease: "easeInOut", // Smooth start and end
      },
    },
  };

  return (
    <div className="bg-[#F1E6FF] dark:bg-[#0e1118] flex flex-col lg:flex-row justify-around pt-24 pb-28">
      <motion.div
        className={`order-2 lg:order-1 flex items-center  justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div variants={variants}>
          <Image
            className="w-[270px] lg:w-[550px] mt-24"
            alt="/"
            width={550}
            height={30}
            quality={100}
            src="https://res.cloudinary.com/dlogcew99/image/upload/v1713973342/g11_iglbml.png"
          ></Image>
        </motion.div>
      </motion.div>

      <motion.div
        className={`order-1 lg:order-2 flex justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className={`bg-white dark:bg-cyan-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]`}
          variants={variants}
        >
          <header className="text-center font-extrabold text-4xl mt-1">
            Recovery <span className="text-purple-500">Support</span>
          </header>
          <header className="text-center font-extrabold text-4xl mt-3">
            <span className="text-cyan-300">Member</span> Benefits
          </header>
          <div className="flex items-center">
            <Image
              alt="check"
              src="/images/check.png"
              width={30}
              height={100}
            />
            <p className="py-3 mt-5 text-center text-lg ml-3">
              Exclusive access to a full anxiety disorder recovery program that
              includes anxiety information, symptoms, relaxation techniques,
              recovery strategies, relaxation audio, and much more.
            </p>
          </div>

          <div className="flex items-center">
            <Image
              alt="check"
              src="/images/check.png"
              width={30}
              height={100}
            />
            <p className="py-3 mt-2 text-center text-lg">
              Online forums to share your experiences, ask questions, and
              connect with other support members.
            </p>
          </div>

          <div className="flex items-center">
            <Image
              alt="check"
              src="/images/check.png"
              width={30}
              height={100}
            />
            <p className="py-3 mt-2 text-center text-lg">
              Direct access to one of our team members through email for
              personalized support and guidance.
            </p>
          </div>

          <div className="flex items-center">
            <Image
              alt="check"
              src="/images/check.png"
              width={30}
              height={100}
            />
            <p className="py-3 mt-2 text-center text-lg">
              New Feature! Gain immediate insights and guidance from our Anxiety
              Recovery Chatbot. Ask our chatbot anything related to Anxiety,
              OCD, and DPDR.
            </p>
          </div>
          {/* <div className="flex items-center">
            <Image
              alt="check"
              src="/images/check.png"
              width={30}
              height={100}
            />
            <p className="py-3 mt-2 text-center text-lg">
              Monthly group skype calls with one of our team members. Ask us any
              question regarding Anxiety, DPDR, or OCD.
            </p>
          </div> */}

          {/* <p className="text-center font-bold text-lg mt-6">
            One-on-One Skype calls are available for the first 20 users! To
            learn more, click on Member Benefits. (Still Available!)
          </p> */}
          <p className="text-center font-extrabold text-lg mt-3">
            FreeMind is 100% Free! Register Today.
          </p>
          <Button />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RecoveryBenefits;
