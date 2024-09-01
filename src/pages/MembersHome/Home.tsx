import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import { withAuthProtection } from "../../../withAuthProtection";

const Home = () => {
  return (
    <NavbarLayout>
      <div className="p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <header className="text-center text-4xl mt-10">
            Welcome to FreeMind!
          </header>
          <p className="text-center text-xl mt-10">
            We&apos;re excited to have you on board and ready to support you on
            your journey to recovery. Our top priority is your well-being and
            helping you recover from anxiety.
          </p>
          <p className="text-center text-xl mt-10">
            If you encounter any issues with our website features, payment
            process, or any other aspect, please don&apos;t hesitate to reach
            out to us. Our dedicated team is here to assist you and ensure a
            smooth experience. We value your input and strive to provide the
            best possible service.
          </p>
          <p className="text-center text-xl mt-10">
            If you have any recommendations or advice on how we can enhance our
            website, please share them with us. Your feedback is valuable as we
            continuously work to improve our platform.
          </p>
          <p className="text-center text-xl mt-10">
            Remember, you have the power to redefine your normal and break free
            from anxiety. Together, let&apos;s embark on this transformative
            journey towards a life of calmness, confidence, and liberation from
            anxiety. Thank you for choosing FreeMind. We&apos;re here for you
            every step of the way.
          </p>
          {/* <div className="text-3xl font-extrabold mt-10">Free Features</div>
          <div className=" mt-4 text-xl font-extrabold">
            Introduction: Start Here, The 3 Keys to Recovery, My Full Recovery
            Story
          </div> */}
          {/* <div className="mt-4 text-xl font-extrabold">Discussion Forum</div> */}
          {/* <p className="mt-10 text-center font-semibold text-xl">
            All Members can access the &quot;Start Here&quot; and &quot;My
            Recovery Story&quot; pages in the anxiety introduction for FREE.
          </p> */}
        </div>
      </div>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Home;
