import ScrollReboot from "@components/scrollReboot";
import { useLocation } from "react-router";

function AppLayout({ nav, page, footer }) {
  const pathname = useLocation();
  const isHome = pathname.pathname === "/";
  return (
    <div
      className={`dark text-foreground bg-background h-screen w-full overflow-y-scroll scrollbar-hide`}
    >
      <ScrollReboot />
      {nav}
      <main
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
