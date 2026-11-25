"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const content = {
  es: {
    eyebrow: "ERROR 404",
    title: "¡Parece que te has perdido!",
    description:
      "El camino que buscas no se encuentra por aquí. Pero todavía quedan muchos lugares por descubrir.",
    suggestion: "Hay mucho por explorar",
    subtitle: "Descubre la historia, cultura y paisajes de San Ignacio.",
    home: "Volver al inicio",
    explore: "Explorar destinos",
  },
  en: {
    eyebrow: "ERROR 404",
    title: "Looks like you're lost!",
    description:
      "The path you're looking for isn't here. But there are still plenty of places to discover.",
    suggestion: "There's much to explore",
    subtitle: "Discover the history, culture and landscapes of San Ignacio.",
    home: "Back to home",
    explore: "Explore destinations",
  },
};

function NotFound() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";
  const t = content[locale];

  return (
    <main className="relative isolate flex h-dvh items-center justify-center overflow-hidden bg-[#F3F0E7] px-5 py-20 text-[#21483D]">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7949]">
          {t.eyebrow}
        </span>

        <div className="relative mb-5">
          <span className="select-none text-[clamp(9rem,25vw,16rem)] font-bold leading-none tracking-tighter text-[#315B4B]/10">
            404
          </span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {t.title}
        </h1>

        <p className="pt-5 pb-2 max-w-lg text-base leading-relaxed text-[#647267]">
          {t.description}
        </p>

        <div className="pt-8 flex w-full max-w-md flex-col gap-3 rounded-2xl border border-[#315B4B]/10 bg-white/50 p-5">
          <span className="text-lg font-semibold">{t.suggestion}</span>
          <p className="text-sm leading-relaxed text-[#647267]">{t.subtitle}</p>
        </div>

        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            // href={`/${locale}`}
            href={`/`}
            replace
            className="rounded-full bg-[#315B4B] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#21483D]"
          >
            {t.home}
          </Link>

          <Link
            // href={`/${locale}/turismo`}
            href={`/`}
            replace
            className="rounded-full border border-[#315B4B]/25 px-7 py-3.5 text-sm font-semibold text-[#315B4B] transition-colors hover:bg-[#315B4B]/10"
          >
            {t.explore}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
