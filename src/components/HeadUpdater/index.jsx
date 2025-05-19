import { useLocation } from "react-router";
import { Helmet } from "react-helmet";
import data from "@data/metadata.json";

function HeadUpdater() {
  const location = useLocation();
  const path = location.pathname;
  const meta = data[path] || data["/"];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.canonical} />
      <meta name="description" content={meta.description} />
      {meta.schema && (
        <script type="application/ld+json">
          {JSON.stringify(meta.schema)}
        </script>
      )}
    </Helmet>
  );
}

export default HeadUpdater;
