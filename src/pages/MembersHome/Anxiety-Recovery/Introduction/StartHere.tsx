import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/Start-Here/Hero";
import Closing from "@/components/MembersHome/Anxiety-Recovery/Introduction/Start-Here/Closing";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const StartHere = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Start Here - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Welcome to FreeMind! As a valued member of our recovery support community, it is our priority to help you make the most of the information and resources available on our website. "
        />
        <meta
          property="og:title"
          content="Start Here - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Welcome to FreeMind! As a valued member of our recovery support community, it is our priority to help you make the most of the information and resources available on our website. "
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/StartHere"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
      <Closing />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default StartHere;
