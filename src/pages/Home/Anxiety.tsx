import React from "react";
import Head from "next/head";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Hero from "@/components/Home/AnxietyComponent/Hero";
import AnxietyDisorders from "@/components/Home/AnxietyComponent/AnxietyDisorders";
import Treatment from "@/components/Home/AnxietyComponent/Treatment";
import References from "@/components/Home/AnxietyComponent/References";
import MyRecovery from "@/components/Home/AnxietyComponent/MyRecovery";
import WhyUs from "@/components/Home/GlobalComponents/WhyUs";
import Footer from "@/components/Home/HomeComponents/Footer";

const Anxiety = () => {
  return (
    <Layout page="anxiety">
      <Head>
        <title>Anxiety Recovery - FreeMind</title>
        <meta
          name="description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about various anxiety disorders, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta property="og:title" content="Anxiety Recovery - FreeMind" />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about various anxiety disorders, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Anxiety"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="bg-[#e6e6ff] dark:bg-indigo-950">
        <Hero />
        <AnxietyDisorders />
        <MyRecovery />
        <Treatment />
        <WhyUs />
        {/* <References /> */}
        <Footer footerClass="bg-white bg-opacity-50" />
      </div>
    </Layout>
  );
};

export default Anxiety;
