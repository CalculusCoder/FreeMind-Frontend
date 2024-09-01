import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../HomeComponents/Hero.module.css";

const Hero = () => {
  return (
    <div className="pb-16 pt-10 ">
      <header className="text-center font-extrabold text-4xl">
        Recovery <span className="text-purple-500">Support</span>
      </header>
      <header className="text-center font-extrabold text-4xl mt-3 mb-16">
        <span className="text-cyan-300">Member</span> Benefits
      </header>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-xl">
            I built this website with anxiety sufferers in mind. Here at
            FreeMind, we have two goals. The first is to provide the best
            anxiety disorder, OCD, and DPDR recovery services at no cost to you.
            And the second is to ensure that you make a full recovery.
          </p>
        </div>
        <div className={`${style.shadow} flex justify-center`}>
          <Image
            src="/images/brain-relaxing0.png"
            alt="Relaxed Brain"
            width={300}
            height={100}
          />
        </div>
        {/* <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-xl font-semibold">
            Three 30-minute one-on-one Skype calls are available for the first
            20 Premium Members (4.99/month)! Qualifying Members will have one
            30-minute Skype call per month for 3 months. User must be a Premium
            Member for those 3 months. Please note that this is a
            mentorship/coaching session. We will contact you through email,
            please ensure you input a valid email. (Still Available!)
          </p>
        </div> */}
      </div>
      <div className="flex justify-center">
        <div className="bg-white dark:bg-cyan-900  w-[370px] md:w-[500px] lg:w-[800px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024]">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Access to several pages of anxiety disorder recovery information.
            (Video Translations and OCD/DPDR Section Coming Soon!)
          </h2>
          <ul className="text-center text-lg">
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Full Anxiety Recovery Program
            </li>
            <li className="mt-2">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Stress management techniques.
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Relaxation and breathing exercises/techniques.
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              CBT/ACT therapeutic recovery techniques and strategies.
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              What anxiety disorders are and why they occur.
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Several anxiety disorder symptoms. Why they occur, and how you can
              possibly eliminate them.
            </li>

            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              My full anxiety disorder, OCD, and DPDR recovery story. What I did
              right, what I did wrong, and how I made a recovery.
            </li>
          </ul>
          <div className="flex justify-evenly mt-10 mb-10">
            <Image
              src="/images/Home-MemberBenefits/data-collection.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center mt-10">
            Several informational links, videos, and relaxation audio files
          </h2>
          <ul className="text-center text-lg">
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Relaxation audio files
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Links to blogs, references, and other informational websites.
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Links to external Youtube videos on anxiety disorders, OCD, DPDR,
              and recovery techniques.
            </li>
          </ul>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/Home-MemberBenefits/listen.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center mt-10">
            Exclusive Discussion Forum
          </h2>
          <ul className="text-center text-lg">
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Ask any questions for our FreeMind team members to answer
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              3 different forum topics (Anxiety, OCD, DPDR) to share your
              opinions
            </li>
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Online discussion forum to share your experiences and connect with
              other support members.
            </li>
          </ul>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/Home-MemberBenefits/conversation.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>

          {/* <h2 className="text-2xl font-semibold mb-4 text-center mt-10">
            Direct access to one of our team members
          </h2>
          <ul className="text-center text-lg"> */}
          {/* <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Access to one of our team members through email for personalized
              support and guidance.
            </li> */}

          {/* <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Ask one of our team members any questions related to anxiety, OCD,
              and DPDR.
            </li> */}
          {/* </ul> */}
          {/* <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/Home-MemberBenefits/customer-service.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div> */}
          <h2 className="text-2xl font-semibold mb-4 text-center mt-10">
            New information, videos, links, and audios added constantly with
            immediate access from any device.
          </h2>
          <ul className="text-center text-lg">
            <li className="mt-4">
              <Image
                alt="check"
                src="/images/check.png"
                width={20}
                height={20}
                className="inline-block mr-2"
              />
              Get the latest up-to-date anxiety recovery information. New
              videos, links, and information are constantly updated and added.
            </li>
          </ul>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/Home-MemberBenefits/smartphone.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>
          <p className="text-center font-extrabold text-xl mt-4">
            FreeMind is 100% Free! Register Today.
          </p>
          <div className="flex justify-center mt-7 md:justify-center md:gap-24">
            <Link href="/Home/Register">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white hover:bg-purple-600 rounded-full py-3 px-6 mt-4 font-medium text-white w-40 xl:w-48">
                Start your recovery today!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
