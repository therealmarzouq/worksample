import React from "react";
// import { Sidebar, Button, Modal, LoadingDots } from "@components/ui";
import { Sidebar } from "../../ui";
import { Header } from "../../common";
import "./Layout.css";

const Layout = ({ children, pageProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="app-l-root">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleMobileMenu={() =>
          setIsSidebarOpen({ isSidebarOpen: !isSidebarOpen.isSidebarOpen })
        }
      />
      <main className="app-l-main">
        <Header
          toggleMobileMenu={() =>
            setIsSidebarOpen({ isSidebarOpen: !isSidebarOpen.isSidebarOpen })
          }
        />
        {children}
        {/* <p className="text-7xl">Lorem ipsum dolor sit amet.</p> */}
      </main>
    </div>
  );
};

export default Layout;
