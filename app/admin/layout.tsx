"use client";
// import "../globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import {SSRProvider} from '@react-aria/ssr'; 
import { useLockedBody } from "./components/hooks/useBodyLock";
import { NavbarWrapper } from "./components/navbar/navbar";
import { SidebarWrapper } from "./components/sidebar/sidebar";
import { SidebarContext } from "./components/layout/layout-context";
import { WrapperLayout } from "./components/layout/layout.styles";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});

function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SSRProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <SidebarContext.Provider
            value={{
              collapsed: sidebarOpen,
              setCollapsed: handleToggleSidebar,
            }}
          >
            <WrapperLayout>
              <SidebarWrapper />
              <NavbarWrapper>{children}</NavbarWrapper>
            </WrapperLayout>
          </SidebarContext.Provider>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  );
}

export default AdminLayout;
