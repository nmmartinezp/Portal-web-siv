import { Divider } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

function ExplorerCard({ id, children, href, image, title, altImage }) {
  return (
    <article id={id} className="w-full h-full flex items-center justify-center">
      <Link href={href} className="w-[35%] md:w-[45%] h-[10vh] md:h-[18vh]">
        <Image
          priority={true}
          src={image}
          alt={altImage}
          width={500}
          height={500}
          className="w-full h-full object-cover brightness-90 rounded-md cursor-pointer hover:brightness-50"
        />
      </Link>

      <section className="w-[65%] md:w-[55%] h-full px-4 flex flex-col items-start justify-start">
        <div className="w-auto h-auto py-0 text-left text-warning-400">
          <h5>{title}</h5>
        </div>
        <Divider className="my-1 bg-foreground-300" />
        <div className="w-auto h-full text-justify">
          <Link href={href}>
            <p className="cursor-pointer text-foreground text-xs md:text-medium hover:text-warning-400">
              {children}
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}

export default ExplorerCard;
