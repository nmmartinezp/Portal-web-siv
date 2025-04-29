import ScrollReboot from "@components/scrollReboot";
import { useLocation } from "react-router";
import { useRef } from "react";

function AppLayout({ nav, page, footer }) {
  const pathname = useLocation();
  const scrollContainerRef = useRef(null);
  const isHome = pathname.pathname === "/";
  return (
    <div
      ref={!isHome ? scrollContainerRef : null}
      className={`dark text-foreground bg-background h-screen w-full overflow-y-scroll scrollbar-hide`}
    >
      <ScrollReboot scrollRef={scrollContainerRef} />
      {nav}
      <main
        ref={isHome ? scrollContainerRef : null}
        className={`w-full h-[var(--myapp-main-height)] p-0 scrollbar-hide ${
          isHome ? "overflow-y-scroll snap-y snap-mandatory scroll-smooth" : ""
        }`}
      >
        {page}
        <footer
          className={`w-full p-4 bg-default-200 ${isHome ? "snap-start" : ""}`}
        >
          {footer}
        </footer>
      </main>
    </div>
  );
}

export default AppLayout;
