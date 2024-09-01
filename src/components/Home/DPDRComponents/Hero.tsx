import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Depersonalization-Derealization Disorder (DPDR)
        </h1>
        <h2 className="text-2xl font-bold text-center mb-8">
          Do you feel as if the world around you is{" "}
          <span className="text-red-400">fake</span>? Do you have trouble
          <span className="text-red-400"> recognizing</span> yourself in the
          mirror? Do loved ones look weird or{" "}
          <span className="text-red-400"> unrecognizable</span> to you? Lets
          dive deeper into DPDR.
        </h2>
        <h3 className="text-3xl font-bold mb-4 mt-16 text-center">
          What is DPDR?
        </h3>
        <p className="mb-4 text-lg">
          Depersonalization-Derealization disorder is a mental health condition
          that affects an individual’s sense of self and surroundings. People
          with DPDR may feel detached from their thoughts, feelings, and body
          and may also experience a sense of unreality or detachment from their
          surroundings. The exact causes of DPDR are not fully understood, but
          several factors may contribute to its development. Some of these
          factors include stress, trauma, severe anxiety disorders, and
          substance use. Depersonalization and Derealization are slightly
          different but are still considered to be one condition. Let’s see what
          the differences are.
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Dpdr/person.png"
            alt="anxiety"
            width={100}
            height={100}
          />
        </div>
        <p className="mb-4 text-lg">
          <span className="text-purple-500">Depersonalization</span> is when you
          feel detached or disconnected from your thoughts, feelings, emotions,
          senses, and body. You may feel as if you are observing yourself from a
          distance or as if your body is not your own.
        </p>
        <p className="mb-4 text-lg">
          <span className="text-purple-500">Derealization</span> is when you
          feel detached or disconnected from your environment. The world might
          look weird, 2D-shaped, and distorted. It may feel like the world
          around you is fake and that people around you are also not real.
        </p>
        <p className="mb-4 text-lg">
          Although the two have some differences, we will treat both as one
          disorder. It does not matter if you might have derealization over
          depersonalization or vice versa. It does not matter if you have both
          since recovery is the same.
        </p>

        <h1 className="text-3xl font-bold mb-4 text-center mt-16">
          Do I have DPDR?
        </h1>
        <p className="mb-4 text-lg text-center">
          Have you felt or possibly asked yourself these things?
        </p>
        <ul className="flex flex-col items-center gap-4 text-lg list-disc">
          <li>
            &quot;I can&rsquo;t recognize myself in the mirror or in
            pictures&quot;.
          </li>
          <li>
            &quot;I feel like I am going insane; I think I might be going
            crazy&quot;.
          </li>
          <li>
            &quot;Time feels distorted; I feel like time is never moving forward
            or is moving too fast&quot;.
          </li>

          <li>
            &quot;I can barely remember anything; it feels like I have
            dementia&quot;.
          </li>

          <li>
            &quot;Everything looks so weird and 2D, like I am in a video
            game&quot;.
          </li>
          <li>
            &quot;I am plagued with random existential thoughts about the
            universe and my existence&quot;.
          </li>
        </ul>
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg mt-4">
          <p className="text-lg">
            If you answered yes to all or most of these, then you might be
            dealing with DPDR. Reminder: Always consult with your doctor or
            therapist for an accurate diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
