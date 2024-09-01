import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Link from "next/link";
import { withAuthProtection } from "../../../../withAuthProtection";
import Head from "next/head";

const Resources = () => {
  return (
    <NavbarLayout>
      <Head>
        <title>Anxiety Recovery Resources - FreeMind Anxiety Recovery</title>
        <meta
          name="description"
          content="Anxiety Recovery Resources - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:title"
          content="Anxiety Recovery Resources - FreeMind Anxiety Recovery"
        />
        <meta
          name="keywords"
          content="anxiety, recovery, anxiety disorders, treatment strategies, mental health, FreeMind, support"
        />

        <meta
          property="og:description"
          content="Anxiety Recovery Resources - FreeMind Anxiety Recovery"
        />
        <meta
          property="og:url"
          content="https://freemindrecovery.com/MembersHome/Anxiety-Recovery/Resources"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header className="text-center text-4xl mt-10">
        Additional Resources
      </header>
      <header className="text-center text-2xl mt-20">
        Health Anxiety and Anxiety
      </header>
      <div className="flex flex-wrap gap-16 justify-center">
        <Link className="mt-10" href="https://youtube.com/@ImprovementPath">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white h-32 hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            Great Health Anxiety Youtube Channel
          </button>
        </Link>
        <Link className="mt-10" href="https://youtu.be/1VydyvguK6c">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 h-32 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            Signs You Are Recovering
          </button>
        </Link>
        <Link className="mt-10" href="https://youtu.be/rpmOYWXyPZc">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 h-32 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            Should I Rest Or Continue Living Normally?
          </button>
        </Link>
        <Link className="mt-10" href="https://youtu.be/pXqwWvzNykE">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 h-32 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            67 Different Anxiety Symptoms
          </button>
        </Link>
        <Link className="mt-10" href="https://youtu.be/ikwKIbHbREk">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 h-32 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            Why Does It Take A Long Time To Recover?
          </button>
        </Link>
      </div>
      <header className="text-center text-2xl mt-20">Pure O OCD</header>
      <div className="flex flex-wrap gap-16 justify-center">
        <Link className="mt-10" href="https://youtu.be/Q9yKaI0vLJs">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white h-32 hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            What Is Pure O OCD?
          </button>
        </Link>
        <Link className="mt-10" href="https://youtube.com/@ocdandanxiety">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white h-32 hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
            Great OCD Youtube Channel
          </button>
        </Link>
      </div>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Resources;
