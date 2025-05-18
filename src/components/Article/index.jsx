import { HashLink } from "react-router-hash-link";
import { Divider } from "@heroui/react";

function Article({ id, children, title, img, altImg }) {
  const articleId = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[:]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  return (
    <div
      id={articleId}
      key={id}
      className="w-full h-auto pt-[7vh] px-4 flex flex-col items-center justify-center"
    >
      <h2 className="w-full py-4 text-start text-warning text-3xl md:text-5xl">
        {`${title} `}
        <HashLink
          smooth
          to={`#${articleId}`}
          className="text-primary-300 opacity-50 hover:underline"
        >
          #
        </HashLink>
      </h2>
      <div className="w-full py-2 text-medium md:text-lg">{children}</div>
      <Divider className="my-8" />
      <div className="w-full h-[25vh] md:h-[41vh]">
        <img
          src={img}
          alt={altImg}
          loading="lazy"
          className="w-full h-full rounded-md object-cover brightness-90 hover:brightness-50"
        />
      </div>
      <Divider className="my-8" />
    </div>
  );
}

export default Article;
