import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/Home/Articles/getPostMetadata";
import { getPostContent } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@/components/Home/GlobalComponents/Layout";
import { DiscussionEmbed } from "disqus-react";
import Footer from "@/components/Home/HomeComponents/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const PostPage = ({ post }: any) => {
  const router = useRouter();
  const fullUrl = "https://freemindrecovery.com/" + router.asPath;

  return (
    <Layout>
      <Head>
        <title>{post.title} - FreeMind Recovery</title>
        <meta name="description" content={post.description} />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content={`${post.title} - FreeMind Recovery`}
        />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta
          property="og:image"
          content={
            post.imagePath
              ? `https://freemindrecovery.com${post.imagePath}`
              : "https://www.freemindrecovery.com/images/brain-relaxing0.png"
          }
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${post.title} - FreeMind Recovery`}
        />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={
            post.imagePath
              ? `https://freemindrecovery.com${post.imagePath}`
              : "https://www.freemindrecovery.com/images/brain-relaxing0.png"
          }
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: "FreeMind Recovery",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.freemindrecovery.com/images/brain-relaxing0.png",
                },
              },
              image: `https://www.freemindrecovery.com${post.imagePath}`,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": fullUrl,
              },
            }),
          }}
        />
      </Head>
      <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl mt-10">
        <header className="text-center text-violet-400 dark:text-white text-3xl font-bold mb-3 p-3">
          {post.title}
        </header>
        <div className="flex justify-center mb-8">
          <Image
            className="rounded-xl"
            src={post.imagePath}
            width={500}
            height={400}
            alt={post.title}
          />
        </div>
        <p className="text-slate-500 dark:text-slate-300 text-center mb-16">
          {post.date}, By {post.author}
        </p>

        <article className="prose prose-img:rounded-2xl prose-img:shadow-[-30px_30px_10px_10px_#00000024] dark:prose-h2:text-violet-300 dark:prose-blockquote:text-[#f1e0ca] dark:prose-h4:text-slate-200 dark:prose-a:text-slate-200 dark:prose-strong:text-[#f1e0ca] dark:text-slate-200 lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      <DiscussionEmbed
        shortname="https-freemindrecovery-com"
        config={{
          url: fullUrl,
          identifier: post.identifier,
          title: post.title,
        }}
      />
      <Footer />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostContent(slug);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
