import Link from "next/link";
import symptomsData from "../../../data/MembersHome/physicasymptoms.json";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Head from "next/head";

const PhysicalSymptoms = () => {
  return (
    <Layout>
      <Head>
        <title>Physical Symptoms of Anxiety - FreeMind Recovery</title>
        <meta
          name="description"
          content="Explore a comprehensive list of physical symptoms associated with anxiety such as physical numbness, weakness, and shortness of breath. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:title"
          content="Physical Symptoms of Anxiety - FreeMind Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, physical symptoms, shortness of breath, weakness, numbness, anxiety causes, anxiety management, mental health, symptoms list, overcoming anxiety"
        />
        <meta
          property="og:description"
          content="Explore a comprehensive list of physical symptoms associated with anxiety such as physical numbness, weakness, and shortness of breath. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Symptoms/physical"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Physical Symptoms
          </header>
          <div className="flex flex-col gap-12 items-center">
            {symptomsData.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/Home/Symptoms/Physical/${symptom.id}`}
              >
                <div className="w-80 md:w-[500px] bg-gradient-to-r from-cyan-300 via-violet-300 to-blue-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
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

export default PhysicalSymptoms;
