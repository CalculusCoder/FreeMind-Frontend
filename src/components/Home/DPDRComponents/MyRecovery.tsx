import React from "react";
import Image from "next/image";

const MyRecovery = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          My DPDR Story
        </header>
      </div>
      <div className="md:flex md:justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src="/images/jared2.png"
              alt="jared-icon"
              height={100}
              width={250}
            />
          </div>
          <h1>@Jared</h1>
        </div>
        <p className="text-lg mt-10 md:max-w-lg lg:max-w-2xl">
          Hey everyone, I&apos;m Jared. I&apos;m a software engineer who loves
          building websites and software, exploring new places, hiking, and
          playing many sports. I&apos;m constantly captivated by the world of
          technology, engineering, and the endless cycle of learning. But
          I&apos;ve got to be honest; I didn&apos;t realize how much I took all
          these things for granted until they were suddenly taken away from me.
          In June of 2022, I had a massive and intense panic attack that would
          completely change my world. I had a random intrusive thought that led
          me to have a panic attack. The next day I woke up completely
          disconnected from myself and my surroundings. I developed chronic
          depersonalization derealization disorder due to one panic attack. I
          had all the symptoms I listed on this page and many more. I was unable
          to recognize myself in pictures and in the mirror. I had severe brain
          fog and confusion. I felt confused about my identity, myself, and life
          24/7. I also felt disoriented 99% of the time. I was unable to do
          simple math operations and write simple programs. It was like I
          entered a mental vegetative state overnight. I was afraid of the sky,
          people, my own shadow, and my thoughts. I lost everything I ever owned
          due to one panic attack. I felt trapped in my brain, watching myself
          from a distance, like in the movie &quot;Get Out.&quot; It felt like I
          was stuck in a lucid dream and had not woken up yet. It seemed like I
          was in a video game or movie; everything looked flat and 2D-ish. I
          could not look at family members because they looked super creepy. I
          hid all the mirrors in my apartment because it scared me to death to
          look at myself(I looked alien-like and foreign). My wife looked so
          foreign, as if I had never seen her before in my life. I had a crazy
          amount of existential thoughts, they felt so real and scary back then,
          but ironically they seem so funny now. On top of DPDR, I began
          struggling with panic attacks, OCD, and more. (DPDR and Existential
          OCD are different things) I began to think I was going to be stuck in
          this paralyzed mental state my whole life. I continued to fight this
          disorder until I finally discovered what I was struggling with. I
          could not afford a $300 DPDR course, so I decided to venture by myself
          until I found what worked in DPDR recovery. Fast forward to today, I
          have made an almost full recovery! I am back to learning, back at
          school, and building this huge website from scratch for all of our
          members! At my lowest, I could not afford a $100-$500 anxiety, DPDR,
          or OCD course. FreeMind is the program I desperately needed back then
          - one that could provide guidance, understanding, and financial
          accessibility! Register for FREE today to see my full DPDR, anxiety,
          and OCD recovery story. I&apos;ll show you what I did right and what I
          did wrong.
        </p>
      </div>
      {/* <div className="max-w-4xl mx-auto border-2 border-purple-500 p-6 rounded-lg shadow-lg mt-10">
        <p className="text-center text-lg">
          FreeMind Recovery Members have full access to all DPDR symptoms, DPDR
          recovery methods, relaxation techniques, and much more.
        </p>
      </div> */}
    </div>
  );
};

export default MyRecovery;
