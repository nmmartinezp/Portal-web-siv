import { Image } from "@heroui/react";

function MenuContent({ id, children, image, altImg, span }) {
  return (
    <div id={id} key={id} className="relative w-full h-auto flex flex-col my-8">
      <div className="w-full h-auto relative z-10 flex flex-col items-center justify-center">
        <div className="h-[21vh] md:h-[42vh] w-5/6 md:w-3/4 flex items-center justify-center text-center font-medium text-3xl md:text-5xl">
          <h4>{span}</h4>
        </div>
        <div className="w-4/5 gap-3 grid grid-cols-12 items-start">
          {children}
        </div>
      </div>
      <Image
        removeWrapper
        src={image}
        alt={altImg}
        className="absolute z-0 w-full h-[25vh] md:h-[50vh] object-cover brightness-50"
        radius="none"
      />
    </div>
  );
}

export default MenuContent;
