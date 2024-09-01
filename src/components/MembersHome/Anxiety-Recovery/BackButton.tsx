import React, { FC } from "react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
}

const BackButton: FC<BackButtonProps> = ({ href }) => (
  <div className="flex justify-around mt-7 md:justify-center md:gap-24">
    <Link href={href}>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 text-2xl">
        Back
      </button>
    </Link>
  </div>
);

export default BackButton;
