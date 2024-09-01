import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Introduction/AnxietyLevels/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const AnxietyLevels = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          Levels of Severity in Anxiety Disorders - FreeMind Anxiety Recovery
        </title>
        <meta
          name="description"
          content="Levels of Severity in Anxiety Disorders - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Levels of Severity in Anxiety Disorders - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Levels of Severity in Anxiety Disorders - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Introduction/AnxietyLevels"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default AnxietyLevels;
