import { ReactNode } from "react";

function Content({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[85dvw] lg:max-w-[30dvw] text-lg max-lg:text-xs">
      {children}
    </p>
  );
}

export default Content;
