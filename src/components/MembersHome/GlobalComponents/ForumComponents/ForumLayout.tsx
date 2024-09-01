import React, { ReactNode } from "react";
import ForumNavbar from "./ForumNavbar";

interface LayoutProps {
  children: ReactNode;
}

const ForumLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <ForumNavbar />
      <main>{children}</main>
    </div>
  );
};

export default ForumLayout;
