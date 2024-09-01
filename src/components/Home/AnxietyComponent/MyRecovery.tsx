import React from "react";
import Image from "next/image";

const MyRecovery = () => {
  return (
    <div className="p-8 ">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          My Anxiety Disorder Story
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
          Hey everyone! My name is Jared. I am a software engineer who loves
          building websites and software, traveling, hiking, and playing all
          types of sports. For most of my life, I was ungrateful for all of
          these things and took them for granted. Anxiety eventually stripped
          away everything from me. In June of 2022, I had a massive and intense
          panic attack that would completely change my world. I had a random
          intrusive thought that led to a severe panic attack. The next day I
          woke up completely disconnected from myself and my surroundings. I
          developed chronic depersonalization derealization disorder, panic
          disorder, and other anxiety disorders caused by one panic attack. It
          was pretty sad seeing how I went from living my best life to being
          unable to function overnight. I was unable to eat, sleep, or even
          leave my bed. I was in a paralyzed mental state; nothing like that
          happened to me before, so my fears continued to grow. I grew fearful
          of everything. I was too afraid to drive, be by myself, be in large
          crowds, look at the sky, and even be too afraid to leave the house at
          some point. I had hundreds of symptoms plaguing me (nocturnal panic
          attacks, visual snow, shortness of breath, etc.). I had new anxiety
          symptoms show up every week for over 7+ months. I lost everything I
          owned, including my job, apartment, and much more. Fear became my new
          normal, and it felt like I never had another normal thought in my life
          again. OCD plagued me daily, DPDR took away all joy from life, and
          anxiety made me fearful of doing anything. These three disorders would
          take control of my life for the next 8+ months until I found something
          that worked. I slowly began crawling out of the depths of anxiety. I
          started training my brain to be normal again; I began to overcome all
          irrational and rational fears in my life. Fast forward to today: I
          conquered planes, long drives, crowded areas, leaving the house, and
          more. I am still here standing, almost nearly recovered, and the best
          part is that anyone can recover or make a near recovery like me. At my
          lowest, I could not afford a $100-$500 anxiety, DPDR, or OCD course.
          FreeMind is the program I desperately needed back then - one that
          could provide guidance, understanding, and financial accessibility!
          Register for FREE today to see my full anxiety recovery story.
          I&apos;ll show you what I did right, what I did wrong, and how you can
          recover fully.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border-2 border-purple-500 p-6 rounded-lg shadow-lg mt-10">
        <p className="text-center text-lg">
          FreeMind Recovery Members have full access to all Anxiety symptoms,
          Anxiety recovery methods, relaxation techniques, and much more.
        </p>
      </div>
    </div>
  );
};

export default MyRecovery;
