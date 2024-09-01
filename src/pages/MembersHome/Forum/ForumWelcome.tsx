import React, { useEffect } from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Link from "next/link";
import { withAuthProtection } from "../../../../withAuthProtection";

const WelcomePage = () => {
  return (
    <NavbarLayout>
      <header className="text-center text-3xl mb-16">
        Welcome to FreeMind Discussion forums
      </header>
      <div className="flex justify-center">
        <Link href="/MembersHome/Forum/Topics/Anxiety">
          <div className="w-80 md:w-[500px] bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
            Anxiety Forum
          </div>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/MembersHome/Forum/Topics/OCD">
          <div className="w-80 md:w-[500px] bg-gradient-to-r from-cyan-300 via-violet-300 to-blue-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
            OCD Forum
          </div>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/MembersHome/Forum/Topics/DPDR">
          <div className="w-80 md:w-[500px] bg-gradient-to-r from-teal-300 via-cyan-400 to-violet-300 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white text-center text-2xl p-4 rounded-xl shadow-lg">
            DPDR Forum
          </div>
        </Link>
      </div>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default WelcomePage;
