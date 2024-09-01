import React from "react";
import Image from "next/image";

const Treatment = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <header className="text-3xl font-bold mb-4 mt-16 text-center">
          OCD <span className="text-purple-500">Treatment</span>
        </header>
        <p className="mb-4 text-lg">
          Research has shown that Cognitive Behavioral Therapy (CBT), Exposure
          and Response Prevention (ERP), Acceptance and Commitment Therapy
          (ACT), self-help therapy, as well as lifestyle changes, such as stress
          management techniques and exercise, are critical for someone to make a
          full recovery.
        </p>
        <p className="mb-4 text-lg">
          Here at FreeMind, we use a combination of great self-help therapy,
          which uses crucial CBT/ACT techniques and methods, stress management
          techniques, personalized online support, and much more to ensure our
          members are on track to make a full recovery. We do not offer ERP
          since it is recommended that ERP be done in person with a licensed
          professional. In order for ERP to work, it must be done correctly. For
          individuals with more physical compulsions, it is advised to work with
          a therapist on top of following up with self-help therapy. Working
          with a therapist can help speed up recovery or make the process
          smoother, but it is possible to make a recovery without a therapist,
          although not advised.
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Ocd/mental-health.png"
            alt="anxiety"
            width={150}
            height={100}
          />
        </div>
        {/* <p className="mb-4 text-lg">
          Once you join our recovery support group, not only will you begin to
          understand what you are dealing with, you will understand what OCD is
          and why it is stuck on to you. This is vital to recovery. With a good
          use of self-help therapy relaxation techniques, and CBT/ACT recovery
          methods, I was able to make a near-full recovery.
        </p> */}
        <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg">
          <p className="text-lg">
            You can make a <span className="text-red-400">full</span> recovery
            from OCD.
          </p>
        </div>
        <div className="border-2 border-cyan-300 mt-10 p-6 rounded-lg shadow-lg">
          <p className="text-lg">
            IMPORTANT!: The OCD recovery section is still in progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
