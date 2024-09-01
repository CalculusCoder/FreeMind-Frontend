import React from "react";
import BackButton from "../../BackButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Deep Relaxation Breathing Techniques
        </header>
        <p className="text-lg">
          It is suggested to do the deep relaxation techniques with relaxation
          audio. I will link some of my favorite relaxation audio below. You can
          also check out the FreeMind relaxation audios after this section!
        </p>
        <header className="text-center text-3xl mt-16">
          Deep breathing exercise #1 (Belly Breathing)
        </header>
        <p className="mt-8 text-lg">
          <li>
            If possible, find a very quiet room to perform this exercise in.
          </li>
          <li>You can sit down, lie down, or stand up.</li>
          <li>
            Breathe in slowly (2-4 seconds) through your nose, allowing your
            belly to rise.
          </li>
          <li>Hold it for 2-3 seconds.</li>
          <li>
            Exhale slowly through your mouth, letting your belly fall. This can
            take 5-15 seconds, take as much time as you need.
          </li>
          <li>
            You can also inhale with your mouth instead of your nose. Find the
            right combination for yourself.
          </li>
          <li>
            Change the intervals and time you need for this exercise depending
            on how you feel. The goal is to feel relaxed.
          </li>
        </p>
        <header className="text-center text-3xl mt-16">
          Excercise #2: Visualization
        </header>
        <p className="mt-8 text-lg">
          <li>
            If possible, find a very quiet room to perform this exercise in.
          </li>
          <li>You can sit down, lie down, or stand up.</li>
          <li>
            Imagine yourself in a calm and serene environment, such as a beach,
            a peaceful forest, or a beautiful garden.
          </li>
          <li>
            Engage your senses and vividly imagine the sights, sounds, smells,
            and sensations of that place.
          </li>
          <li>
            Slightly move your fingers, hands, feet, or legs to engage yourself
            more in the visualization.
          </li>
          <li>
            If available, listen to some of the FreeMind relaxation audio or any
            relaxing audio you prefer.
          </li>
          <li>
            You can also perform this exercise with the deep breathing exercise.
            The goal is to make you feel comfortable and relaxed.
          </li>
        </p>
        <header className="text-center text-3xl mt-16">
          Excercise #3: Body Scan Meditation
        </header>
        <p className="mt-8 text-lg">
          <li>
            If possible, find a very quiet room to perform this excercise in.
          </li>
          <li>You can sit down, lie down, or stand up.</li>
          <li>
            This technique involves scanning and relaxing each part of your
            body.
          </li>
          <li>
            Start from your toes and work your way up to your head. Pay
            attention to any areas of tension or discomfort.
          </li>
          <li>
            Slightly move your fingers, hands, feet, or legs to engage yourself
            in this body scan.
          </li>
          <li>
            As you bring awareness to each body part, consciously release
            tension and imagine a sense of relaxation flowing through that area.
          </li>
          <li>
            You can also perform this exercise with the deep breathing exercise
            and visualization exercise. The goal is to make you feel comfortable
            and relaxed.
          </li>
        </p>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Recovery2/Vitamins" />
      </div>
    </div>
  );
};

export default Hero;
