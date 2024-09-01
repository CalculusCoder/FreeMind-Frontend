import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface className {
  className: string;
}

const Navbar = ({ className }: className) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [openedDropdown, setOpenedDropdown] = useState("");
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setOpenedDropdown("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenedDropdown("");
    }
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="flex gap-3 justify-center">
          <SunIcon
            className="text-white w-7 h-7"
            role="button"
            onClick={() => setTheme("light")}
          />
          <button className="font-semibold" onClick={() => setTheme("light")}>
            Light Mode
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex gap-3 justify-center">
          <MoonIcon
            className="text-gray-800 w-7 h-7"
            role="button"
            onClick={() => setTheme("dark")}
          />
          <button className="font-semibold" onClick={() => setTheme("dark")}>
            Dark Mode
          </button>
        </div>
      );
    }
  };

  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      ref={navbarRef}
      className={`flex justify-between items-center p-8 h-24  ${className}`}
    >
      <Link className="flex" href="/">
        <div className="ml-3 md:ml-10 ">
          <Image alt="/" width={60} height={60} src="/images/LOGO.png"></Image>
        </div>
      </Link>
      <div
        onClick={handleDivClick}
        className={`absolute flex text-2xl flex-col justify-start items-center gap-16 w-full h-full lg:w-auto top-24 left-0 z-50 lg:h-[75px] lg:static lg:flex lg:text-lg lg:gap-10 lg:mr-10 lg:flex-row lg:items-center bg-white dark:bg-[#0e1118] lg:rounded-full lg:p-3 lg:pr-10 lg:pl-10 transition-all duration-500 ease-in lg:transition-none ${
          open ? `top-20` : "top-[-1000px]"
        }`}
      >
        <Link href="/Home/Anxiety">
          <div className="flex gap-3 mt-8 lg:mt-0 items-center hover:text-gray-600 transition-colors duration-200">
            <Image
              alt="/"
              width={50}
              height={50}
              src="/images/Forum/confusion.png"
            />
            <span className="font-semibold text-[#015AE6]">Anxiety</span>
          </div>
        </Link>
        <Link href="/Home/Ocd">
          <div className="flex gap-3 items-center hover:text-gray-600 transition-colors duration-200">
            <Image alt="/" width={50} height={50} src="/images/ocd.png" />
            <span className="font-semibold text-[#ED05FF]">OCD</span>
          </div>
        </Link>
        <Link href="/Home/Dpdr">
          <div className="flex gap-3 items-center hover:text-gray-600 transition-colors duration-200">
            <Image
              width={50}
              height={50}
              alt="/"
              src="/images/Home-Ocd/galaxy.png"
            />
            <span className="font-semibold">DPDR</span>
          </div>
        </Link>
        <div className="relative">
          <div
            onClick={() =>
              setOpenedDropdown(
                openedDropdown === "resources" ? "" : "resources"
              )
            }
            className="font-semibold transition-colors duration-200 cursor-pointer flex gap-3 items-center"
          >
            <Image
              width={50}
              height={50}
              alt="/"
              src="/images/responsibility.png"
            />
            <span className="font-semibold flex items-center relative hover:text-gray-600 transition-colors duration-200 cursor-pointer">
              Resources
              <svg
                className="ml-2 w-10 fill-current absolute left-[118px] -top-1 lg:left-[83px] lg:-top-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </span>
            {openedDropdown === "resources" && (
              <div className="absolute top-10 ml-3 lg:ml-0 mt-4 lg:mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 lg:dark:bg-[#0e1118] z-10">
                <Link href="/Home/Articles">
                  <div className="px-3 hover:text-gray-600 font-semibold transition-colors duration-200 mt-4 text-center">
                    Articles
                  </div>
                </Link>
                <Link href="/Home/Videos">
                  <div className="px-3 hover:text-gray-600 font-semibold transition-colors duration-200 mt-4 text-center">
                    Videos
                  </div>
                </Link>
                <Link href="/Home/Anxiety-Symptoms">
                  <div className="px-3 hover:text-gray-600 font-semibold transition-colors duration-200 mt-4 text-center">
                    Symptoms
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <Link href="/Home/Support-Us">
          <div className="flex gap-3 items-center hover:text-gray-600 transition-colors duration-200">
            <Image
              alt="support-us"
              width={45}
              height={50}
              src="/images/donation.png"
            />
            <span className="font-semibold">Support Us</span>
          </div>
        </Link>

        {session?.user ? (
          <div className="relative">
            <div
              onClick={() =>
                setOpenedDropdown(openedDropdown === "account" ? "" : "account")
              }
              className="font-semibold flex items-center relative hover:text-gray-600 transition-colors duration-200 cursor-pointer"
            >
              Account
              <svg
                className="ml-2 w-10 fill-current absolute left-[96px] -top-1 lg:left-[65px] lg:-top-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </div>
            {openedDropdown === "account" && (
              <div className="absolute -left-9 -top-[250px] lg:top-auto mt-2 w-52 lg:w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 lg:dark:bg-[#0e1118] z-10">
                <Link href="/MembersHome/Home">
                  <div className="py-1 px-3 hover:text-gray-600 text-center font-semibold transition-colors duration-200">
                    Members Home
                  </div>
                </Link>
                <div
                  onClick={() => {
                    signOut();
                  }}
                  className="py-1 px-3 hover:text-gray-600 text-center font-semibold transition-colors duration-200 mt-4 cursor-pointer"
                >
                  Sign Out
                </div>
                <Link href="/Home/MemberBenefits">
                  <div className="py-1 px-3 hover:text-gray-600 font-semibold transition-colors duration-200 text-center mt-4">
                    Benefits
                  </div>
                </Link>
                <div
                  className="mt-4"
                  onClick={() => {
                    setOpenedDropdown(
                      openedDropdown === "account" ? "" : "account"
                    );
                  }}
                >
                  {renderThemeChanger()}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <div
              onClick={() =>
                setOpenedDropdown(openedDropdown === "account" ? "" : "account")
              }
              className="font-semibold flex items-center relative hover:text-gray-600 transition-colors duration-200 cursor-pointer"
            >
              Account
              <svg
                className="ml-2 w-10 fill-current absolute left-[96px] -top-1 lg:left-[65px] lg:-top-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
            </div>
            {openedDropdown === "account" && (
              <div className="absolute -left-12 -top-[218px] lg:-left-9 lg:top-auto mt-2  w-52 lg:w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 lg:dark:bg-[#0e1118] z-10">
                <Link href="/Home/Signin">
                  <div className="py-1 px-3 hover:text-gray-600 text-center font-semibold transition-colors duration-200">
                    Sign In
                  </div>
                </Link>
                <Link href="/Home/Register">
                  <div className="py-1 px-3 hover:text-gray-600 text-center font-semibold transition-colors duration-200 mt-4">
                    Register
                  </div>
                </Link>
                <Link href="/Home/MemberBenefits">
                  <div className="py-1 px-3 hover:text-gray-600 font-semibold transition-colors duration-200 text-center mt-4">
                    Benefits
                  </div>
                </Link>
                <div
                  className="mt-4"
                  onClick={() => {
                    setOpenedDropdown(
                      openedDropdown === "account" ? "" : "account"
                    );
                  }}
                >
                  {renderThemeChanger()}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={() => setOpen(!open)} className={`lg:hidden`}>
        {open ? (
          <AiOutlineClose className="text-3xl" />
        ) : (
          <AiOutlineMenu className="text-3xl" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
