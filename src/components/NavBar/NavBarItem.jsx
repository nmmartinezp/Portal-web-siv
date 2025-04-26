import { NavbarItem, NavbarMenuItem, Button } from "@heroui/react";
import { Link } from "react-router";

function NavBarItem({ children, variant, to }) {
  return variant === "mobile" ? (
    <NavbarMenuItem>
      <Button className="w-full" color="primary">
        <Link to={to}>{children}</Link>
      </Button>
    </NavbarMenuItem>
  ) : (
    <NavbarItem>
      <Button size="lg" variant="light">
        <Link to={to}>{children}</Link>
      </Button>
    </NavbarItem>
  );
}

export default NavBarItem;
