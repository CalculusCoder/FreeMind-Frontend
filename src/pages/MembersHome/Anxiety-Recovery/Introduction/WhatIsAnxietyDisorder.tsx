import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/What-is-Anxiety-Disorder/Hero";
import AnxietyDisorders from "@/components/MembersHome/Anxiety-Recovery/Introduction/What-is-Anxiety-Disorder/AnxietyDisorders";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const WhatIsAnxietyDisorder = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          What is Anxiety and Anxiety Disorder? - FreeMind Anxiety Recovery
        </title>
        <meta
          name="description"
          content="What is Anxiety and Anxiety Disorder? - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="What is Anxiety and Anxiety Disorder? - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="What is Anxiety and Anxiety Disorder? - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/WhatIsAnxietyDisorder"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
      <AnxietyDisorders />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default WhatIsAnxietyDisorder;
