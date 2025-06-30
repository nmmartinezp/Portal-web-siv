import { Divider } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

function ContentTarjet({
  id,
  children,
  src,
  altImg,
  title,
  href,
  scrollNavigate = true,
}) {
  return (
    <article
      id={id}
      key={id}
      className="w-auto h-full flex flex-col items-center justify-center"
    >
      <Link
        href={href}
        scroll={scrollNavigate}
        className="w-full h-[11vh] md:h-[20vh]"
      >
        <Image
          priority={true}
          alt={altImg}
          src={src}
          width={500}
          height={500}
          className="w-full h-[11vh] md:h-[20vh] object-cover brightness-90 rounded-md cursor-pointer hover:brightness-50"
        />
      </Link>
      <div className="w-full h-auto py-2 text-left text-warning-400">
        <h5>{title}</h5>
      </div>
      <div className="w-full h-full text-justify">
        <Link href={href} scroll={scrollNavigate}>
          <p className="cursor-pointer hover:text-warning-400">{children}</p>
        </Link>
      </div>
      <Divider className="my-4 bg-foreground-300" />
    </article>
  );
}

export default ContentTarjet;
