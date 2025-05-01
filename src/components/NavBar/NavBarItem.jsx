import { NavbarItem, NavbarMenuItem, Button } from "@heroui/react";

function NavBarItem({ children, variant, onNavigate }) {
  return variant === "mobile" ? (
    <NavbarMenuItem>
      <Button className="w-full font-bold bg-warning-600" onPress={onNavigate}>
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
