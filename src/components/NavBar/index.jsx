import { useState } from "react";
import NavBarItem from "./NavBarItem";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
} from "@heroui/react";
import { useNavigate } from "react-router";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const toHistory = () => {
    navigate("/historia");
    setIsMenuOpen(false);
  };

  const toCulture = () => {
    navigate("/cultura");
    setIsMenuOpen(false);
  };

  const toTerritory = () => {
    navigate("/territorio");
    setIsMenuOpen(false);
  };

  const toTourism = () => {
    navigate("/turismo");
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="h-[var(--myapp-navbar--height)]"
      classnames={{
        menu: "transition-all duration-1000 ease-in-out transform scale-y-0 origin-top",
      }}
    >
      {/*Desktop Menu*/}
      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        <NavBarItem onNavigate={toHome}>INICIO</NavBarItem>
        <NavBarItem onNavigate={toHistory}>HISTORIA</NavBarItem>
        <NavBarItem onNavigate={toCulture}>CULTURA</NavBarItem>
        <NavBarItem onNavigate={toTerritory}>TERRITORIO</NavBarItem>
        <NavBarItem onNavigate={toTourism}>TURISMO</NavBarItem>
      </NavbarContent>

      {/*Mobile Menu*/}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>San Ignacio de Velasco</NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-content2-foreground py-8 top-[var(--myapp-navbar--height)] !h-[calc(100vh_-_var(--myapp-navbar--height))]">
        <NavBarItem variant="mobile" onNavigate={toHome}>
          INICIO
        </NavBarItem>
        <NavBarItem variant="mobile" onNavigate={toHistory}>
          HISTORIA
        </NavBarItem>
        <NavBarItem variant="mobile" onNavigate={toCulture}>
          CULTURA
        </NavBarItem>
        <NavBarItem variant="mobile" onNavigate={toTerritory}>
          TERRITORIO
        </NavBarItem>
        <NavBarItem variant="mobile" onNavigate={toTourism}>
          TURISMO
        </NavBarItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
