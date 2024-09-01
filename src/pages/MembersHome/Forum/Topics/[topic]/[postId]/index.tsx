import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import UserPost from "@/components/MembersHome/ForumComponents/PostIdComponents/UserPost";
import GetAllComments from "@/components/MembersHome/ForumComponents/PostIdComponents/GetAllComments";

import ForumLayout from "@/components/MembersHome/GlobalComponents/ForumComponents/ForumLayout";
import { withAuthProtection } from "../../../../../../../withAuthProtection";

const Index = () => {
  return (
    <NavbarLayout>
      <ForumLayout>
        <UserPost />
        <GetAllComments />
      </ForumLayout>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Index;
