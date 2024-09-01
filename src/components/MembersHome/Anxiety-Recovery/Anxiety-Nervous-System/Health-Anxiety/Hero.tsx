import BackButton from "../../BackButton";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center mb-8">
          Health Anxiety
        </header>
        <p className="text-lg">
          Health anxiety, also known as hypochondria, is a type of anxiety
          disorder where a person is excessively worried about having a serious
          illness, despite having no or only mild symptoms. Hypochondriacs worry
          excessively about their health, constantly checking for symptoms on
          Google and physically on their body. They avoid activities over their
          fears and spend hundreds of hours at the doctor&apos;s office. Many
          people believe that health anxiety and OCD are the same thing. I am
          not here to tell you if that is true, but I can tell you that recovery
          for all anxiety disorders is very similar. I struggled with a type of
          OCD that is similar to health anxiety. I struggled with Schiz OCD, a
          highly intense fear of developing schizophrenia, psychosis, or just
          going crazy in general. If you have not read my schiz ocd recovery
          story, please do, as many health anxiety sufferers will be able to
          relate.
        </p>
        <p className="text-lg mt-8">
          With health anxiety and Schiz OCD, your main enemy is your own
          thoughts. One of the hardest things about health anxiety is the
          reassurance part. For us to recover, we must accept uncertainty and
          give up the urge to look for reassurance. We seek reassurance because
          the intrusive thoughts we get seem so real. I remember booking
          appointments with doctors and therapists because my fears felt so
          real. I was 100% convinced I was developing schizophrenia, psychosis,
          or going crazy. I never knew how bad health anxiety and OCD could get,
          but at my lowest, I was clearly able to see it. In the recovery
          section, I will be going over tips and methods to overcome these
          intrusive thoughts.
        </p>
        <div className="border-2 border-cyan-300 p-6 rounded-lg shadow-lg mt-8">
          <p className=" text-lg ">
            To overcome health anxiety, we must eliminate all fears and become
            best friends with our thoughts.
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-7 md:justify-center md:gap-24">
        <BackButton href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/PanicAttacks" />
      </div>
    </div>
  );
};

export default Hero;
