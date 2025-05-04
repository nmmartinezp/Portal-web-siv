import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function ScrollReboot({ scrollRef }) {
  const pathname = useLocation();
  const [backRoute, setBackRoute] = useState(pathname.pathname);

  useEffect(() => {
    const move =
      backRoute === "/" ? false : pathname.pathname.includes(backRoute);
    if (
      document.activeElement &&
      typeof document.activeElement.blur === "function"
    ) {
      document.activeElement.blur();
    }
    if (!move) {
      if (scrollRef?.current) {
        scrollRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      setBackRoute(pathname.pathname);
    }
  }, [pathname, scrollRef]);

  return null;
}

export default ScrollReboot;
