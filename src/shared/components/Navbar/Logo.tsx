import { Image } from "@imagekit/next";

function Logo({
  className = "",
  src,
  alt,
  width,
  height,
  loading = "eager",
  title = "",
}: {
  className?: string | undefined;
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "lazy" | "eager" | undefined;
  title: string | undefined;
}) {
  return (
    <div
      className={`lg:h-full w-auto flex max-lg:flex-col lg:justify-start justify-center gap-1 items-center${className}`}
    >
      <Image
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className="h-[60%] lg:h-[40%] xl:h-[75%] w-auto"
      />
      <h2 className="text-white text-xl font-black flex justify-between gap-2">
        {title.split("").map((letter, index) => (
          <span key={index} aria-hidden="true">
            {letter}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Logo;
