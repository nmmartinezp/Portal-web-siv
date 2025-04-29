import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollReboot() {
  const pathname = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollReboot;
