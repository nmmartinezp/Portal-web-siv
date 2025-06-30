import { HeroUIProvider } from "@heroui/react";
import { oswald } from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  icons: {
    icon: "/favorite.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scrollbar-hide overflow-x-hidden">
      <body className={`${oswald.className} scrollbar-hide overflow-x-hidden`}>
        <HeroUIProvider>
          <div
            className={`dark text-foreground bg-background min-w-[100vw] min-h-[100vh] p-0 m-0 overflow-x-hidden scrollbar-hide`}
          >
            {children}
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
