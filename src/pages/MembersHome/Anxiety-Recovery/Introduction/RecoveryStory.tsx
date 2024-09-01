import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/RecoveryStory/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const RecoveryStory = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Recovery Story - FreeMind Anxiety Recovery</title>
        <meta name="description" content="My Full Recovery Story " />
        <meta
          property="og:title"
          content="My Full Recovery Story - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta property="og:description" content="My Full Recovery Story" />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/RecoveryStory"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default RecoveryStory;
