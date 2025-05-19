import ScrollReboot from "@components/ScrollReboot";
import { useScrollToHash } from "@hooks/useScrollToHash";
import { useLocation } from "react-router";
import { useRef } from "react";

function AppLayout({ nav, page, footer }) {
  const pathname = useLocation();
  const scrollContainerRef = useRef(null);
  const isHome = pathname.pathname === "/";
  useScrollToHash(0, 0, "#appMain");
  return (
    <div
      id="appMain"
      ref={!isHome ? scrollContainerRef : null}
      className={`dark text-foreground bg-background h-screen w-full overflow-y-scroll scrollbar-hide`}
    >
      <ScrollReboot scrollRef={scrollContainerRef} />
      {nav}
      <main
        ref={isHome ? scrollContainerRef : null}
        className={`w-full h-[var(--myapp-main-height)] p-0 scrollbar-hide overflow-x-hidden ${
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
