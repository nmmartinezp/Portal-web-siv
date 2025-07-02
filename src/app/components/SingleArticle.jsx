import Link from "next/link";

function SingleArticle({ children, title }) {
  const articleId = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[:]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
  return (
    <article id={articleId} className="w-full h-auto grid grid-cols-12 gap-4">
      <section className="col-span-12 xl:col-span-4 flex gap-1 items-center justify-start text-3xl md:text-5xl py-4">
        <h3 className="text-start text-warning">{title}</h3>
        <Link
          href={`#${articleId}`}
          className="text-primary-300 opacity-25 hover:underline hover:opacity-90"
        >
          #
        </Link>
      </section>
      <section className="col-span-12 xl:col-span-8 pl-0 md:pl-6 py-6 flex items-center justify-center border-foreground-200 border-l-0 md:border-l border-t md:border-t-0">
        {children}
      </section>
    </article>
  );
}

export default SingleArticle;
