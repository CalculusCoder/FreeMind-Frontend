import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Drugs = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-3xl font-bold text-center mt-16">
          Substance Use / Medication
        </header>
        <p className="mt-8 text-lg">
          Substance use and medication can both lead to the development of
          anxiety disorders. Let us see a few examples of how it can lead to
          anxiety disorder.
        </p>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">
            Negative Effects on the Brain
          </h1>
          <p className="text-center text-lg">
            Many drugs, including alcohol, cannabis, and stimulants like cocaine
            and methamphetamine, can directly affect the chemistry of the brain
            and the nervous system, leading to increased feelings of anxiety or
            panic.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">
            Withdrawals (Medication or other Drugs)
          </h1>
          <p className="text-center text-lg">
            When a person stops using a substance that they have become
            dependent on, they may experience withdrawal symptoms, including
            anxiety, panic, and agitation. This can lead to anxiety disorder and
            nervous system dysregulation.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">
            Co-occurring Mental Health Conditions
          </h1>
          <p className="text-center text-lg">
            Substance use disorders often co-occur with other mental health
            conditions, such as anxiety disorders, depression, or post-traumatic
            stress disorder (PTSD). The use of drugs or alcohol can exacerbate
            the symptoms of these conditions, leading to anxiety disorder and
            nervous system dysregulation.
          </p>
        </div>
        <div className="border-2 border-purple-300 p-6 rounded-full shadow-lg mt-10">
          <header className="text-center text-2xl font-bold mb-3">
            Important!
          </header>
          <p className="text-center text-lg">
            It is possible for someone to develop an anxiety disorder and
            nervous system dysregulation suddenly as a result of drug use, even
            if they have never experienced anxiety before in their life.
          </p>
        </div>
        <div className="flex justify-around mt-7 md:justify-center md:gap-24">
          <BackButton href="/MembersHome/Anxiety-Recovery/Introduction/WhatIsAnxietyDisorder" />
          <NextButton href="/MembersHome/Anxiety-Recovery/Introduction/AnxietyLevels" />
        </div>
      </div>
    </div>
  );
};

export default Drugs;
