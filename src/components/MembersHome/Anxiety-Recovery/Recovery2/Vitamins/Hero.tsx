import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Vitamins
        </header>
        <p className="text-lg">
          In my recovery journey, I tried multiple vitamins and believed that
          some helped me significantly. Vitamins work differently for different
          people. If you think vitamins may harm you, please consult your doctor
          before trying any vitamin stack. Too much of one particular vitamin
          can lead to adverse effects. If you decide to try a certain vitamin
          stack, you must stay consistent to see any effect or results.
        </p>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          <header className="text-xl font-semibold text-center">
            Ashwagandha
          </header>
          <div>
            Research on ashwagandhas effects on anxiety is still ongoing. Some
            studies suggest that ashwagandha may help reduce anxiety symptoms
            and improve overall well-being. Ashwagandha is commonly used as an
            adaptogen, which means it may help the body better cope with stress.
            By supporting the body&apos;s stress response, ashwagandha may help
            alleviate anxiety symptoms.
          </div>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          <header className="text-xl font-semibold text-center">
            Vitamin B6, B12, and Vitamin D
          </header>
          <div>
            While these vitamins are not directly used to help alleviate anxiety
            symptoms or reduce stress, they may be very helpful if you have a
            vitamin deficiency. A vitamin deficiency can impact mental health
            and contribute to anxiety symptoms. Low vitamin D levels have also
            been linked to an increased risk of anxiety and depression. Adequate
            vitamin D levels may contribute to better overall mental well-being.
            Low vitamin deficiencies can affect your nervous system, stress
            response, and overall mental health. If you believe you may have a
            vitamin deficiency in any of these, it is essential to consult with
            a doctor.
          </div>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8 text-lg">
          <header className="text-xl font-semibold text-center">
            Magnesium, Zinc, and other vitamins.
          </header>
          <div>
            If you believe you may have a vitamin deficiency in any of these, it
            is essential to consult with a doctor. Low vitamin deficiencies can
            affect your nervous system, stress response, and overall mental
            health.
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Recovery2/Excercise" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Recovery2/Relaxation" />
      </div>
    </div>
  );
};

export default Hero;
