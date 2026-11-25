"use client";
import { NavBarProvider } from "@shared/context/NavbarProvider";
import NavBar from "@shared/components/Navbar";
import paths from "./paths";

function Header() {
  return (
    <NavBarProvider>
      <header className="lg:fixed w-full lg:h-[12dvh] top-0 z-999">
        <NavBar className="lg:px-18">
          <NavBar.ToggleButton />
          <NavBar.Logo
            src="/logo.svg"
            alt="Logo de la pagina deutsch lernen"
            width={2000}
            height={2000}
          />
          <NavBar.Content>
            {paths.map((path) => (
              <NavBar.Item
                key={"path-" + path.name}
                href={path.href}
                className="max-lg:bg-black/60 max-lg:text-[#f6c82c] max-lg:text-2xl"
              >
                {path.name}
              </NavBar.Item>
            ))}
          </NavBar.Content>
        </NavBar>
      </header>
    </NavBarProvider>
  );
}

export default Header;
