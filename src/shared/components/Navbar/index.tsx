"use client";
import Content from "./Content";
import Item from "./Item";
import ToggleButton from "./ToggleButton";
import Logo from "./Logo";
import { NavBarProps } from "./NavBar.types";
import { useNavBar } from "@/shared/context/NavbarProvider";

function NavBar({ children, className = "" }: NavBarProps) {
  const { isOpen } = useNavBar();
  return (
    <div
      className={`max-lg:fixed max-lg:inset-0 max-lg:w-dvw max-lg:z-10 h-full w-full flex max-lg:flex-col justify-between bg-transparent max-lg:bg-[#131820d1] overflow-hidden scrollbar-none ${className} ${isOpen ? "max-lg:h-dvh max-lg:overflow-y-auto max-lg:overscroll-contain" : "max-lg:h-0"} transition-all duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
}

NavBar.Content = Content;
NavBar.Item = Item;
NavBar.ToggleButton = ToggleButton;
NavBar.Logo = Logo;

export default NavBar;
