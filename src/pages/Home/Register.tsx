import Form from "@/components/Home/RegisterComponents/Form";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

const Register = () => {
  return (
    <Layout>
      <Head>
        <title>Register - FreeMind</title>
        <meta
          name="description"
          content="Register a new FreeMind account to gain access to personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta property="og:title" content="Register - FreeMind" />
        <meta
          name="keywords"
          content="register, FreeMind, recovery plans, exclusive content, community"
        />
        <meta
          property="og:description"
          content="Register a new FreeMind account to gain access to personalized recovery plans, exclusive content, and a supportive community."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Register"
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

export default Register;
