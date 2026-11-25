"use client";
import { useContext, createContext, useState, ReactNode } from "react";
import { NavBarContextTypes } from "./NavBarProvider.types";

const NavBarContext = createContext<NavBarContextTypes | undefined>(undefined);

function NavBarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavBarContext.Provider value={{ isOpen, toggleNavBar }}>
      {children}
    </NavBarContext.Provider>
  );
}

function useNavBar() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar must be used within a NavBarProvider");
  }
  return context;
}

export { NavBarProvider, useNavBar };
