import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/UserAccount/Payment/Hero";
import StripeContainer from "@/components/StripeContainer";
import { withAuthProtection } from "../../../../withAuthProtection";

const Payment = () => {
  return (
    <div>Currently Unavailable</div>
    // <NavbarLayout>
    //   <Hero />
    //   <StripeContainer />
    // </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Payment;
