import Image from "next/image";

function Logo({
  className = "",
  src,
  alt,
  width,
  height,
  loading = "eager",
}: {
  className?: string | undefined;
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "lazy" | "eager" | undefined;
}) {
  return (
    <div
      className={`lg:h-full w-auto max-lg:py-8 flex lg:justify-center justify-start items-center${className}`}
    >
      <Image
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className="h-[70%] lg:h-[40%] xl:h-[75%] lg:w-auto max-lg:pr-16 max-lg:pl-4"
      />
    </div>
  );
}

export default Logo;
