import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Recovery2/Worry/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const Worry = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          Worry: Putting an end to Anxious Behavior - FreeMind Anxiety Recovery
        </title>
        <meta
          name="description"
          content="Worry: Putting an end to Anxious Behavior - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Worry: Putting an end to Anxious Behavior - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Worry: Putting an end to Anxious Behavior - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Recovery2/Worry"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Worry;
