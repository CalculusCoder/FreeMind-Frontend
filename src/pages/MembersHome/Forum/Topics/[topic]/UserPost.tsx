import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import CreatePost from "@/components/MembersHome/ForumComponents/PostIdComponents/CreatePost";
import { withAuthProtection } from "../../../../../../withAuthProtection";
import ForumLayout from "@/components/MembersHome/GlobalComponents/ForumComponents/ForumLayout";

const UserPost = () => {
  return (
    <NavbarLayout>
      <ForumLayout>
        <CreatePost />
      </ForumLayout>
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default UserPost;
