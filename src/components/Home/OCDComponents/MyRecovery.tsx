import React from "react";
import Image from "next/image";

const MyRecovery = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          My OCD Story
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
          In June of 2022, I had a massive panic attack that turned my life
          upside down. The cause of this panic attack was an intrusive thought
          over the fear of going crazy or developing schizophrenia. When I woke
          up the next day, I felt completely out of sync with myself and
          everything around me. I developed chronic depersonalization
          derealization disorder as a cause of the panic attack. In the first
          months of recovery from severe anxiety and DPDR, I started to
          experience these crazy intrusive thoughts. These thoughts revolved
          around fears of developing schizophrenia, psychosis, or having intense
          hallucinations. They&apos;d come once or twice a week, stick around
          for a few days to a week, and then fade away. Unfortunately, four
          months into my recovery, OCD hit me with full force. OCD symptoms like
          mind pops, constant brain chatter, and racing thoughts started to kick
          in; this led me to believe that I was developing schizophrenia. I
          obsessed over this fear 24/7, from the day I woke up to even in my
          dreams; This, in turn, caused me to develop a subtype of OCD, known as
          Pure O OCD, with a theme of schizophrenia (Schiz OCD). Over the
          following months, I had to deal with chronic DPDR, recurring panic
          attacks, and OCD. I was in a constant battle every single day, stuck
          at rock bottom with no sign of light anywhere near me. But you know
          what? I&apos;m still here. I&apos;m still standing. Although I am
          still in recovery for OCD, I have recovered by about 70%-80%! Some
          days I feel fully recovered, and the most incredible part is that
          anyone else can achieve this level of recovery too! At my lowest, I
          could not afford a $100-$500 anxiety, DPDR, or OCD course. FreeMind is
          the program I desperately needed back then - one that could provide
          guidance, understanding, and financial accessibility! Register for
          FREE today to see my full anxiety and OCD recovery story. I&apos;ll
          show you what I did right and what I did wrong.
        </p>
      </div>
    </div>
  );
};

export default MyRecovery;
