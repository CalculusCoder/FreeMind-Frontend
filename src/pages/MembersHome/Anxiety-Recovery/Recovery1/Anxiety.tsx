import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Recovery1/Anxiety/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const Anxiety = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Eliminate Anxiety - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Eliminate Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Eliminate Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Eliminate Anxiety - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Recovery1/Anxiety"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Anxiety;
