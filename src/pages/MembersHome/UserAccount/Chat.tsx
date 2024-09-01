import Chatbot from "@/components/MembersHome/UserAccount/Chat/Chat";
import NavbarLayout from "@/components/MembersHome/GlobalComponents/NavbarLayout";
import { withAuthProtection } from "../../../../withAuthProtection";

const Chat = () => {
  return (
    <NavbarLayout>
      <Chatbot />
    </NavbarLayout>
  );
};

export const getServerSideProps = withAuthProtection();

export default Chat;
