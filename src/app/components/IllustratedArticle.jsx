import Link from "next/link";
import Image from "next/image";
import { Divider } from "@heroui/react";

function IllustratedArticle({ id, children, title, img, altImg }) {
  const articleId = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[:]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  return (
    <article
      id={articleId}
      key={id}
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <h2 className="w-full pb-4 text-start text-warning text-3xl md:text-5xl">
        {`${title} `}
        <Link
          href={`#${articleId}`}
          className="text-primary-300 opacity-50 hover:underline"
        >
          #
        </Link>
      </h2>
      <div className="w-full py-2 text-medium md:text-lg">{children}</div>
      <Divider className="my-8" />
      <div className="w-full h-[25vh] md:h-[41vh]">
        <Image
          priority={true}
          src={img}
          alt={altImg}
          width={500}
          height={500}
          className="w-full h-full rounded-md object-cover brightness-90 hover:brightness-50"
        />
      </div>
      <Divider className="my-8" />
    </article>
  );
}

export default IllustratedArticle;
