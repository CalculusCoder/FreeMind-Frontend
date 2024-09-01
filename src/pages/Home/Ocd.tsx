import React from "react";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Hero from "@/components/Home/OCDComponents/Hero";
import PureO from "@/components/Home/OCDComponents/PureO";
import Themes from "@/components/Home/OCDComponents/Themes";
import MyRecovery from "@/components/Home/OCDComponents/MyRecovery";
import Treatment from "@/components/Home/OCDComponents/Treatment";
import WhyUs from "@/components/Home/GlobalComponents/WhyUs";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

const Ocd = () => {
  return (
    <Layout>
      <Head>
        <title>OCD Recovery - FreeMind</title>
        <meta
          name="description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about OCD, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta
          name="keywords"
          content="anxiety, anxiety symptoms, mental health, recovery, support, DPDR, OCD"
        />
        <meta property="og:title" content="OCD Recovery - FreeMind" />
        <meta
          property="og:description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about OCD, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Ocd"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="bg-[#F1E6FF] dark:bg-indigo-950 ">
        <Hero />
        <PureO />
        <Themes />
        <MyRecovery />
        <Treatment />
        <WhyUs />
        <Footer footerClass="bg-white bg-opacity-50" />
      </div>
    </Layout>
  );
};

export default Ocd;
