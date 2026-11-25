import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { ComponentProps, ReactElement } from "react";

type HeroProps = {
  children: ReactElement<
    | ComponentProps<typeof Content>
    | ComponentProps<typeof Footer>
    | ComponentProps<typeof Header>
  >[];
  bgImage?: string | undefined;
  bgAlt?: string | undefined;
  SdImage?: string | undefined;
  SdAlt?: string | undefined;
  className?: string | undefined;
};

export type { HeroProps };
