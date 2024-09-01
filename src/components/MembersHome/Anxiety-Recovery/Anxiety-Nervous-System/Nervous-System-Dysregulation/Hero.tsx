import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Nervous System Dysregulation (Chronic Stress Response)
        </header>
        <p className="text-lg">
          In the previous sections, we seen what the stress response is and what
          an acute stress response might do. In this section, we will see what
          happens when the acute stress response is activated so much that it
          leads to a dysregulated nervous system.
        </p>
        <div className="mt-16">
          <header className="text-center text-3xl">
            The chronic stress response
          </header>
          <p className="mt-8 text-lg">
            A chronic stress response is a stress response that gets STUCK in a
            threat response, even once the threat has passed. Your nervous
            system has become completely dysregulated and shows 24/7 or nearly
            24/7 symptoms. In nervous system dysregulation, a threat response
            from the past does not complete the full cycle and does not get
            “finished,” so it stays in our system, causing thoughts, feelings,
            and behavior that would be consistent with a threat even though
            there is none. Nervous system dysregulation causes hundreds of
            symptoms, which are listed in the symptoms section. Because your
            stress response is still activated, you will experience symptoms
            throughout the day such as restlessness, being on edge, difficulty
            concentrating, irritability, muscle tension, sleep disturbances, and
            hundreds of other symptoms. In my situation, I had new symptoms show
            up every week. Let us see two examples of nervous system
            dysregulation.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8">
          <header className="text-center">#1</header>
          <p className="mt-4 text-lg ">
            You have had anxiety for the last two years since you moved away
            from home to live on campus at school. You become very stressed due
            to school work, work, and your worries about the future. You
            continue being anxious and do not give yourself time to relax or
            recover. You keep living a fast-paced life and get 5-6 hours of
            sleep a day. You eat unhealthily and do not treat your mental or
            physical health with respect. For the next two years, you continue
            to live a fast-paced life with no limits. You graduate college and
            find a new job across the country. At your job, you continue to live
            a fast-paced life and start feeling the effects of anxiety getting
            worst. One night, you have a horrible panic attack and realize your
            anxiety has gotten out of control. You begin experiencing daily
            panic attacks and start struggling to function. You feel on edge
            24/7 and are feeling symptoms throughout the day. You feel as if you
            are getting more symptoms over time. You just experienced your
            nervous system become dysregulated over the years.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8">
          <header className="text-center">#2</header>
          <p className="mt-4 text-lg ">
            You are dealing with a lot of trauma, abuse, and stress. You just
            got a new promotion at work and just became a parent. Your partner
            has also asked for a divorce, which continues to affect you
            mentally. Bad experiences continue to happen in your life. You may
            have lost a loved one, been abused, or almost experienced death. You
            continue to add these stressors to your life, which activates the
            stress response; thankfully, it&apos;s still acute. You continue to
            live a fast-paced life and deal with difficult relationships. You
            slowly feel like you are losing control of your life. You notice
            that your anxiety is also getting out of hand as the stress response
            keeps being activated. One day you wake up and start experiencing
            severe DPDR, intrusive thoughts, and anxiety. You just experienced
            your nervous system become dysregulated over a short period of time
            due to severe trauma and stress.
          </p>
        </div>
        <p className="mt-8 text-lg">
          If you feel like you have a dysregulated nervous system, you might be
          dealing with a high to severe level of anxiety. Regardless if you have
          a dysregulated nervous system or an acute stress response, you can
          make a full recovery. In the next section, we will briefly go over the
          differences between anxiety and nervous system dysregulation.
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/StressResponse" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/AnxietyVsNSD" />
      </div>
    </div>
  );
};

export default Hero;
