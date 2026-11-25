import { ReactNode } from "react";

function Content({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="h-full flex justify-center items-center w-auto py-4 overflow-hidden">
        <ul className="h-full max-lg:w-full w-auto flex max-lg:flex-col justify-center items-center gap-4 text-white font-semibold lg:px-4">
          {children}
        </ul>
      </nav>
    </>
  );
}

export default Content;
