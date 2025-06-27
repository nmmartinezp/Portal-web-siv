import NavBarItem from "./NavBarItem";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
} from "@heroui/react";

const items = [
  { title: "INICIO", href: "/" },
  { title: "HISTORIA", href: "/historia" },
  { title: "CULTURA", href: "/cultura" },
  { title: "TERRITORIO", href: "/territorio" },
  { title: "TURISMO", href: "/turismo" },
];

function NavBar({ menuOpen, onToggle }) {
  const handleMenuClick = () => {
    onToggle(false);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={menuOpen}
      onMenuOpenChange={onToggle}
      className="fixed h-[var(--myapp-navbar--height)] bg-gradient-to-r from-warning-300/50 to-primary-200/50 backdrop-blur-sm"
      classnames={{
        menu: "transition-all duration-1000 ease-in-out transform scale-y-0 origin-top",
      }}
    >
      {/*Desktop Menu*/}
      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        {items.map((item, index) => (
          <NavBarItem
            id={`itemNavbar-${index}`}
            key={`itemNavbark-$${index}`}
            toHref={item.href}
            onPress={handleMenuClick}
          >
            {item.title}
          </NavBarItem>
        ))}
      </NavbarContent>

      {/*Mobile Menu*/}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={menuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>San Ignacio de Velasco</NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-content2-foreground py-8 top-[var(--myapp-navbar--height)] !h-[calc(100vh_-_var(--myapp-navbar--height))]">
        {items.map((item, index) => (
          <NavBarItem
            id={`itemNavbarToggle-${index}`}
            key={`itemNavbarToggleK-$${index}`}
            variant={"mobile"}
            toHref={item.href}
            onPress={handleMenuClick}
          >
            {item.title}
          </NavBarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
