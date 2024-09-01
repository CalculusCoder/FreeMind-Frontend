import React, { useRef } from "react";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Hero from "@/components/Home/HomeComponents/Hero";
import Services from "@/components/Home/HomeComponents/Services";
import About from "@/components/Home/HomeComponents/About";
import VideoOne from "@/components/Home/HomeComponents/VideoOne";
import RecoveryBenefits from "@/components/Home/HomeComponents/RecoveryBenefits";
import style from "./Home/Home.module.css";
import Contact from "@/components/Home/HomeComponents/Contact";
import Footer from "@/components/Home/HomeComponents/Footer";
import VideoTwo from "@/components/Home/HomeComponents/VideoTwo";
import VideoThree from "@/components/Home/HomeComponents/VideoThree";
import Testimonials from "@/components/Home/HomeComponents/Testimonials";
import Head from "next/head";

const Index = () => {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current !== null) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Anxiety, DPDR, OCD Recovery - FreeMind</title>
        <meta
          name="description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about various anxiety disorders, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta
          name="keywords"
          content="anxiety, anxiety symptoms, mental health, recovery, support, DPDR, OCD"
        />
        <meta
          property="og:title"
          content="Anxiety, DPDR, OCD Recovery - FreeMind"
        />
        <meta
          property="og:description"
          content="FreeMind is a nonprofit organization that provides comprehensive information and support for anxiety recovery for free. Learn about various anxiety disorders, explore effective treatment strategies, and find guidance on the journey towards recovery."
        />
        <meta property="og:url" content="https://freemindrecovery.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div
        className={`${style.bg} dark:bg-gradient-to-b dark:from-blue-950 dark:to-purple-950`}
      >
        <Layout page="home">
          <Hero ref={nextSectionRef} onButtonClick={scrollToNextSection} />
        </Layout>
      </div>

      <Services />
      <RecoveryBenefits />
      <div className="dark:bg-indigo-950">
        <VideoThree />
        <VideoOne />
        <VideoTwo />
        <About />
        <Testimonials />
        <Contact />
        <Footer footerClass="bg-[#F1E6FF]" />
      </div>
    </div>
  );
};

export default Index;
