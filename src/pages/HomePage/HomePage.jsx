import React, { useState } from "react";

import { Header } from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import ScreensPage from "../ScreensPage/ScreensPage";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Header onOpenSidebar={handleOpenSidebar} />
      <SideBar active={isSidebarOpen} onClick={handleCloseSidebar} />
      <ScreensPage />
    </div>
  );
}

export default HomePage;
