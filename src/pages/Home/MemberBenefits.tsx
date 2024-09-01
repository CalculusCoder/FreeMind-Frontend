import React from "react";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Hero from "@/components/Home/MemberBenifits/Hero";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

const MemberBenefits = () => {
  return (
    <Layout>
      <Head>
        <title>Member Benefits - FreeMind</title>
        <meta
          name="description"
          content="Explore the benefits of becoming a FreeMind member. Register for free to gain access to personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta property="og:title" content="Member Benefits - FreeMind" />
        <meta
          name="keywords"
          content="member benefits, recovery plans, exclusive content, community, FreeMind, support"
        />
        <meta
          property="og:description"
          content="Explore the benefits of becoming a FreeMind member. Register for free to gain access to personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/MemberBenefits"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="bg-[#F1E6FF] dark:bg-indigo-950">
        <Hero />
        <Footer footerClass="bg-white bg-opacity-50" />
      </div>
    </Layout>
  );
};

export default MemberBenefits;
