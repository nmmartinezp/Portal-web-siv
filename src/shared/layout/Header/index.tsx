"use client";
import { NavBarProvider } from "@shared/context/NavbarProvider";
import ImageKitProvider from "@shared/context/ImageKitProvider";
import NavBar from "@shared/components/Navbar";
import paths from "./paths";

function Header() {
  return (
    <ImageKitProvider>
      <NavBarProvider>
        <header className="lg:fixed w-full lg:h-[12dvh] top-0 z-999">
          <NavBar className="lg:px-18">
            <NavBar.ToggleButton />
            <NavBar.Logo
              src="/portalsiv/logos/logoChiquitania01.svg"
              alt="Logo de angel tallado de la pagina web Portal SIV"
              width={2000}
              height={2000}
              title="Portal Siv"
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
    </ImageKitProvider>
  );
}

export default Header;
