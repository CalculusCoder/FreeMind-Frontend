import React from "react";
import Image from "next/image";
import styles from "./Themes.module.css";

const Themes = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Themes</h1>
        <p className="mb-4 text-lg text-center">
          OCD themes refer to the specific content of a person&rsquo;s intrusive
          thoughts and compulsions. Let us explore a few.
        </p>
      </div>
      <div className="lg:flex lg:justify-around">
        <div className="flex justify-center">
          <div className="mb-24 h-[500px] lg:mb-0 bg-gradient-to-r from-purple-400 to-white dark:from-blue-950 dark:to-cyan-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Contamination OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: obsessive fears of germs, dirt, viruses, and
              other sources of contamination
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: compulsive cleaning, excessive use of sanitizers, and
              avoidance of certain objects, people, or places.
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/clean.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:mt-0 h-[500px]  bg-gradient-to-l from-cyan-400 to-white dark:from-blue-900 dark:to-teal-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Symmetry OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: fear of unevenness, fear that if items are not
              symmetrical bad events will occur,
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: compulsive arranging, counting, or organizing of
              objects.
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/symmetry.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-24 lg:mt-0">
          <div className="md:mt-0 h-[600px] xl:h-[500px] bg-gradient-to-l from-blue-300 to-white dark:from-fuchsia-900 dark:to-cyan-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8 ">
              Harm OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: fears of causing harm to oneself, loved ones,
              or others, fear of failing to prevent harm,
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: seeking reassurance from others that they have not
              caused harm, avoiding situations, people, or items that trigger
              obsessive thoughts, performing mental acts to reduce anxiety or
              prevent harm.
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/harm.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-around mt-24">
        <div className="flex justify-center">
          <div className="mb-24 h-[600px] xl:h-[500px] lg:mb-0 bg-gradient-to-r from-green-200 to-white dark:from-rose-900 dark:to-cyan-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Relationship OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: fears of not being in love with your partner,
              fear of cheating, or fear of being cheated on by your partner.
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: reassurance from one&apos;s partner or others about
              the relationship, comparing one&apos;s relationship to other
              relationships, analyzing every aspect of the relationship or
              partners behavior
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/wrong.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:mt-0 h-[600px] xl:h-[500px]  bg-gradient-to-l from-pink-300 to-white dark:from-amber-950 dark:to-cyan-900 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mb-5 mt-8">
              Existential OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: fears about the meaning of life, death, or
              one&rsquo;s own existence. Crazy intrusive thoughts regarding the
              universe. (Can lead to DPDR)
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: constant rumination regarding existential questions,
              seeking answers to existential questions, and constant
              reassurance.
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/galaxy.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-24 lg:mt-0">
          <div className="md:mt-0 h-[600px] xl:h-[500px]  bg-gradient-to-l from-indigo-300 to-white dark:from-blue-950 dark:to-gray-700 w-[450px] lg:w-[400px] xl:w-[500px] rounded-full p-6 shadow-[-30px_30px_10px_10px_#00000024]">
            <h1 className="text-xl  font-bold text-center mt-6 mb-5">
              Religious OCD
            </h1>
            <p className="text-xl text-center mb-5 pl-4 pr-4">
              Intrusive Thoughts: obsessions about committing sins, obsessions
              about one&apos;s faith or beliefs, obsessions about being punished
              by a higher power for perceived sins.
            </p>
            <p className="text-xl text-center lg:mt-10">
              Compulsions: repeatedly confessing perceived sins, engaging in
              excessive prayer or religious study, seeking reassurance about
              religious beliefs.
            </p>
            <div className="flex justify-center mt-4 mb-10">
              <Image
                src="/images/Home-Ocd/pray.png"
                alt="anxiety"
                width={70}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-24">
        <div className="border-2 border-red-500 p-6 rounded-lg shadow-lg">
          <p className="text-center text-lg">
            There are more different types of OCD themes. Recovery might be
            different depending on if compulsions are physical or mental. It is
            important to note that OCD themes tend to overlap. Fortunately, the
            theme itself does not matter when it comes to recovery! Sufferers
            can make a make a near recovery or a full recovery regardless of the
            theme!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Themes;
