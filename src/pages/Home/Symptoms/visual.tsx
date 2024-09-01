import Link from "next/link";
import symptomsData from "../../../data/MembersHome/visualsymptoms.json";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Head from "next/head";

const VisualSymptoms = () => {
  return (
    <Layout>
      <Head>
        <title>Visual Symptoms of Anxiety - FreeMind Recovery</title>
        <meta
          name="description"
          content="Explore a comprehensive list of visual symptoms associated with anxiety, such as eye floaters, tunnel vision, and visual snow. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:title"
          content="Visual Symptoms of Anxiety - FreeMind Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, visual symptoms, visual distortions, tunnel vision, eye floaters, visual snow light sensitivity, anxiety causes, anxiety management, mental health, symptoms list, overcoming anxiety"
        />
        <meta
          property="og:description"
          content="Explore a comprehensive list of visual symptoms associated with anxiety, such as eye floaters, tunnel vision, and visual snow. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Symptoms/visual"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Visual Symptoms
          </header>
          <div className="flex flex-col gap-12 items-center">
            {symptomsData.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/Home/Symptoms/Visual/${symptom.id}`}
              >
                <div className="w-80 md:w-[500px] bg-gradient-to-r from-teal-300 via-cyan-400 to-violet-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
                  {symptom.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisualSymptoms;
