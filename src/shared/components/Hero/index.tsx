import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import { HeroProps } from "./Hero.types";

function Hero({
  children,
  className = "",
  bgImage = "",
  bgAlt = "",
  SdImage = "",
  SdAlt = "",
}: HeroProps) {
  return (
    <section className={`h-[50dvh] lg:h-[82dvh] w-full ${className}`}>
      <div className="relative w-full h-full bg-gradient-to-r from-[#0b1117] via-[#0b1117ad] to-[#0b111700]">
        <Image
          src={bgImage}
          alt={bgAlt}
          width={5000}
          height={2000}
          loading={"eager"}
          className="-z-20 absolute w-full h-full"
        />
        {SdImage == "" ? (
          <></>
        ) : (
          <Image
            src={SdImage}
            alt={SdAlt}
            width={300}
            height={300}
            loading={"eager"}
            className="absolute max-lg:hidden top-1/2 right-0 -translate-x-1/3 -translate-y-2/3 -rotate-20 brightness-95"
          />
        )}

        <div className="w-full h-full flex justify-start items-center">
          <div className="max-w-[90dvw] lg:max-w-[50dvw] h-full flex flex-col gap-4 justify-center items-start pl-7 lg:pl-20 text-white">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.Header = Header;
Hero.Content = Content;
Hero.Footer = Footer;

export default Hero;
