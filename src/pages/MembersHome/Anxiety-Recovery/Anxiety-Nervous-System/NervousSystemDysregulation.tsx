import Hero from "@/components/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/Nervous-System-Dysregulation/Hero";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const NervousSystemDysregulation = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          Nervous System Dysregulation (Chronic Stress Response) - FreeMind
          Anxiety Recovery
        </title>
        <meta
          name="description"
          content="Nervous System Dysregulation (Chronic Stress Response) - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Nervous System Dysregulation (Chronic Stress Response) - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Nervous System Dysregulation (Chronic Stress Response) - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/NervousSystemDysregulation"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default NervousSystemDysregulation;
