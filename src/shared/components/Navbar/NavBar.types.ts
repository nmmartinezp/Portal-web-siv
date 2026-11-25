import Content from "./Content";
import Item from "./Item";
import ToggleButton from "./ToggleButton";
import Logo from "./Logo";
import { ComponentProps, ReactElement } from "react";

type NavBarProps = {
  children:
    | ReactElement<ComponentProps<typeof Content>>
    | ReactElement<ComponentProps<typeof Item>>
    | ReactElement<ComponentProps<typeof Item>>[]
    | ReactElement<ComponentProps<typeof ToggleButton>>
    | ReactElement<ComponentProps<typeof Logo>>;
  className?: string | undefined;
};

export type { NavBarProps };
