import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import data from "@data/metadata.json";

function HeadUpdater() {
  const location = useLocation();
  const path = location.pathname;

  const { title, description } = data[path] || {
    title: "San Ignacio de Velasco",
    description: "Municipio turístico y cultural de Bolivia.",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default HeadUpdater;
