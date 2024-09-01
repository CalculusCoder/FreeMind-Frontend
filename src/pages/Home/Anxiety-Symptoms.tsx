import Layout from "@/components/Home/GlobalComponents/Layout";
import Link from "next/link";
import Footer from "@/components/Home/HomeComponents/Footer";
import Image from "next/image";
import Head from "next/head";

const AnxietySymptoms = () => {
  return (
    <Layout>
      <Head>
        <title>Anxiety Symptoms - FreeMind Recovery</title>
        <meta
          name="description"
          content="Explore and understand different symptoms of anxiety including their causes, potential ways to overcome them, and personal experiences. Uncover mental, physical, and visual symptoms."
        />
        <meta
          property="og:title"
          content="Anxiety Symptoms - FreeMind Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, symptoms, anxiety symptoms, mental health, mental symptoms, physical symptoms, visual symptoms, overcoming anxiety, anxiety causes, personal experiences"
        />
        <meta
          property="og:description"
          content="Explore and understand different symptoms of anxiety including their causes, potential ways to overcome them, and personal experiences. Uncover mental, physical, and visual symptoms."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Anxiety-Symptoms"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mb-32">
        <header className="text-center text-4xl font-bold mt-10 mb-10">
          Anxiety Symptoms
        </header>
        <div className="flex flex-col items-center justify-center space-y-16 mt-16">
          <Link href="/Home/Symptoms/mental">
            <div className=" bg-gradient-to-r from-red-300 to-cyan-300 dark:from-purple-950  dark:to-cyan-900 p-4 w-[350px] md:w-full h-54 text-center rounded-md transition-colors duration-200 text-white font-bold shadow-[-30px_30px_10px_10px_#00000024]">
              <div className="text-xl">Mental Symptoms</div>
              <p className="text-slate-500 mt-3">
                Learn more about mental symptoms of anxiety.
              </p>
              <div className="flex justify-center mt-3 ">
                <Image
                  className="rounded-full"
                  alt="Mental Symptoms"
                  height={100}
                  width={170}
                  src="/images/Home-Symptoms/mental.jpg"
                />
              </div>
            </div>
          </Link>
          <Link href="/Home/Symptoms/physical">
            <div className="bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-950  dark:to-cyan-900 p-4 w-[350px] md:w-full h-54 text-center rounded-md transition-colors duration-200 text-white font-bold shadow-[-30px_30px_10px_10px_#00000024]">
              <div className="text-xl">Physical Symptoms</div>
              <p className="text-slate-500 mt-3">
                Discover the physical manifestations of anxiety.
              </p>
              <div className="flex justify-center mt-3 ">
                <Image
                  className="rounded-full"
                  alt="Physical Symptoms"
                  height={100}
                  width={170}
                  src="/images/Home-Symptoms/physical.jpg"
                />
              </div>
            </div>
          </Link>
          <Link href="/Home/Symptoms/visual">
            <div className="bg-gradient-to-r from-cyan-400 to-green-300 dark:from-purple-950  dark:to-cyan-900 w-[350px] md:w-full p-4 h-54 text-center rounded-md transition-colors duration-200 text-white font-bold shadow-[-30px_30px_10px_10px_#00000024]">
              <div className="text-xl">Visual Symptoms</div>
              <p className="text-slate-500 mt-3">
                Understand how anxiety can affect your vision.
              </p>
              <div className="flex justify-center mt-3 ">
                <Image
                  className="rounded-full"
                  alt="Visual Symptoms"
                  height={100}
                  width={170}
                  src="/images/Home-Symptoms/vision.jpg"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer footerClass="bg-[#F1E6FF]" />
    </Layout>
  );
};

export default AnxietySymptoms;
