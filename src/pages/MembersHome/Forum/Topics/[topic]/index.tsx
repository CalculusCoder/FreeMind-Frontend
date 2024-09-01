import ForumLayout from "@/components/MembersHome/GlobalComponents/ForumComponents/ForumLayout";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import GetAllPosts from "@/components/MembersHome/ForumComponents/PostIdComponents/GetAllPosts";
import { withAuthProtection } from "../../../../../../withAuthProtection";

const TopicPage = () => {
  return (
    <NavbarLayout>
      <ForumLayout>
        <GetAllPosts />
      </ForumLayout>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default TopicPage;
