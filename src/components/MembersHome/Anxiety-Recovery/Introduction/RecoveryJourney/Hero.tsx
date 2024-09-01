import Image from "next/image";
import BackButton from "../../BackButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          The Recovery Process
        </header>
        <p className="text-lg">
          The recovery process is one of the hardest things to come to peace
          with. Most of us are impatient at heart. We want things today and
          right now. We do not want to wait till tomorrow, let alone months or
          years. When dealing with anxiety disorder, patience becomes 1000 times
          harder to learn. We are suffering so badly, and we want to be
          recovered today or tomorrow; we do not want to wait months or years
          for a recovery. Here is the good and bad news. The bad news is that
          you will be forced to learn patience, which will be extremely
          difficult. The good news is that you will learn patience. And as the
          saying goes, &quot;patience is a virtue.&quot; Remember key #3 in
          recovery? Patience. This section will help you understand the anxiety
          recovery process and what to expect.
        </p>

        <div className="mt-16">
          <header className="text-center text-3xl">
            Start treating anxiety disorder recovery like physical recoverys
          </header>
          <p className="mt-8 text-lg">
            Mental health recovery is just like physical health recovery. We
            just don&apos;t see it. When a football or basketball player
            experiences a horrible leg or foot injury, what do they do? Do they
            get back up the following day for a 3-mile run? Do they show up to
            practice the following week expecting to be in 100% shape? No, they
            treat their injury like an injury. They go to therapy; they work out
            their muscles slowly and slowly progress with bigger movements over
            time. They eat healthily and make sure they are doing everything
            they can to make a full recovery. They try not to strain their leg
            or foot to avoid a relapse or making themselves worst. The recovery
            journey is full and ups and downs as well. I have had similar
            physical injuries and have recovered by treating myself well and
            ensuring my leg was getting the rest it needed. Here is what I am
            getting to. Why do we treat physical injuries differently than
            mental health injuries? Why are we still staying up till 2 AM? Why
            are we still getting 5 hours of sleep a night? Why are we working so
            hard and stressing so hard over a job that CAN require less effort?
            Why are we consuming things that we should not be consuming? Why are
            we constantly worrying over things that cannot be controlled and
            stressing ourselves for no reason? Why do we still continue to live
            a very fast-paced life? All of these things can prevent a full
            recovery and lead you to develop a more severe level of anxiety.
            That is what happened to me. I did not put an end to my worries and
            stress. Instead, I continued to stay up very late, barely getting
            sleep, and continued stressing over my future. A combination of
            those factors and the severe trauma I was experiencing was what
            tipped me over. The point is this; we need to start treating our
            mental and physical health with respect!
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl">Recovery takes TIME</header>
          <p className="mt-8 text-lg">
            You are probably sick of hearing it, but here we go. Recovery takes
            time, a lot of time. You need to stop giving yourself a timeline.
            You will recover when your body is ready to heal. Remember, your
            nervous system is most likely dysregulated. It is chronically
            stressed and waiting to return to normal stress levels. You can be
            doing everything right, but your nervous system won&apos;t recover
            overnight. You need to treat your nervous system well and continue
            to give it a lot of time to recover. Recovery is different for
            everybody.
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl">
            How long will it take me to recover?
          </header>
          <p className="mt-8 text-lg">
            Like I mentioned before, recovery is different for everybody. It
            might take 4 months for one person and 9 months for another person
            to recover. Please do not compare yourself to other people. Your
            nervous system and body will recover over time and slowly. Remember,
            patience is a virtue. The time I am giving you is just an average of
            what I see from many sufferers. Do not apply it to yourself since
            recovery is different for everybody.
          </p>
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <p className="text-center text-lg">
            Recovery on average can take anywhere from 6 months to 3 years. This
            number can be slightly lower or slightly higher for you depending on
            what level of anxiety you are dealing with.
          </p>
        </div>
        <div className="mt-16">
          <header className="text-center text-3xl">
            What does Recovery look like?
          </header>
          <p className="mt-8 text-lg">
            The recovery journey is full of ups, downs, bumps, roadblocks,
            obstacles, slides, hills, and much more. There will be days where
            you might feel 100% recovered, and then 1 hour later, you feel all
            the symptoms overcome you. There were so many times when I thought I
            was fully recovered, just to feel a horrible rush of DPDR, OCD, or
            anxiety hit me the following week. You will have setbacks and a lot
            of them. In life, it&apos;s normal to have setbacks. To succeed, you
            must first fail and learn from your failures and setbacks. If you do
            have a setback, see it as a step closer to recovery! Also, it&apos;s
            good to see a setback as a chance to learn from your mistakes or to
            practice what you will learn. This will fortify your mind and make
            you stronger for the next obstacles in your recovery journey. Below
            is a chart of how anxiety disorder and nervous system dysregulation
            recovery will look like.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-24">
          <Image
            className="rounded-2xl border-solid border-4 border-cyan-300"
            alt="/"
            width={650}
            height={50}
            src="/images/Members-Global/anxiety1-graph.png"
          />
          <Image
            className="rounded-2xl border-solid border-4 border-cyan-300"
            alt="/"
            width={650}
            height={50}
            src="/images/Members-Global/nervous1-graph.png"
          />
        </div>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-10">
          <p className="text-center text-lg">
            Recovery is a journey. It can take months or years for someone to
            make a full recovery. Reminder: You will not be stuck in your lowest
            days forever. In recovery, although the good days only last some
            time, so would the bad days. Once the good days outweigh the bad,
            you will enter the last stage of recovery.
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Introduction/AnxietyLevels" />
      </div>
    </div>
  );
};

export default Hero;
