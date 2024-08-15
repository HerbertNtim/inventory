"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(component)/Navbar";
import Sidebar from "@/app/(component)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("lightP");
    }
  }, [isDarkMode]);

  return (
    <div className={`light flex w-full min-h-screen text-gray-900 bg-gray-50 ${isDarkMode ? 'dark' : 'light:'}`}>
      <Sidebar />
      <main
        className={`flex flex-col py-7 px-9 w-full h-full bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
