import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import style from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  page?: string;
}

const Layout = ({ children, page }: LayoutProps) => {
  const navClass = page === "home" ? "bg-same-as-home-div" : `${style.nav}`;
  return (
    <div>
      <Navbar className={navClass} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
