import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Stress: Stop damaging your nervous system
        </header>
        <p className="text-lg">
          We need to find and identify stressors. As we discuss all the time,
          acute stress can become chronic(nervous system dysregulation). We need
          to identify all sources of stress and put an end to it. Some causes of
          stress are more difficult to address, but we will do our best to
          identify and address them. We will go over trauma and environmental
          stressors in the next section.
        </p>
        <header className="text-center text-3xl mt-16">
          Stressor # 1: Fast Paced Lifestyle
        </header>
        <p className="mt-8 text-lg">
          This is self-explanatory. If you are constantly on the go, you
          probably worry and activate your stress response repeatedly. Your
          nervous system will always be stimulated if you live a fast-paced
          lifestyle. You also need to give your body time to recover. This
          happened in my situation; I continued living a fast-paced life,
          leading to severe panic attacks and chronic DPDR. Please check out the
          worry section if you have not. Let&apos;s look at tips on how to slow
          down a fast-paced lifestyle.
        </p>
        <header className="text-center text-2xl mt-16">Tips</header>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Create a routine. Having an established routine can quickly bring
          balance and peace to your life. Set specific times for work,
          self-care, shopping, and other things. Make sure to set enough time
          for any emergencies that might pop up.
        </p>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Set boundaries in your schedule and lifestyle. Learn when to say no
          and when to say yes. Refrain from saying yes if your schedule is
          overwhelmed. Even if you do not feel overwhelmed, you can become
          overwhelmed quickly if your schedule becomes tight.
        </p>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Prioritize and simplify your lifestyle and schedule. Look at your
          commitments/responsibilities and identify the ones that are important
          to you. If you have to, let go of non-essential tasks or reschedule
          them. Simplify your schedule and focus on what matters most to avoid
          feeling overwhelmed.
        </p>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Make enough time for hobbies, activities, exercise, or anything that
          brings you joy/relaxation. Don&apos;t just fill your schedule with
          chores and work; you must also practice self-care. Take care of
          yourself and your mental health; you need it on this recovery journey.
        </p>
        <header className="text-center text-3xl mt-16">
          Stressor # 2: Social Stress
        </header>
        <p className="mt-8 text-lg">
          Having toxic relationships, regardless if they are friends or
          coworkers, can be emotionally draining and can lead to stress.
          Sometimes the people we are around can cause us stress. Negativity,
          drama, emotional manipulation, and trust issues can all head to a
          stimulated nervous system. Let&apos;s see how we can handle these
          relationships to put an end to the stress caused by toxic
          relationships.
        </p>
        <header className="text-center text-2xl mt-16">Tips</header>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Recognize the toxic relationship that is causing you anxiety or
          stress. Recognizing can be difficult for many since losing a
          particular friendship or connection can devastate you. But you must
          understand its negative impact on your well-being and be willing to
          address it. Remember, we are in recovery. We want to eliminate as many
          stressors as possible to boost start our recovery.
        </p>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          Set boundaries. Establish clear boundaries to protect yourself from
          toxic behavior. Limit your exposure to toxic friends as much as
          possible. This is crucial for recovery; you need to stop stimulating
          your nervous system so it can return to homeostasis.
        </p>
        <p className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          This one may be a hard pill to swallow but consider temporarily ending
          the relationship/relationships or ending the relationship altogether.
          While in recovery, there was one thing I noticed, I was way more
          anxious and stressed around toxic people. It was like my body knew who
          was bad and who was good for me. I remember leaving a restaurant
          because one of my toxic friends was too negative. I ended all toxic
          relationships or changed them completely, which was crucial to my
          recovery. I am not advising you to go and do this, but weigh your
          options and ask for help when deciding this.
        </p>
        <p className="mt-8 text-lg">
          In the next section, we will discuss trauma, our environment, and
          toxic family members.
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Recovery2/Worry" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Recovery2/Trauma" />
      </div>
    </div>
  );
};

export default Hero;
