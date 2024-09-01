import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/Panic-Attacks/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const PanicAttacks = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Panic Attacks - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Panic Attacks - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Panic Attacks - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Panic Attacks - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/PanicAttacks"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default PanicAttacks;
