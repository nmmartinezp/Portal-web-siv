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
      <section className="w-full flex gap-1 items-center justify-start text-3xl md:text-5xl pb-4">
        <h2 className="text-start text-warning">{`${title} `}</h2>
        <Link
          href={`#${articleId}`}
          className="text-primary-300 opacity-25 hover:underline hover:opacity-90"
        >
          #
        </Link>
      </section>

      <section className="w-full py-2 text-medium md:text-lg">
        {children}
      </section>
      <Divider className="my-8" />
      <section className="w-full h-[25vh] md:h-[41vh]">
        <Image
          priority={true}
          src={img}
          alt={altImg}
          width={500}
          height={500}
          className="w-full h-full rounded-md object-cover brightness-90 hover:brightness-50"
        />
      </section>
      <Divider className="my-8" />
    </article>
  );
}

export default IllustratedArticle;
