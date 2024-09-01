import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Levels of Severity in Anxiety Disorders
        </header>
        <p className="text-lg">
          Let us see the different levels of severity in anxiety disorders. Note
          that some people may suffer from anxiety disorders but not from
          chronic nervous system dysregulation. (Don&apos;t worry, we will
          explain nervous system dysregulation in upcoming sections). Here at
          FreeMind, we recommend working with a therapist, especially if you are
          in the high to severe stages of anxiety.
        </p>
        <div className="mt-16">
          <header className="text-center text-3xl text-red-200">
            Regular/Mild Anxiety
          </header>
          <p className="mt-8 text-lg">
            This is the type of anxiety that almost everyone has. It is
            completely normal and a normal functioning part of the human body.
            It&apos;s the type of anxiety you get when you are about to take an
            exam, when you are about to present something at work, or when you
            are about to get on a ride at an amusement park. Symptoms only last
            at the moment (ex. shortness of breath, heart beating quickly). Most
            people with regular anxiety do not go on to develop severe anxiety
            disorders or chronic nervous system dysregulation. Their anxiety
            usually ends moments after the &quot;threat&quot; is gone. Their
            nervous system goes back to normal levels, and they continue their
            lives with these anxiety experiences only happening once in a while.
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl text-red-300">
            Moderate Anxiety
          </header>
          <p className="mt-8 text-lg">
            This level of anxiety happens when the mild anxiety becomes more
            severe or starts getting out of hand. In this level of anxiety, you
            notice that you are worrying way more than you did back then. You
            start having more frequent episodes of anxiety, even for the
            smallest things. Not only are you having anxiety going on amusement
            park rides, but you are also now feeling anxiety when driving, in
            crowded areas, when working, and possibly when sleeping. You begin
            to feel more restless, and you struggle to fall asleep now. In this
            level of anxiety, your nervous system begins to work on overdrive
            due to your stress response. You may feel a lot more new symptoms,
            even if they are short-lived (ex. feeling trapped, trembling arms
            and legs, pins and needles, sweating). Many sufferers who go from
            mild to moderate anxiety usually have undergone significant life
            experiences that caused this transition. This experience could be
            anything ranging from graduating college, moving to a new state or
            country, starting a new stressful job, the birth of a child,
            divorce, traumatic life events, and much more. In this level of
            anxiety, you are still able to function normally, but your quality
            of life has gone down significantly. Fortunately, if you are in this
            stage, you can make a quicker recovery and prevent going into the
            high/severe levels of anxiety. This is the perfect stage to make a
            recovery since you start to recognize that your anxiety is getting
            out of hand. Unfortunately for me, I did not recognize it, which led
            my anxiety to get even worst.
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl text-red-500">
            High Anxiety
          </header>
          <p className="mt-8 text-lg">
            In the high anxiety level, you start struggling to function. Some
            people may not be able to function at all at this level. This is the
            stage where you clearly notice that you have a problem since it
            impairs your ability to function. You might lose your job or career
            or drop out of school at this stage. You begin to need a lot of
            support from your partner or family. In this stage, you have anxiety
            almost all day and for the smallest things. You might also begin to
            experience panic attacks. You struggle to sleep, and sometimes, you
            may not get sleep at all. You feel like you can&apos;t relax at all.
            You may have also lost certain hobbies or events due to your
            anxiety. You get a world of new crazy symptoms (DPDR, crazy random
            thoughts, shortness of breath, insomnia, the feeling of going crazy,
            panic attacks.) These symptoms may happen every day, sometimes even
            24/7. In this stage, you may be struggling with chronic nervous
            system dysregulation. Recovery will no longer be a simple journey
            but a difficult one. Recovery will take a while. Your stress
            response has been activated so many times, that this time it has
            stayed &quot;on&quot;. For members that are in the high to severe
            levels of anxiety, we recommend that you find a therapist as well as
            following up with FreeMind self-help therapy. Although I made a
            near-full recovery while in the severe stage, I wish I had support
            from a therapist during my recovery. This support is crucial at
            times, especially when you are feeling extremely low. If you were
            like me back then when I could not afford therapy, we will do our
            best to provide the support we can here at FreeMind! Please know
            that FreeMind support should not replace working with an actual
            therapist.
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl text-red-800">
            Severe Anxiety
          </header>
          <p className="mt-8 text-lg">
            In this level of anxiety severity, you are not able to function at
            all. You may have lost everything: your car, apartment, job, career,
            and maybe even dropped out of school. You have hundreds of symptoms,
            ranging from DPDR, nocturnal panic attacks, or maybe even mild OCD.
            New symptoms might appear every week, and it may seem like they
            never go away. You are anxious nearly 24/7 or anxious 24/7. Your
            symptoms also last 24/7 or nearly 24/7, and it seems like you
            can&apos;t get a break. You struggle with insomnia or find it very
            difficult to fall asleep. In this stage, you need the most support
            you can get. Recovery will be very difficult to achieve, but still
            possible. Recovery will take a WHILE, so getting the most support
            you can get is also crucial. I was at this stage of anxiety. I lost
            everything and was not able to function for 6-7 months. I had severe
            chronic 24/7 DPDR as well as Schiz OCD. I was unable to leave my
            room for a week, I lost 20 pounds, and became pale skinned. Fast
            forward to now, I am still in recovery, but I am in the last stage
            of recovery! The amount of crazy symptoms and weird mental feelings
            I had were so intense I thought I would never be the same ever
            again. Trust me when I say, you will recover regardless of which
            level of anxiety you have. For this stage of recovery, we 100%
            recommend connecting with a therapist. Recovery will be a tough
            journey of ups and downs, so having the support you need is crucial.
            Especially if your current support system does not exist or, even
            worst, is part of the problem. If you are in a situation where you
            cannot afford or have access to therapy, here at FreeMind, we will
            do our best to provide support.
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Introduction/AnxietyDisorderCauses" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Introduction/RecoveryJourney" />
      </div>
    </div>
  );
};

export default Hero;
