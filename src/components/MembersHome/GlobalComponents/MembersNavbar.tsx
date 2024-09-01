import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../../config";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {
  children: React.ReactNode;
}

interface NavItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  goToMenu?: string;
}

async function fetchUserData(userId: string | undefined) {
  if (!userId) {
    throw new Error("User ID is undefined");
  }

  const response = await fetch(`${API_BASE_URL}/users/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}

const MembersNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { data: userData, refetch: refetchUserData } = useQuery(
    ["userProfilePic", userId],
    () => fetchUserData(userId),
    { enabled: !!userId }
  );

  const profilePicId = userData?.profile_pic_id;
  return (
    <div className={`flex justify-between items-center p-8 h-24`}>
      <Link href="/MembersHome/Home">
        <h1>FreeMind</h1>
      </Link>
      <div
        className={`absolute flex text-2xl justify-center gap-16 w-full h-full lg:w-auto top-24 left-0 z-50 lg:h-[75px] lg:static lg:flex lg:text-lg lg:gap-10 lg:mr-10 lg:flex-row lg:items-center bg-white dark:bg-gray-400 lg:rounded-full lg:p-3 lg:pr-10 lg:pl-10 transition-all duration-500 ease-in lg:transition-none lg:border-solid lg:border-red-200 lg:border-2 shadow-lg ${
          open ? `top-20` : "top-[-1000px]"
        }`}
      >
        <Navbar>
          <ul
            className={`${style.navbarNav} text-base font-semibold flex flex-col space-y-16 mt-2 lg:mt-0 items-center lg:space-y-0 lg:items-start lg:flex-row`}
          >
            <NavItem
              icon={
                <div className="flex gap-2 items-center p-2 rounded  hover:bg-purple-300 hover:text-white transition-colors duration-200">
                  <Image
                    alt="icon2"
                    width={50}
                    height={100}
                    src="/images/Members-Global/health-insurance.png"
                  />
                  <div className="text-xl lg:text-base">Anxiety Recovery</div>
                </div>
              }
            >
              <DropdownMenu />
            </NavItem>
            <NavItem
              icon={
                <div className="flex gap-2 items-center p-2 rounded  hover:bg-purple-300 hover:text-white transition-colors duration-200">
                  <Image
                    alt="icon2"
                    width={50}
                    height={100}
                    src="/images/Members-Global/brain.png"
                  />
                  <div className="text-xl lg:text-base">OCD Recovery</div>
                </div>
              }
            >
              <DropdownOCD />
            </NavItem>

            <NavItem
              icon={
                <div className="flex gap-2 items-center p-2 rounded  hover:bg-purple-300 hover:text-white transition-colors duration-200">
                  <Image
                    alt="icon2"
                    width={50}
                    height={100}
                    src="/images/Home-Ocd/mental-health.png"
                  />
                  <div className="text-xl lg:text-base">DPDR Recovery</div>
                </div>
              }
            >
              <DropdownDPDR />
            </NavItem>
            <NavItem
              icon={
                <div className="flex gap-2 items-center p-2 rounded  hover:bg-purple-300 hover:text-white transition-colors duration-200">
                  <Image
                    alt="icon2"
                    width={50}
                    height={100}
                    src="/images/Forum/discussion2.png"
                  />
                  <div className="text-xl lg:text-base">Forum</div>
                </div>
              }
            >
              <DropdownForum />
            </NavItem>

            {session?.user ? (
              <NavItem
                icon={
                  <div className="flex gap-2 items-center p-2 rounded  hover:bg-purple-300 hover:text-white transition-colors duration-200">
                    <Image
                      alt="icon2"
                      width={40}
                      height={50}
                      src={`/images/User-Profile/profile_pic_${profilePicId}.png`}
                    />
                    <div className="font-semibold text-xl lg:text-base">
                      {session.user.username}
                    </div>
                  </div>
                }
              >
                <DropdownUser />
              </NavItem>
            ) : null}
          </ul>
        </Navbar>
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

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props: NavItemProps) {
    return (
      <div
        className={style.menuItem}
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </div>
    );
  }
  return (
    <div className={style.dropdown}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.enter,
          enterActive: style.enteractive,
          exit: style.exit,
          exitActive: style.exitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="settings">Introduction</DropdownItem>
          <DropdownItem goToMenu="anxiety">
            Anxiety and Nervous System Dysregulation
          </DropdownItem>
          <DropdownItem goToMenu="symptoms">Symptoms</DropdownItem>
          <DropdownItem goToMenu="recovery">
            Recovery and Management
          </DropdownItem>
          <DropdownItem goToMenu="recovery2">
            Recovery and Management 2
          </DropdownItem>
          <Link href="/MembersHome/Relaxation-Audio">
            <DropdownItem>Relaxation Audios</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Resources">
            <DropdownItem>Additional Resources</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/StartHere">
            <DropdownItem>Start Here</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/HowYouRecover">
            <DropdownItem>The 3 Keys to Recovery</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/RecoveryStory">
            <DropdownItem>My Full Recovery Story</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/WhatIsAnxietyDisorder">
            <DropdownItem>What is Anxiety Disorder?</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/AnxietyDisorderCauses">
            <DropdownItem>What Causes Anxiety Disorder?</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/AnxietyLevels">
            <DropdownItem>Levels of Severity in Anxiety Disorders</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Introduction/RecoveryJourney">
            <DropdownItem>The Recovery Journey</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "anxiety"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/StressResponse/">
            <DropdownItem>The Stress Response</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/NervousSystemDysregulation/">
            <DropdownItem>Nervous System Dysregulation</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/AnxietyVsNSD/">
            <DropdownItem>Anxiety vs Nervous System Dysregulation</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/PanicAttacks/">
            <DropdownItem>Panic Attacks</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/HealthAnxiety/">
            <DropdownItem>Health Anxiety</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "symptoms"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <Link href="/MembersHome/Anxiety-Recovery/Symptoms/physical/">
            <DropdownItem>Physical Symptoms</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Symptoms/mental/">
            <DropdownItem>Mental Symptoms</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Symptoms/visual/">
            <DropdownItem>Visual Symptoms</DropdownItem>
          </Link>
          <Link href="/MembersHome/InProgress">
            <DropdownItem>Hearing/Ear Symptoms</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "recovery"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery1/PanicAttacks/">
            <DropdownItem>Eliminate Panic Attacks</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery1/Anxiety/">
            <DropdownItem>Eliminate Anxiety</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery1/Thoughts/">
            <DropdownItem>Eliminate Intrustive Thoughts</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery1/Fears/">
            <DropdownItem>Eliminate Fears</DropdownItem>
          </Link>
          {/* <Link href="/MembersHome/Anxiety-Recovery/Recovery1/Worry/">
            <DropdownItem>Eliminate All Worry</DropdownItem>
          </Link> */}
          {/* <Link href="/MembersHome/Anxiety-Recovery/Anxiety-Nervous-System/HealthAnxiety/">
            <DropdownItem></DropdownItem>
          </Link> */}
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "recovery2"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/NervousSystem/">
            <DropdownItem>Nervous System Recovery</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Worry/">
            <DropdownItem>Worry</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Stress/">
            <DropdownItem>Eliminate Stress</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Trauma/">
            <DropdownItem>Trauma and Your Environment</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Excercise/">
            <DropdownItem>Excercise and Diet</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Vitamins/">
            <DropdownItem>Vitamins</DropdownItem>
          </Link>
          <Link href="/MembersHome/Anxiety-Recovery/Recovery2/Relaxation/">
            <DropdownItem>Deep Relaxation Excercises</DropdownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownDPDR() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props: NavItemProps) {
    return (
      <div
        className={style.menuItem}
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={style.dropdown}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.enter,
          enterActive: style.enteractive,
          exit: style.exit,
          exitActive: style.exitactive,
        }}
      >
        <div className={style.menu}>
          {/* <DropdownItem goToMenu="settings">DPDR Basics</DropdownItem>
          <DropdownItem goToMenu="symptoms">Symptoms and Types</DropdownItem> */}
          <DropdownItem>COMING SOON</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <DropdownItem>Start Here</DropdownItem>
          <DropdownItem>What is DPDR?</DropdownItem>
          <DropdownItem>What Causes DPDR?</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "symptoms"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <DropdownItem>Emotional Symptoms</DropdownItem>
          <DropdownItem>Cognitive Symptoms</DropdownItem>
          <DropdownItem>Physical Symptoms</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownOCD() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props: NavItemProps) {
    return (
      <div
        className={style.menuItem}
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={style.dropdown}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.enter,
          enterActive: style.enteractive,
          exit: style.exit,
          exitActive: style.exitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="settings">COMING SOON</DropdownItem>
          {/* <DropdownItem goToMenu="symptoms">Symptoms and Types</DropdownItem>
          <DropdownItem>Recovery and Management</DropdownItem> */}
        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <Image
              src="/images/Members-Global/back-button.png"
              alt="back"
              height={20}
              width={30}
            ></Image>
          </DropdownItem>
          <DropdownItem>Start Here</DropdownItem>
          <DropdownItem>What is OCD?</DropdownItem>
          <DropdownItem>Types of OCD</DropdownItem>
        </div>
      </CSSTransition> */}

      <CSSTransition
        in={activeMenu === "symptoms"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.secondaryenter,
          enterActive: style.secondaryenteractive,
          exit: style.secondaryexit,
          exitActive: style.secondaryexitactive,
        }}
      >
        <div className={style.menu}>
          <DropdownItem goToMenu="main">
            <IoArrowBackCircleOutline className="text-3xl" />
          </DropdownItem>
          <DropdownItem>Obsessions</DropdownItem>
          <DropdownItem>Compulsions</DropdownItem>
          <DropdownItem>Triggers and Patterns</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownForum() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props: NavItemProps) {
    return (
      <div
        className={style.menuItem}
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={style.dropdown}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.enter,
          enterActive: style.enteractive,
          exit: style.exit,
          exitActive: style.exitactive,
        }}
      >
        <div className={style.menu}>
          <Link href="/MembersHome/Forum/ForumWelcome">
            <DropdownItem>All Forums</DropdownItem>
          </Link>
          {/* <Link href="/MembersHome">
            <DropdownItem>Your Posts</DropdownItem>
          </Link>
          <Link href="/MembersHome">
            <DropdownItem>Your Comments</DropdownItem>
          </Link> */}
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownUser() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props: NavItemProps) {
    return (
      <div
        className={style.menuItem}
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className={style.dropdown}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: style.enter,
          enterActive: style.enteractive,
          exit: style.exit,
          exitActive: style.exitactive,
        }}
      >
        <div className={style.menu}>
          <Link href="/MembersHome/UserAccount/ProfileImage">
            <DropdownItem>Change Profile Picture</DropdownItem>
          </Link>
          <Link href="/MembersHome/UserAccount/Chat">
            <DropdownItem>FreeMind Chatbot</DropdownItem>
          </Link>
          <button
            className="w-full"
            onClick={() =>
              signOut({
                callbackUrl: "/Home/Signin",
              })
            }
          >
            <DropdownItem>Sign Out</DropdownItem>
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props: NavbarProps) {
  return (
    <nav>
      <ul className={style.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props: NavItemProps) {
  const [open, setOpen] = useState(false);
  const navItemRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e.target || !navItemRef.current) return;

      const target = e.target as Element;
      if (
        target instanceof Element &&
        !navItemRef.current.contains(target) &&
        !target.matches(`.${style.navbar}`) &&
        !target.matches("li")
      ) {
        setOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul ref={navItemRef}>
      <li className="text-white mr-10" onClick={() => setOpen(!open)}>
        {props.icon}
      </li>
      {open && props.children}
    </ul>
  );
}

export default MembersNavbar;

{
  /* <ul>About</ul>
        <Link href="/Home/Signin">
          <ul>Sign In</ul>
        </Link>
        <Link href="/Home/Register">
          <ul>Register</ul>
        </Link>
        <Link href="/Home/MemberBenefits">
          <ul>Member Benefits</ul>
        </Link> */
}

{
  /* <nav className="flex justify-between items-center bg-nav h-20">
      <Link className="flex" href="/MembersHome/Home">
        <div className="ml-3 md:text-xl md:ml-10">FreeMind</div>
      </Link>
      <div className="flex gap-4 mr-5 md:text-xl md:gap-10 md:mr-10">
        <ul>Anxiety</ul>
        <Link href="/MembersHome/AnxietyForum">
          <ul>Discussion Forum</ul>
        </Link>
        <Link href="/Home/Home">
          <ul>Sign Out</ul>
        </Link>
      </div>
    </nav> */
}
