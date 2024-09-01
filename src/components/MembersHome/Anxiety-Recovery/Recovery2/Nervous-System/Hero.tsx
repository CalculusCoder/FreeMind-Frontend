import React from "react";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Nervous System Recovery
        </header>
        <p className="text-lg">
          Remember the three keys to anxiety disorder recovery? We have
          thoroughly covered the first key, eliminating fears and introducing
          the R.A.R.L.M and R.A.R.M methods to eliminate anxiety and panic
          attacks. The next step is to let the nervous system recover! In this
          section, we will boost start our recovery and cover topics like
          stress, worry, trauma, substance use, and exercise. We will see how
          some of these can prevent recovery and how to speed up the process of
          nervous system dysregulation recovery. Please note nervous system
          dysregulation recovery can take a while. You can be doing everything
          right but still have symptoms show up. This is because the nervous
          system takes a while to recover. Remember, we are getting rid of years
          of stress and damage to the nervous system. We won&apos;t get rid of
          these stress hormones in months. Please be gentle with yourself and,
          most importantly, be patient. Recovery will come when your body is
          ready.
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <NextButton href="/MembersHome/Anxiety-Recovery/Recovery2/Worry" />
      </div>
    </div>
  );
};

export default Hero;
