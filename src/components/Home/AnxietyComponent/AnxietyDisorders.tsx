import React from "react";
import Image from "next/image";
import AnxietyData from "../../../data/Home/Anxiety.json";

const AnxietyDisorders = () => {
  return (
    <div className="p-8">
      <header className="text-3xl font-bold text-center mb-8">
        List of Anxiety Disorders
      </header>
      <div className="lg:flex lg:justify-around">
        <div className="flex justify-center">
          <div className="mb-24 lg:mb-0 bg-gradient-to-r from-purple-400 to-white dark:from-blue-950 dark:to-cyan-900 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5">
              {AnxietyData[0].title}
            </h1>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[0].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/fear.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <p className="text-xl text-center font-bold mb-5">
              {AnxietyData[0].symptoms}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[0].symptom1}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[0].symptom2}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[0].symptom3}
            </p>
            <p className="text-center text-lg border-2 border-cyan-300 p-6 rounded-lg shadow-lg">
              {AnxietyData[0].description2}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:mt-0 bg-gradient-to-l from-cyan-400 to-white dark:from-blue-950 dark:to-teal-950 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <header className="text-xl  font-bold text-center mb-8">
              {AnxietyData[1].title}
            </header>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[1].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/paranoia.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-xl text-center font-bold mb-5">
              {AnxietyData[1].symptoms}
            </h1>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[1].symptom1}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[1].symptom2}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[1].symptom3}
            </p>
            <h1 className="mb-5 text-lg">{AnxietyData[1].description2}</h1>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-around">
        <div className="flex justify-center">
          <div className="mt-24 bg-gradient-to-r from-indigo-300 to-white dark:from-fuchsia-950 dark:to-cyan-900 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5">
              {AnxietyData[2].title}
            </h1>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[2].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/social.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <p className="text-xl text-center font-bold mb-5">
              {AnxietyData[2].symptoms}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[2].symptom1}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[2].symptom2}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[2].symptom3}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-24 bg-gradient-to-l from-green-200 to-white dark:from-rose-900 dark:to-cyan-900 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <header className="text-xl  font-bold text-center mb-8">
              {AnxietyData[3].title}
            </header>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[3].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/phobia.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-xl text-center font-bold mb-5">
              {AnxietyData[3].symptoms}
            </h1>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[3].symptom1}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[3].symptom2}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[3].symptom3}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-around">
        <div className="flex justify-center">
          <div className="mt-24 bg-gradient-to-r from-slate-400 to-white dark:from-amber-900 dark:to-cyan-900 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5">
              {AnxietyData[4].title}
            </h1>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[4].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/ocd.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <p className="text-xl text-center font-bold mb-5">
              {AnxietyData[4].symptoms}
            </p>
            <p className="mb-5 text-lg border-2 border-purple-500 p-6 rounded-lg shadow-lg">
              {AnxietyData[4].description2}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-24 bg-gradient-to-l from-pink-300 to-white dark:from-blue-900 dark:to-gray-700 w-[450px] xl:w-[600px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <header className="text-xl  font-bold text-center mb-8">
              {AnxietyData[5].title}
            </header>
            <p className="text-lg mb-8 text-center">
              {AnxietyData[5].description1}
            </p>
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/images/man.png"
                alt="anxiety"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-xl text-center font-bold mb-5">
              {AnxietyData[5].symptoms}
            </h1>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[5].symptom1}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[5].symptom2}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[5].symptom3}
            </p>
            <p className="text-center mb-5 text-lg">
              {AnxietyData[5].symptom4}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-24">
        <div className="mb-8">
          <h3 className="text-center text-3xl font-bold mb-4">
            {AnxietyData[6].title}
          </h3>
          <p className="mb-4 text-lg text-center">
            {AnxietyData[6].description1}
          </p>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/warning.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold mb-4 text-center">
              {AnxietyData[7].title}
            </h3>
            <p className="mb-4 text-lg"> {AnxietyData[7].description1}</p>
            <p className="text-lg mb-4"> {AnxietyData[7].description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyDisorders;
