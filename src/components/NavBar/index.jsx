import { useState } from "react";
import NavBarItem from "./NavBarItem";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
} from "@heroui/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/*Desktop Menu*/}
      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        <NavBarItem to="/">INICIO</NavBarItem>
        <NavBarItem to="/">HISTORIA</NavBarItem>
        <NavBarItem to="/">CULUTURA</NavBarItem>
      </NavbarContent>

      {/*Mobile Menu*/}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>Menu Principal</NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-content2-foreground py-8">
        <NavBarItem variant="mobile">INICIO</NavBarItem>
        <NavBarItem variant="mobile">HISTORIA</NavBarItem>
        <NavBarItem variant="mobile">CULTURA</NavBarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
