import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Image from "next/image";

const StartHere = () => {
  return (
    <NavbarLayout>
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-4xl font-bold text-center mb-8">
            Introduction
          </header>
          <p className="mb-4 text-lg">
            Welcome to FreeMind! As a valued member of our recovery support
            community, it is our priority to help you make the most of the
            information and resources available on our website. Our website is
            divided into three primary sections, which include the Anxiety
            Recovery section, OCD Recovery section, and DPDR Recovery section.
          </p>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/images/warning.png"
              alt="anxiety"
              width={100}
              height={100}
            />
          </div>
          <p className="mb-4 text-lg">
            It is <span className="text-xl text-red-500">IMPORTANT</span>
            make sure that you access the appropriate sections on our website
            based on your individual needs. If you do not experience OCD or even
            Anxiety (although unlikely), we kindly request that you refrain from
            accessing those channels. It is possible that learning about these
            conditions may trigger new anxieties or fears for some of our
            members. We also provide a dedicated discussion forum for those who
            suffer from DPDR only.
          </p>
          <p className="mb-4 text-lg">
            To get the most out of FreeMind, it is vital to read through the
            content in order.
          </p>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default StartHere;
