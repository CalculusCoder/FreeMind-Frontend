import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center">
          What Causes Anxiety Disorders?
        </header>
        <p className="mt-8 text-lg">
          The exact causes of anxiety disorder are still being researched and
          are not fully understood till this day. Some researchers believe
          anxiety disorder is caused by multiple factors like a chemical brain
          imbalance, genetics, environmental factors, personality traits, and
          substance use. Lets look into each one of these factors.
        </p>
        <header className="text-3xl font-bold text-center mt-16">
          Chemical Imbalance and Genetics
        </header>
        <p className="mt-8 text-lg">
          Many researchers believe that anxiety disorders and depression are
          linked to a chemical imbalance in the brain. They argue that
          neurotransmitters in the brain can spike or drop, leading to these
          disorders. They believe that medication can target these chemicals and
          cure or restore balance in the brain. Some doctors and researchers
          also believe that these chemical imbalances are genetic and that
          individuals who have a family history of anxiety disorders may be more
          susceptible to a chemical imbalance.
        </p>
        <p className="mt-8 text-lg">
          It is important to note that the chemical imbalance theory is just a
          theory and has several critics. Some critics argue that the evidence
          supporting the chemical imbalance theory is not strong enough to
          explain the complex nature of anxiety disorders and that other
          factors, such as environmental stressors and life experiences, also
          play a role in the development of anxiety. Another criticism of the
          chemical imbalance theory is that it does not take into account the
          complexity of the brain and the many factors that can influence mood
          and behavior.
        </p>
        <div className="border-2 mt-10 border-purple-500 p-6 rounded-lg shadow-lg">
          <p className="text-lg">
            The chemical imbalance theory is not a set fact, it is just a theory
            and has many critics.
          </p>
        </div>
        <header className="text-3xl font-bold text-center mt-16">
          Environmental Factors
        </header>
        <p className="mt-8 text-lg">
          The next possible causes for anxiety disorders are environmental
          factors. It is important to note that environmental factors do not
          directly cause anxiety disorder but that they may increase the chances
          of developing an anxiety disorder. Some environmental factors include
          trauma, chronic stress, learned behaviors, and social factors.
          Let&apos;s take a look at all of these environmental factors.
        </p>
      </div>
      <div className="lg:flex lg:justify-evenly mt-16">
        <div className="flex justify-center">
          <div className="mb-24 h-[500px] lg:mb-0 bg-gradient-to-r from-purple-400 to-white dark:from-rose-900 dark:to-cyan-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">Trauma</h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Exposure to traumatic and highly stressful events can increase the
              risk of developing a serious anxiety disorder.
            </p>
            <p className="text-xl text-center lg:mt-10">
              Some examples of traumatic events are sexual abuse, serious
              accidents, death of a loved one, near death encounters, and
              emotional abuse.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:mt-0 h-[500px]  bg-gradient-to-l dark:from-fuchsia-950 dark:to-cyan-900 from-cyan-400 to-white w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Chronic Stress
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Chronic stress can lead to physical, emotional, and mental
              changes. This can lead to nervous system dysregulation, which is
              very damaging when paired with anxiety disorders.
            </p>
            <p className="text-xl text-center lg:mt-10">
              Some examples of what can cause chronic stress include constant
              work related stress, financial stress, or relationship stress.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-evenly mt-16">
        <div className="flex justify-center">
          <div className="mb-24 h-[500px] lg:mb-0 bg-gradient-to-r dark:from-blue-950 dark:to-teal-950 from-green-200 to-white w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Learned Behaviors
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Some individuals may have been exposed to anxious people
              throughout their life. This can lead them to pick up anxious
              behavior and learn them.
            </p>
            <p className="text-xl text-center lg:mt-10">
              If a person grows up in an environment where anxiety is modeled or
              reinforced, they may be more likely to develop anxiety themselves.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:mt-0 h-[500px]  bg-gradient-to-l dark:from-blue-950 dark:to-cyan-900 from-pink-300 to-white w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Social Factors
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Social factors, such as discrimination, stigma, or lack of social
              support, can also contribute to the development of anxiety
              disorders.
            </p>
            <p className="text-xl text-center lg:mt-10">
              People who experience discrimination or social isolation may be
              more likely to develop anxiety disorders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
