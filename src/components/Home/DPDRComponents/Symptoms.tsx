import React from "react";
import Image from "next/image";

const Symptoms = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">DPDR Symptoms</h1>
        <p className="mb-4 text-lg text-center">
          Let&apos;s explore some of the more common DPDR symptoms.
        </p>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-cyan-900 dark:to-violet-900 w-[370px] md:w-[600px] xl:w-[800px] rounded-3xl p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <div>
              <h1 className="text-white mt-6 font-bold text-center text-xl">
                Feeling of unreality. You don&rsquo;t feel real or like you
                exist.
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                You feel as if you are not real, as if you are a zombie or
                robot. You have trouble recognizing your arms, hands, movements,
                and thoughts.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/catoptrophobia.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Dreams and reality feel the same
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                Your dreams feel as real as reality. It becomes difficult to
                distinguish dreams from reality.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/dream.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Existential Thoughts
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                You are plagued with several crazy existential thoughts. What if
                I am in the matrix? How do people exist around me? What if I am
                not human? What if I am an alien or a higher power?
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/parallel.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Brain Fog / Confusion
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                You feel like you are in a state of mental confusion or lack of
                clarity. You have trouble concentrating, remembering things, or
                understanding things. You may feel fatigued and disoriented as
                well.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/confused.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Memory Loss
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                You have trouble remembering everything. Your short-term or
                long-term memory might feel entirely off. You have fears of
                developing dementia or already having it.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/confusion.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Reality feels distorted
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                It feels as if you are observing the world behind a wall or pane
                of glass. Everything around you may look 2D, cartoonish, or like
                a dream.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/virtual-tour.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-white font-bold text-center mt-10 text-xl">
                Emotional Numbness
              </h1>
              <p className="py-1 text-center text-white text-lg mt-2">
                You feel like you have no emotions. You have trouble feeling any
                type of emotion like love, sadness, or joy.
              </p>
              <div className="flex justify-center mt-10 mb-10">
                <Image
                  src="/images/Home-Dpdr/worry.png"
                  alt="anxiety"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg mt-24">
          <p className="text-center text-lg">
            These are just a few of many more types of DPDR symptoms. I had all
            of the symptoms above and many more. Thankfully, I made a near-full
            recovery and am back to enjoying my life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
