import React from "react";
import BackButton from "../../BackButton";
import NextButton from "../../NextButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Excercise
        </header>
        <p className="text-lg">
          Exercise was crucial to my recovery, and everyone suffering from an
          anxiety disorder or depression should exercise. Some studies show that
          exercise is key to recovery in certain patients with depression and
          anxiety. The key is to find the right balance of exercise, as all of
          us have different body types and limits. It is recommended that you
          perform mild to moderate exercise only. Whenever I would have intense
          workouts, I would see an increase in symptoms almost immediately. Too
          much exercise can stress the body, so please keep it mild to moderate.
        </p>
        <header className="text-center text-3xl mt-16">
          Find and engaging sport
        </header>
        <p className="mt-8 text-lg">
          For the type of exercise, you can do almost anything. Run at the park,
          lift weights, squat, play football, basketball, swim, etc. You need to
          find the perfect mix and balance for yourself. Here at FreeMind, we
          recommend finding an engaging sport that takes 100% of your attention.
          Whenever I played soccer, I would engage my 100% attention in the
          sport. I would feel 100% recovered while playing and even 1 hour
          later. Sports was an escape for me; it made me feel normal, even if it
          was for only a few minutes or hours. Unfortunately, I became addicted
          to this feeling, so I began playing soccer every day, which eventually
          overstressed my nervous system. This is why we also recommend
          balancing sports and exercise correctly. If you cannot find an
          engaging sport, simple exercise can still make a huge difference in
          recovery. Light walks at the park, jogging around your neighborhood,
          or even riding a bicycle are great simple exercises that can make a
          difference. Find your limit, and stick with it. Over time you can
          slowly increase the intensity and frequency of your exercise depending
          on how your body takes it.
        </p>
        <header className="text-center text-3xl mt-16">Diet</header>
        <p className="mt-8 text-lg">
          Regardless if you are suffering from anxiety or not, having a great
          diet has been found to be very beneficial for everyone. Although there
          is still uncertainty about there being a link between anxiety and
          diet, we still recommend that you keep a healthy diet as much as
          possible. A healthy diet can positively impact your overall
          well-being, providing you with more energy, better sleep quality, and
          improved physical health. A healthy diet gives you essential vitamins,
          minerals, and antioxidants needed for overall health. Nutrient
          deficiencies can sometimes contribute to anxiety symptoms. Most
          importantly, make sure to stay hydrated as well!
        </p>
        <header className="text-center text-3xl mt-16">Caffeine</header>
        <p className="mt-8 text-lg">
          Although caffeine can positively affect certain people, we recommend
          avoiding it completely. Caffeine has stimulant properties that can
          exacerbate anxiety symptoms. Caffeine can lead to restlessness,
          jitteriness, increased heart rate, and even panic attacks in some
          cases. It may heighten feelings of anxiety. Caffeine can also
          interfere with sleep. Sleep is crucial to recovery. We highly consider
          exploring alternatives like herbal teas or decaffeinated options.
        </p>
        <header className="text-center text-3xl mt-16">Alcohol</header>
        <p className="mt-8 text-lg">
          It is recommended to stay away from alcohol altogether. By intaking
          alcohol or drugs, you can significantly delay your recovery or prevent
          it entirely. Alcohol can lead to sleep disturbances, mood swings,
          irritability, and even worsen your anxiety. If you also struggle with
          DPDR, alcohol will most likely exasperate your symptoms. If you feel
          like you cannot eliminate alcohol altogether, consider limiting it as
          much as possible, or reach out to a therapist for help.
        </p>
        <header className="text-center text-3xl mt-16">Drugs</header>
        <p className="mt-8 text-lg">
          Drug use can cause overnight, 24/7 DPDR, OCD, and anxiety disorder
          symptoms. Although the effects of drug usage and how they cause
          anxiety disorders are still being studied, one thing is clear.
          Substance use can significantly delay recovery and keep damaging your
          nervous system. Many DPDR sufferers first noticed their symptoms due
          to drug use. It is 100% advised that you stay away from harmful
          substances as much as possible or altogether.
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Recovery2/Trauma" />
        <NextButton href="/MembersHome/Anxiety-Recovery/Recovery2/Vitamins" />
      </div>
    </div>
  );
};

export default Hero;
