import React, { ReactNode } from "react";
import MembersNavbar from "./MembersNavbar";

interface LayoutProps {
  children: ReactNode;
}

const NavbarLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <MembersNavbar />
      <main>{children}</main>
    </div>
  );
};

export default NavbarLayout;
