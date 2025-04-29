import { useEffect } from "react";
import { useLocation } from "react-router";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case "/":
        document.title = "San Ignacio de Velasco";
        break;
      case "/historia":
        document.title = "Historia";
        break;
      case "/cultura":
        document.title = "Cultura";
        break;
      case "/territorio":
        document.title = "Territorio";
        break;
      case "/turismo":
        document.title = "Turismo";
        break;
      default:
        document.title = "San Ignacio de Velasco";
        break;
    }
  }, [location]);

  return null;
}

export default TitleUpdater;
