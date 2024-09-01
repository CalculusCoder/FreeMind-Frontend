import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/Health-Anxiety/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const HealthAnxiety = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Health Anxiety - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Health Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Health Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Health Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/HealthAnxiety"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default HealthAnxiety;
