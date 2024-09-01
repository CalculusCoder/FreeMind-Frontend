import React from "react";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Link from "next/link";
import { CiCoffeeCup } from "react-icons/ci";

const SupportUs = () => {
  return (
    <Layout>
      <header className="text-4xl font-bold text-center mt-10">
        Support FreeMind
      </header>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg">
            We&apos;re glad to hear that our resources have been helpful to you.
            At FreeMind, our mission is to provide insightful and accessible
            content that helps individuals on their journey to anxiety recovery.
          </p>
          <p className="text-center text-lg mt-4">
            However, like any organization, running FreeMind comes with its own
            costs. Hosting our website, maintaining the quality of our
            resources, and ensuring that we can continue to offer new and
            updated content all require funding.
          </p>
          <p className="text-center text-lg mt-4">
            We would greatly appreciate your support, which can be in the form
            of a small donation or through the purchase of our merchandise
            (coming soon). Your contribution will directly support our
            operations, ensuring that FreeMind remains a free, affordable, and
            accessible resource for all.
          </p>
          <p className="text-center text-lg mt-4">
            Thank you for considering supporting FreeMind. Every donation, no
            matter the size, makes a difference.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="https://www.buymeacoffee.com/FreeMindRecovery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 flex justify-center items-center gap-3 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48 text-lg">
              <div className="text-lg">Donate</div>
              <CiCoffeeCup className="text-5xl lg:text-4xl" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SupportUs;
