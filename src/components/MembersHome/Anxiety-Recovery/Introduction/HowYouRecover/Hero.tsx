import React from "react";
import Link from "next/link";
import NextButton from "../../NextButton";
import BackButton from "../../BackButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          The 3 Keys to Anxiety Disorder Recovery
        </header>
        <p className="text-lg">
          Let us start by seeing the three most important keys to anxiety
          disorder recovery. We will talk more in-depth about these in future
          sections. Please make sure to take note of these three critical
          points, as they are essential for a successful recovery.
        </p>
        <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">#1</h1>
          <p className="text-center text-lg font-bold">
            Losing all fears and worries. Losing fears of your anxiety disorder
            symptoms and other new fears that your anxiety disorder created.
            Losing worries of everyday situations, worries of the future, and
            any other types of worry.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">#2</h1>
          <p className="text-center text-lg font-bold">
            Letting your nervous system and body return to homeostasis.
          </p>
        </div>
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg mt-10">
          <h1 className="text-center text-2xl font-bold mb-3">#3</h1>
          <p className="text-center text-lg font-bold">Patience</p>
        </div>
        <p className="mt-10 text-lg">
          These three points are not talked about enough in the recovery
          community. I notice three things when most people ask me why they
          aren&apos;t recovering. They either still have huge ongoing anxiety
          disorder fears/worries, are not letting their body return to
          homeostasis, or are being impatient.
        </p>
        <p className="mt-8 text-lg">
          These three keys are crucial to your full and lasting recovery. If you
          are missing just one of these, it can significantly delay your
          recovery or prevent recovery altogether. You might be asking yourself,
          aren&apos;t the last two points the same thing? The answer is no; they
          are two completely different things. You can be patient, but if you
          keep inducing severe stress, trauma, or drugs in your body, your body
          wont be able to return to homeostasis. Similarly, even if you are
          taking good care of your mental and physical health, impatience during
          recovery can lead to more anxiety and fears, ultimately hindering your
          recovery.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
          How FreeMind will help you make a full recovery
        </header>
        <p className="mt-8 text-lg">
          We will first help by educating you about anxiety, anxiety disorders,
          the nervous system, hyperstimulation/nervous system dysregulation, and
          more. Have you ever had someone tell you to inform yourself and read
          about anxiety so you can recover? If you had, they have been steering
          you in the right direction. Understanding anxiety is crucial to
          recovery. It helps you understand what your body is doing and why it
          is doing it, which can diminish fears (Key #1). Understanding all of
          this will make you fearless towards anxiety and your symptoms. We also
          show you how you can manage chronic worry. By eliminating fears and
          containing chronic worry, we can take care of Key #1. We also have a
          collection of links, recovery stories, a forum discussion, and
          personalized one-on-one support to help you through your recovery
          journey.
        </p>
        <p className="mt-8 text-lg">
          The second way we help you is by helping you find the biggest
          stressors in your life and educating you on nervous system
          dysregulation. Stress, trauma, and drugs can cause your nervous system
          to produce symptoms and stay dysregulated. By helping you find these
          stressors, and showing you stress management and relaxation
          techniques, we can help your nervous system return to homeostasis (Key
          #2).
        </p>
        <p className="mt-8 text-lg">
          The third way we help you is by showing you how long recovery can
          take. Patience is just as important as the other two key points. It
          can be tough going through this war all by yourself; that is why we
          are here to provide the best support possible. By providing one-on-one
          support and several other resources, we can be a friend to hundreds of
          sufferers worldwide and help them stay patient (Key #3).
        </p>
        <div className="flex justify-around mt-7 md:justify-center md:gap-24">
          <BackButton href="/MembersHome/Anxiety-Recovery/Introduction/StartHere" />
          <NextButton href="/MembersHome/Anxiety-Recovery/Introduction/RecoveryStory" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
