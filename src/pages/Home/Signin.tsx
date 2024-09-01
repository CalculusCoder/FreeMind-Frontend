import Form from "@/components/Home/SignInComponents/Form";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

const Signin = () => {
  return (
    <Layout>
      <Head>
        <title>Sign In - FreeMind</title>
        <meta
          name="description"
          content="Sign in to your FreeMind account to access personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta property="og:title" content="Sign In - FreeMind" />
        <meta
          name="keywords"
          content="sign in, FreeMind, recovery plans, exclusive content, community"
        />
        <meta
          property="og:description"
          content="Sign in to your FreeMind account to access personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Signin"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="dark:bg-indigo-950 bg-[#FAFAFA]">
        <Form />
        <Footer footerClass="bg-[#F1E6FF]" />
      </div>
    </Layout>
  );
};

export default Signin;
