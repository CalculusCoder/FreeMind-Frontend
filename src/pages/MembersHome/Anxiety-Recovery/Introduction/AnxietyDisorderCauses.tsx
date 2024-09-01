import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/Anxiety-Disorder-Causes/Hero";
import PersonalityTraits from "@/components/MembersHome/Anxiety-Recovery/Introduction/Anxiety-Disorder-Causes/PersonalityTraits";
import Drugs from "@/components/MembersHome/Anxiety-Recovery/Introduction/Anxiety-Disorder-Causes/Drugs";
import OurBelief from "@/components/MembersHome/Anxiety-Recovery/Introduction/Anxiety-Disorder-Causes/OurBelief";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const AnxietyDisorderCauses = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          What Causes Anxiety Disorders? - FreeMind Anxiety Recovery
        </title>
        <meta
          name="description"
          content="What Causes Anxiety Disorders? - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="What Causes Anxiety Disorders? - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="What Causes Anxiety Disorders? - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/AnxietyDisorderCauses"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
      <PersonalityTraits />
      <Drugs />
      <OurBelief />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default AnxietyDisorderCauses;
