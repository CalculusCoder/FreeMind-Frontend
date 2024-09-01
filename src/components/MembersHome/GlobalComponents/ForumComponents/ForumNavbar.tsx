import Link from "next/link";
import Image from "next/image";

const ForumNavbar = () => {
  return (
    <nav className="flex justify-center gap-4 mt-6 p-4">
      <div className="flex justify-between border-solid border-red-200 border-2 p-4 rounded-full w-[500px]  shadow-lg">
        <Link href="/MembersHome/Forum/Topics/Anxiety">
          <div className="flex gap-2 items-center p-2 rounded text-lg font-semibold  hover:bg-purple-500 hover:text-white transition-colors duration-200">
            <Image
              alt="icon2"
              width={50}
              height={100}
              src="/images/Forum/conversation.png"
            ></Image>
            <span>Anxiety</span>
          </div>
        </Link>
        <Link href="/MembersHome/Forum/Topics/OCD">
          <div className="flex gap-2 items-center p-2 rounded text-lg font-semibold  hover:bg-purple-500 hover:text-white transition-colors duration-200">
            <Image
              alt="icon2"
              width={50}
              height={100}
              src="/images/Forum/discussion.png"
            ></Image>
            <span>OCD</span>
          </div>
        </Link>
        <Link href="/MembersHome/Forum/Topics/DPDR">
          <div className="flex gap-2 items-center p-2 rounded text-lg font-semibold  hover:bg-purple-500 hover:text-white transition-colors duration-200">
            <Image
              alt="icon2"
              width={50}
              height={100}
              src="/images/Forum/discussion2.png"
            ></Image>
            <span>DPDR</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default ForumNavbar;
