import React from "react";

const Hero = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-4xl font-bold text-center">
          What is Anxiety and Anxiety Disorder?
        </header>
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4 mt-16 text-center">
            What is Anxiety?
          </h3>
          <p className="mb-4 text-lg">
            Anxiety is an emotion characterized by feelings of tension, worried
            thoughts, and physical changes like increased blood pressure.
          </p>
          <p className="mb-4 text-lg">
            Anxiety is a common human emotion characterized by feelings of fear,
            worry, and apprehension.
          </p>
          <div className="border-2 border-purple-500 p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">
              We hear the term thrown around all the time. &quot;I am feeling so
              anxious.&quot; &quot;Being around her gives me anxiety.&quot;
              &quot;Having to take two exams in one day raises my anxiety.&quot;
              You see, mild anxiety is a common and normal human emotion many
              people experience in response to stressors or challenging
              situations. It is a natural and adaptive response that can help
              people cope with stress and avoid danger. Having mild anxiety is
              usually never a cause for concern; it&apos;s the body&apos;s way
              of coping with danger. If anxiety becomes excessive, persistent,
              or interferes with daily functioning, it may be indicative of an
              anxiety disorder. Let&apos;s explore what anxiety disorders are
              and the key differences between them and mild normal anxiety.
            </p>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-4 text-center">
            What are Anxiety Disorders?
          </h3>
          <p className="mb-4 text-lg">
            Anxiety disorder is a broad term to describe a more specific issue.
            Anxiety disorders are a group of mental health conditions
            characterized by excessive and persistent feelings of fear, worry,
            or dread that can interfere with job performance, school work, daily
            activities, and relationships. For most people with anxiety
            disorders, the anxiety does not go away and can worsen over time.
            There are several types of anxiety disorders, and people can suffer
            from just one or many different anxiety disorders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
