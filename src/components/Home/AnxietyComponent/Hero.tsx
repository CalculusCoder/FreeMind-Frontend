import React from "react";
import Image from "next/image";
import AnxietyData from "../../../data/Home/Anxiety.json";

const Hero = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Anxiety and Anxiety Disorders
        </h1>
        <h2 className="text-2xl font-bold text-center mb-8">
          Let&apos;s dive deeper into what anxiety is and the different types of
          anxiety disorders.
        </h2>
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 mt-16 text-center">
            What is Anxiety?
          </h3>
          <p className="mb-4 text-lg">
            Anxiety is an emotion characterized by feelings of tension, worried
            thoughts, and physical changes like increased blood pressure.
          </p>
          <p className="mb-4 text-lg">
            Anxiety is a common human emotion characterized by feelings of fear,
            worry, and apprehension.
          </p>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/evil.png"
              alt="anxiety"
              width={150}
              height={100}
            />
          </div>
          <div className="border-2 border-purple-500 dark:border-cyan-300 p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">{AnxietyData[8].description1}</p>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 text-center">
            Anxiety Disorders
          </h3>
          <p className="mb-4 text-lg">
            Anxiety disorder is a broad term to describe a more specific issue.
            Anxiety disorders are a group of mental health conditions
            characterized by excessive and persistent feelings of fear, worry,
            or dread that can interfere with job performance, school work, daily
            activities, and relationships. For most people with anxiety
            disorders, the anxiety does not go away and can worsen over time.
            There are several types of anxiety disorders, and people can suffer
            from just one or many different anxiety disorders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
