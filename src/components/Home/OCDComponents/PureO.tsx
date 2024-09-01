import React from "react";
import Image from "next/image";

const PureO = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Pure Obsessional OCD (Pure-O OCD)
        </h1>
        <p className="mb-4 text-lg">
          Pure-O OCD is a subtype of OCD characterized by mental compulsions
          without the more visible physical compulsions often associated with
          OCD. The term pure refers to the absence of outward compulsive
          behaviors, such as hand-washing or checking, that are commonly
          associated with OCD.
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Ocd/stress.png"
            alt="anxiety"
            width={100}
            height={100}
          />
        </div>
        <p className="mb-4 text-lg">
          In Pure-O OCD, individuals experience intrusive and distressing
          thoughts or mental images, which are often contrary to their values,
          beliefs, and desires. These thoughts can be related to various topics
          or themes (More on themes later). Let us explore some Pure-O OCD
          intrusive thoughts and compulsions.
        </p>

        <h1 className="text-3xl font-bold mb-4 mt-16 text-center">
          Pure-O OCD Intrusive Thoughts
        </h1>
        <p className="mb-4 text-lg text-center">
          Some of the common Pure-O OCD intrusive thoughts include:
        </p>
        <ul className="flex flex-col items-center gap-4 text-lg list-disc">
          <li>
            Fear of harming oneself or others, such as thoughts of intentionally
            hurting a loved one
          </li>
          <li>
            Fear of committing a sin or displeasing God, such as thoughts of
            blasphemy, sacrilege, or doubting one&rsquo;s faith.
          </li>
          <li>Unwanted or taboo sexual thoughts</li>
        </ul>
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg mt-4">
          <p className="text-center text-lg">
            There are many more different types of OCD and Pure-O intrusive
            thoughts. Unfortunately, we won&apos;t be going too in-depth with
            OCD thoughts due to their nature of them. The OCD section in the
            member&apos;s home will contain more themes and information about
            OCD (OCD section is still in progress).
          </p>
        </div>

        <h1 className="text-3xl font-bold mb-4 mt-16 text-center">
          Pure-O OCD Compulsions
        </h1>
        <p className="mb-4 text-lg text-center">
          Some Pure-O OCD compulsions include:
        </p>
        <ul className="flex flex-col items-center gap-4 text-lg list-disc">
          <li>
            Mental Checking: Constantly checking for reassurance or evidence to
            disprove an obsession or intrusive thought.
          </li>
          <li>
            Mental Reassurance-Seeking: Seeking reassurance from others or
            researching online to relieve anxiety or uncertainty about
            obsessions.
          </li>
          <li>
            Mental Canceling: Trying to undo or erase intrusive thoughts with
            opposite thoughts or images.
          </li>
          <li>
            Rumination: Obsessive rumination regarding the content of the
            intrusive thought and the fear of it returning.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PureO;
