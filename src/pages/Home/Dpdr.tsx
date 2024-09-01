import Head from "next/head";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Hero from "@/components/Home/DPDRComponents/Hero";
import Symptoms from "@/components/Home/DPDRComponents/Symptoms";
import Worry from "@/components/Home/DPDRComponents/Worry";
import MyRecovery from "@/components/Home/DPDRComponents/MyRecovery";
import Treatment from "@/components/Home/DPDRComponents/Treatment";
import WhyUs from "@/components/Home/GlobalComponents/WhyUs";
import Footer from "@/components/Home/HomeComponents/Footer";

const Dpdr = () => {
  return (
    <Layout>
      <Head>
        <title>
          Depersonalization Derealization Disorder(DPDR) Recovery - FreeMind
        </title>
        <meta
          name="description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about Depersonalization Derealization Disorder(DPDR), explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta property="og:title" content="DPDR Recovery - FreeMind" />
        <meta
          property="og:description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about Depersonalization Derealization Disorder(DPDR), explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Dpdr"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="bg-[#e6e6ff] dark:bg-indigo-950">
        <Hero />
        <Symptoms />
        <Worry />
        <MyRecovery />
        <Treatment />
        <WhyUs />
        <Footer footerClass="bg-white bg-opacity-50" />
      </div>
    </Layout>
  );
};

export default Dpdr;
