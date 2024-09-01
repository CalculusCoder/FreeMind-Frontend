import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/Anxiety-Recovery/Recovery2/Trauma/Hero";
import { withAuthProtection } from "../../../../../withAuthProtection";
import Head from "next/head";

const Trauma = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>
          Trauma, Environmental Factors, and Toxic Family. - FreeMind Anxiety
          Recovery
        </title>
        <meta
          name="description"
          content="Trauma, Environmental Factors, and Toxic Family. - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Trauma, Environmental Factors, and Toxic Family. - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Trauma, Environmental Factors, and Toxic Family. - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Recovery2/Trauma"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Trauma;
