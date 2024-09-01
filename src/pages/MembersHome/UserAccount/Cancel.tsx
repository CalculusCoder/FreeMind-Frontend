import React from "react";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/UserAccount/Cancel/Hero";
import { withAuthProtection } from "../../../../withAuthProtection";

const Cancel = () => {
  return (
    <div>Currently Unavailable</div>
    // <NavbarLayout>
    //   <Hero />
    // </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Cancel;
