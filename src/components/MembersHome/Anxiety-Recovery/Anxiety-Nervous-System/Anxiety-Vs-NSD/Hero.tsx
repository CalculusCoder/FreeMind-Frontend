import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Anxiety vs Nervous System Dysregulation.
        </header>
        <p className="text-lg text-center">
          I often get this question: what is the difference between anxiety and
          the stress response? Anxiety is just excessive and persistent worry
          and fears about everyday situations. The stress response is a REACTION
          that happens due to your anxiety and fears. Remember the three keys to
          recovery? Get rid of excessive fears/worries, let the nervous system
          return to homeostasis, and patience. The first key deals with tackling
          anxiety, and the 2nd key tackles the stress response/nervous system
          dysregulation. You can have an anxiety disorder but only have an acute
          stress response. If a person is in this situation, recovery is a
          little more linear. The issue is when a person has an anxiety disorder
          and a dysregulated nervous system. Nervous system dysregulation makes
          recovery difficult since the body is extremely erratic, throwing
          random symptoms throughout the day and weeks. One little stressful
          experience can lead to even more symptoms. With a chronic stress
          response, you need to walk on eggshells and be careful with stress. In
          the recovery section, we will see how to tackle behavioral issues that
          lead to anxiety and behavioral+physical issues that keep our nervous
          system dysregulated.
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/NervousSystemDysregulation" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/PanicAttacks" />
      </div>
    </div>
  );
};

export default Hero;
