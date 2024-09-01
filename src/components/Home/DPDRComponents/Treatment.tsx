import React from "react";
import Image from "next/image";

const Treatment = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <header className="text-3xl font-bold mb-4 mt-16 text-center">
          DPDR <span className="text-purple-500">Treatment</span>
        </header>
        <p className="mb-4 text-lg">
          Research has shown that psychotherapy, self-help therapy, and
          lifestyle changes, such as stress management techniques and exercise,
          are critical for someone to make a full DPDR recovery.
        </p>
        <p className="mb-4 text-lg">
          Here at FreeMind, we use a combination of great self-help therapy,
          which uses crucial CBT/ACT techniques and methods, stress management
          techniques, personalized online support, and much more to ensure our
          members are on track to make a full recovery.
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Dpdr/mindset.png"
            alt="anxiety"
            width={150}
            height={100}
          />
        </div>
        {/* <p className="mb-4 text-lg">
          Once you join our recovery support group, you will not only begin to
          understand what you are dealing with but also understand what could
          have caused your DPDR and why it is stuck on to you. This is vital to
          recovery. With good use of self-help therapy and techniques, I was
          able to make a full recovery from DPDR.
        </p> */}
        <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-center">
            You can make a <span className="text-red-400">full</span> recovery
            from DPDR. Here at FreeMind, our mission is to guide you through
            recovery so you can get back to living a fulfilling life!
          </p>
        </div>
        <div className="border-2 border-cyan-300 mt-10 p-6 rounded-lg shadow-lg">
          <p className="text-lg">
            IMPORTANT!: The DPDR recovery section is still in progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
