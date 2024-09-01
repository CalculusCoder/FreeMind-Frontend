import React from "react";
import PostPreview from "@/components/Home/Articles/postPreview";
import { GetStaticProps } from "next";
import getPostMetadata from "@/components/Home/Articles/getPostMetadata";
import { PostMetadata } from "@/types/PostMetadata";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";
import Head from "next/head";

interface HomePageProps {
  posts: PostMetadata[];
}

const Blog = ({ posts }: HomePageProps) => {
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <Layout>
      <Head>
        <title>Articles - FreeMind Recovery</title>
        <meta
          name="description"
          content="Browse through our range of informative and insightful articles focused on anxiety, depersonalization derealization disorder (DPDR), and OCD recovery strategies. Stay informed and learn more about mental health."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Articles - FreeMind Recovery" />
        <meta
          property="og:description"
          content="Explore our articles on anxiety, depersonalization derealization disorder (DPDR), and OCD recovery strategies. Learn about mental health with FreeMind Recovery."
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/Home/Articles"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.freemindrecovery.com/_next/image?url=%2Fimages%2Fbrain-relaxing0.png&w=384&q=75"
        />

        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Optionally add 'twitter:site' and 'twitter:creator' if you have these */}
        <meta name="twitter:title" content="Articles - FreeMind Recovery" />
        <meta
          name="twitter:description"
          content="Explore our articles on anxiety, depersonalization derealization disorder (DPDR), and OCD recovery strategies. Learn about mental health with FreeMind Recovery."
        />
        <meta
          name="twitter:image"
          content="https://www.freemindrecovery.com/_next/image?url=%2Fimages%2Fbrain-relaxing0.png&w=384&q=75"
        />
      </Head>
      <h1 className="text-center mt-10 text-4xl font-bold mb-8">Articles</h1>
      <div className="">
        <div className=" gap-10 md:space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {postPreviews}
        </div>
      </div>
      <Footer footerClass="bg-[#F1E6FF]" />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostMetadata();

  const parseDate = (dateString: string) => {
    const [month, day, year] = dateString
      .split("-")
      .map((num) => parseInt(num, 10));
    return new Date(year, month - 1, day);
  };

  const sortedPosts = posts.sort((a, b) => {
    const dateA = parseDate(a.date).getTime();
    const dateB = parseDate(b.date).getTime();
    return dateB - dateA;
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

export default Blog;
