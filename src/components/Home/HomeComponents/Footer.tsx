import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

interface Props {
  footerClass?: string;
}

const Footer: React.FC<Props> = ({ footerClass }) => {
  return (
    <div className={`${footerClass} mt-16 dark:bg-[#0e1118]`}>
      <div className=" flex justify-evenly items-center h-[50px] ">
        <Link href="/Home/Footer/PrivacyPolicy">
          <div className="font-semibold">Privacy Policy</div>
        </Link>
        <Link href="/Home/Footer/Disclaimer">
          <div className="font-semibold">Medical Disclaimer</div>
        </Link>

        <Link href="/Home/Footer/Credits">
          <div className="font-semibold">Credits</div>
        </Link>
      </div>
      <div className="flex justify-center mt-4 mb-8 gap-10">
        <Link href="https://www.facebook.com/people/FreeMind-Recovery/100093602744493/">
          <BsFacebook className="text-3xl text-blue-600"></BsFacebook>
        </Link>
        <Link href="https://youtube.com/@FreeMindRecovery">
          <BsYoutube className="text-3xl text-red-500"></BsYoutube>
        </Link>
        <Link href="https://instagram.com/freemind_recovery?igshid=OGQ5ZDc2ODk2ZA==">
          <BsInstagram className="text-3xl text-pink-500"></BsInstagram>
        </Link>
      </div>
      <div className="text-center pb-10 mt-4">
        FreeMind Recovery 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
