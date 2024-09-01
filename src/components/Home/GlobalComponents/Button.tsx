import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="flex justify-around mt-3 md:justify-center md:gap-24">
      <Link href="/Home/MemberBenefits">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
          More About Member Benefits
        </button>
      </Link>
      <Link href="/Home/Register">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
          Start your recovery today!
        </button>
      </Link>
    </div>
  );
};

export default Button;
