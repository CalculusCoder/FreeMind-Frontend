import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import Hero from "@/components/MembersHome/UserAccount/ProfileImage/Hero";
import { withAuthProtection } from "../../../../withAuthProtection";
const ProfileImage = () => {
  return (
    <NavbarLayout>
      <Hero />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default ProfileImage;
