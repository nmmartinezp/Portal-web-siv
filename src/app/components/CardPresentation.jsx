import { Button, Divider } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import MotionToX from "./animation/MotionToX";

function CardPresentation({
  title,
  src,
  children,
  href,
  altSrc,
  direction = "right",
  animation = false,
}) {
  const ImagePanel = () => (
    <div className="h-auto md:h-full p-2 md:p-6 col-span-12 md:col-span-5 flex items-center justify-center">
      <MotionToX direction={direction} animate={animation}>
        <div className="w-full h-[80%]">
          <Image
            src={src}
            alt={altSrc}
            loading="lazy"
            className="w-full h-full z-10 object-cover rounded-xl brightness-90 backdrop-blur-sm"
            width={500}
            height={500}
          />
        </div>
      </MotionToX>
    </div>
  );
  const PresentationPanel = () => (
    <div
      className={`h-auto md:h-full p-2 ${
        direction === "right"
          ? "md:py-16 md:pl-16"
          : direction === "left"
          ? "md:py-16 md:pr-16"
          : ""
      } col-span-12 md:col-span-7 flex flex-col items-center md:items-start justify-center`}
    >
      <MotionToX
        direction={direction === "right" ? "left" : "right"}
        animate={animation}
        items="start"
      >
        <h2 className="w-full pb-4 md:pb-6 text-center md:text-start text-3xl md:text-5xl text-warning-300 font-medium">
          {title}
        </h2>
        <Divider className="mb-6" />
        <div className="w-full text-justify md:text-xl">{children}</div>
        <Divider className="my-6" />
        <Button color="primary" size="lg" className="p-0 w-full md:w-auto">
          <Link
            href={href}
            className="w-full h-full px-4 flex items-center justify-center"
          >
            Explorar
          </Link>
        </Button>
      </MotionToX>
    </div>
  );
  return (
    <article className="w-full h-full grid grid-cols-12">
      {direction === "right" ? (
        <>
          <ImagePanel />
          <PresentationPanel />
        </>
      ) : direction === "left" ? (
        <>
          <PresentationPanel />
          <ImagePanel />
        </>
      ) : (
        <></>
      )}
    </article>
  );
}

export default CardPresentation;
