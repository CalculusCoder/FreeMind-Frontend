import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import React from "react";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/HowYouRecover/Hero";
import Head from "next/head";
import { withAuthProtection } from "../../../../../withAuthProtection";

const HowYouRecover = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>The Three Keys To Recovery - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="The Three Keys To Recovery - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="The Three Keys To Recovery - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="The Three Keys To Recovery - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/HowYouRecover"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default HowYouRecover;
