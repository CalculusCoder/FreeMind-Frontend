import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Obsessive-Compulsive Disorder (OCD)
        </h1>
        <h2 className="text-2xl font-bold text-center mb-8">
          The most <span className="text-red-400">misunderstood</span> anxiety
          disorder.
        </h2>
        <h3 className="text-3xl font-bold mb-4 mt-16 text-center">
          What is OCD?
        </h3>
        <p className="mb-4 text-lg">
          OCD is a type of anxiety disorder characterized by the presence of
          disturbing intrusive and unwanted thoughts, images, or impulses that
          cause significant anxiety and compulsions. Intrusive thoughts and
          images can sometimes be referred to as obsessions. We will be using
          obsessions and intrusive thoughts interchangeably.
        </p>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Ocd/ocd-paper.png"
            alt="anxiety"
            width={100}
            height={100}
          />
        </div>
        <p className="mb-4 text-lg">
          <span className="text-red-400">Intrusive</span> thoughts are
          distressing thoughts that come to mind without conscious control and
          are almost always inconsistent with a person&rsquo;s values or
          beliefs.
        </p>
        <p className="mb-4 text-lg">
          <span className="text-red-400">Compulsions</span> are repetitive
          behaviors or mental acts that an individual feels compelled to perform
          to reduce the anxiety caused by disturbing intrusive thoughts.
          Compulsions can be physical, mental, or both. More on this later.
        </p>
        <p className="mb-4 text-lg">
          These intrusive thoughts and compulsions can interfere with daily
          activities, cause distress, and impair the persons functioning. That
          was a lot to unpack. Let us first see the main OCD thoughts and
          compulsions.
        </p>

        <h1 className="text-3xl font-bold mb-4 text-center mt-16">
          Main OCD Intrusive Thoughts
        </h1>
        <p className="mb-4 text-lg text-center">
          Some of the main OCD intrusive thoughts include :
        </p>
        <ul className="flex flex-col items-center gap-4 text-lg list-disc">
          <li>Excessive fear of germs, dirt, and other contaminants</li>
          <li>
            Horrific thoughts or images related to harming oneself or others
          </li>
          <li>
            Fear of losing control of oneself or acting on an impulse that can
            lead to harm
          </li>
        </ul>
        <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg mt-4">
          <p className="text-center text-lg">
            These intrusive thoughts are extremely disturbing to OCD sufferers;
            this leads them to do rituals or compulsions to reduce their anxiety
            or find relief from their thoughts.
          </p>
        </div>
        <h1 className="text-3xl font-bold mb-4 mt-16 text-center">
          Main OCD Compulsions
        </h1>
        <p className="mb-4 text-lg text-center">
          Compulsions are a response that sufferers have toward their thoughts.
          Some of the common compulsions they have include :
        </p>
        <ul className="flex flex-col items-center gap-4 text-lg list-disc">
          <li>Hand-washing until your skin becomes dry or raw</li>
          <li>Checking doors repeatedly to make sure they&rsquo;re locked</li>
          <li>Organizing or arranging things orderly and symmetrical</li>
          <li>Counting in certain patterns</li>
        </ul>
        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/images/Home-Ocd/washing.png"
            alt="anxiety"
            width={100}
            height={100}
          />
        </div>
        <p className="text-center text-lg">
          As you have probably noticed by now, these types of OCD thoughts and
          compulsions are the stereotype we have about OCD sufferers. Another
          observation would be that all of these compulsions are physical.
          Compulsions are defined as being physical, mental, or both.
        </p>
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg mt-4">
          <p className="text-center text-lg">
            OCD is not a cute hand-washing or organizing disorder. OCD is a
            serious mental health disorder that causes many sufferers distress
            and life impairment. Although you might have a set stereotype that
            OCD sufferers wash their hands excessively or organize things
            constantly, there is more to it than that. Let us explore OCD with
            mental compulsions called pure obsessional OCD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
