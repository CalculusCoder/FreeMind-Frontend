import React from "react";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Head from "next/head";

const Videos = () => {
  return (
    <Layout>
      <Head>
        <title>Videos - FreeMind</title>
        <meta
          name="description"
          content="Browse through our range of informative and insightful videos focused on anxiety and recovery strategies. Stay informed and learn more about mental health."
        />
        <meta property="og:title" content="Articles - FreeMind" />
        <meta
          name="keywords"
          content="anxiety, recovery, videos, FreeMind, mental health, strategies"
        />
        <meta
          property="og:description"
          content="Browse through our range of informative and insightful videos focused on anxiety and recovery strategies. Stay informed and learn more about mental health."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Videos"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mt-10 text-4xl font-bold">Videos</div>
          <div className="flex items-center flex-col mt-20 gap-3">
            <header className="text-2xl ">
              35 Anxiety Symptoms You Need To Know About
            </header>
            <iframe
              className="rounded-2xl md:w-[560px] md:h-[315px] mt-10"
              width="380"
              height="215"
              src="https://www.youtube.com/embed/B-lePAzNt6I?si=_lsZ84FtsdPN2JIV"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
