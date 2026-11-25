import { ReactNode } from "react";

function Footer({ children }: { children: ReactNode }) {
  return <div className="flex gap-5">{children}</div>;
}

export default Footer;
