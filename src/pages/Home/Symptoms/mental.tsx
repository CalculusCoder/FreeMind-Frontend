import Link from "next/link";
import symptomsData from "../../../data/MembersHome/mentalsymptoms.json";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

const MentalSymptoms = () => {
  return (
    <Layout>
      <Head>
        <title>Mental Symptoms of Anxiety - FreeMind Recovery</title>
        <meta
          name="description"
          content="Explore a comprehensive list of mental symptoms associated with anxiety such as brain fog, confusion, and intrusive thoughts. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:title"
          content="Mental Symptoms of Anxiety - FreeMind Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, mental symptoms, brain fog, confusion, intrusive thoughts, anxiety causes, anxiety management, mental health, symptoms list, overcoming anxiety"
        />
        <meta
          property="og:description"
          content="Explore a comprehensive list of mental symptoms associated with anxiety such as brain fog, confusion, and intrusive thoughts. Understand these symptoms, their causes, and ways to manage them."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Symptoms/mental"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Mental Symptoms
          </header>
          <div className="flex flex-col gap-12 items-center">
            {symptomsData.map((symptom) => (
              <Link
                key={symptom.id}
                href={`/Home/Symptoms/Mental/${symptom.id}`}
              >
                <div className="w-80 md:w-[500px] bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
                  {symptom.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer footerClass="bg-[#F1E6FF]" />
    </Layout>
  );
};

export default MentalSymptoms;
