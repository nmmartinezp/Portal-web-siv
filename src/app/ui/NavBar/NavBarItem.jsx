import { NavbarItem, NavbarMenuItem, Button } from "@heroui/react";
import Link from "next/link";

function NavBarItem({ id, children, variant, toHref, onPress }) {
  const Item = variant === "mobile" ? NavbarMenuItem : NavbarItem;
  const handleClick = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
  };
  return (
    <Item id={id} key={id}>
      <Button
        id={`${id}-btn`}
        key={`${id}-btn`}
        onPress={handleClick}
        className={`font-bold p-0 ${
          variant === "mobile" ? "w-full bg-warning-600" : ""
        }`}
        size={variant !== "mobile" ? "lg" : "md"}
        variant={variant === "mobile" ? "solid" : "light"}
      >
        <Link
          id={`${id}-link`}
          key={`${id}-link`}
          href={toHref}
          className="w-full h-full flex justify-center items-center px-4"
        >
          {children}
        </Link>
      </Button>
    </Item>
  );
}

export default NavBarItem;
