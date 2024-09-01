import React from "react";
import Link from "next/link";
import NextButton from "../../NextButton";

const Closing = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Before We Dive In
        </header>
        <p className="mb-4 text-lg">
          Before we dive in, it is crucial to undergo a thorough medical
          evaluation to exclude any potential underlying health conditions. At
          FreeMind, we aim to support you in completely recovering from anxiety,
          OCD, or DPDR. However, it is imperative that any other significant
          physical or mental health issues are addressed before we proceed with
          our recovery program.
        </p>
        <p className="mb-4 text-lg">
          Once you have received an accurate diagnosis and have ruled out any
          underlying health conditions, you can proceed with our recovery
          program. Here at FreeMind, we recommend getting several opinions from
          different therapists or doctors. No one is perfect, and misdiagnosis
          can occur. If you also have doubts that you might not be dealing with
          anxiety, it is important to discuss this with your doctor to get an
          accurate diagnosis.
        </p>
        <p className="mb-4 text-lg">
          With all that out of the way, we can now begin the FreeMind anxiety
          recovery program. Let us see the three key elements that are vital to
          achieving a complete recovery from anxiety.
        </p>
        <NextButton
          href={`/MembersHome/Anxiety-Recovery/Introduction/HowYouRecover`}
        />
      </div>
    </div>
  );
};

export default Closing;
