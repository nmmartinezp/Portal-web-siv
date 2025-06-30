import Image from "next/image";

function ContentMenu({ children, src, altImg, title, rounded = false }) {
  return (
    <div
      className={`relative w-full h-auto flex flex-col ${
        rounded ? "rounded-xl" : ""
      }`}
    >
      <div className="w-full h-auto relative z-10 flex flex-col items-center justify-center">
        <div className="h-[21vh] md:h-[42vh] w-5/6 md:w-3/4 flex items-center justify-center text-center font-medium text-3xl md:text-5xl">
          <h4>{title}</h4>
        </div>
        <div className="w-4/5 gap-3 grid grid-cols-12 items-start">
          {children}
        </div>
      </div>
      <Image
        priority={true}
        src={src}
        alt={altImg}
        width={500}
        height={500}
        className={`absolute z-0 w-full h-[25vh] md:h-[50vh] object-cover brightness-50 ${
          rounded ? "rounded-xl" : ""
        }`}
        radius="none"
      />
    </div>
  );
}

export default ContentMenu;
