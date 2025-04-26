import { NavbarItem, NavbarMenuItem, Button } from "@heroui/react";

function NavBarItem({ children, variant, onNavigate }) {
  return variant === "mobile" ? (
    <NavbarMenuItem>
      <Button className="w-full font-bold" color="primary" onPress={onNavigate}>
        {children}
      </Button>
    </NavbarMenuItem>
  ) : (
    <NavbarItem>
      <Button
        className="font-bold"
        size="lg"
        variant="light"
        onPress={onNavigate}
      >
        {children}
      </Button>
    </NavbarItem>
  );
}

export default NavBarItem;
