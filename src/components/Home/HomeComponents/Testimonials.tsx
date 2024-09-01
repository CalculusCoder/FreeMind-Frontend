import React, { useState } from "react";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const testimonyData = [
  {
    name: "Christian",
    image: "/images/Testimony/Christian.jpg",
    story:
      "I've dealt with Pure O OCD and anxiety for several years. I spent most of my years lost, looking for affordable recovery options due to my financial situation. Thankfully, I found FreeMind, and it has been heaven-sent. Trust me when I say not to spend hundreds of dollars on fake anxiety recovery gurus. ",
  },
  {
    name: "Iris",
    image: "/images/Testimony/siri.jpg",
    story:
      "For the past several months I’ve been going through a period of severe anxiety. At first I didn’t even know what was going on with me, but once I did some research, and found Freemind, it all became clear to me. I was able to find the support and resources I needed to start my recovery journey. I am doing so much better now.",
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-10 h-10 text-yellow-500"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l2.387 7.113h7.443l-6.04 4.511 2.327 7.258-6.117-4.292-6.107 4.276 2.303-7.247-6.038-4.524h7.437z" />
  </svg>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonyData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonyData.length) % testimonyData.length
    );
  };

  return (
    <div className="mt-28">
      <header className="text-center text-4xl">Testimonials</header>
      <div className="flex justify-center mt-16">
        <div className="bg-gradient-to-r from-[#F7DBDC] to-purple-200 dark:from-cyan-900 dark:to-blue-900 w-[370px] md:w-[500px] xl:w-[600px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024] h-[600px] md:h-[490px] xl:h-[450px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full h-[110px]"
                alt="/"
                width={110}
                height={100}
                src={`${testimonyData[currentIndex].image}`}
              ></Image>
              <div className="font-bold">
                {testimonyData[currentIndex].name}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="mt-4 text-lg">
            {testimonyData[currentIndex].story}
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center gap-10">
        <button onClick={prevTestimonial}>
          {" "}
          <FaLessThan className="text-purple-900 text-3xl" />
        </button>
        {testimonyData.map((testimonial, index) => (
          <div
            key={index}
            className={`h-4 w-4 m-2 rounded-full ${
              index === currentIndex
                ? "bg-black dark:bg-white"
                : "bg-gray-300 dark:bg-black"
            }`}
          />
        ))}
        <button onClick={nextTestimonial}>
          <FaGreaterThan className="text-purple-900 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
