import { Button } from "@heroui/react";
import Link from "next/link";

function Tarjet({ index, title, src, description, href }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full opacity-0 slide-${index}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.6]"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="relative h-full bg-black/10 flex flex-col justify-center sm:justify-end items-center sm:items-start text-white p-4 sm:p-20">
        <div className="max-w-xs md:max-w-xl text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-warning-400">
            {title}
          </h2>
          <p className="text-md md:text-xl mb-6 text-white/90">{description}</p>
          <Button color="primary" size="lg" className="p-0">
            <Link
              href={href}
              className="w-full h-full px-4 flex items-center justify-center"
            >
              Ver más
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Tarjet;
