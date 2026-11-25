import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main>
      <Hero
        bgImage="/Cochem Germany.webp"
        bgAlt="primer alt"
        SdImage="/phrase.svg"
        SdAlt="segundo alt"
      >
        <Hero.Header
          title="Historia, cultura y naturaleza en un solo lugar"
          subtitle="SAN IGNACIO DE VELASCO"
        />
        <Hero.Content>
          Descubre la esencia de un pueblo que conserva sus raices, su gente y
          sus tradiciones.
        </Hero.Content>
        <Hero.Footer>
          <Link
            href={"/lecciones"}
            className="flex justify-center items-center gap-2 bg-[#f6c82c] hover:bg-[#f6c72cc2] text-black max-lg:text-xs font-semibold rounded-3xl px-4 py-2 lg:py-3"
          >
            <span className="max-lg:hidden">Explora el pueblo</span>
            <span className="lg:hidden">Mas del pueblo</span>
            <ArrowRight className="h-[75%]" />
          </Link>
        </Hero.Footer>
      </Hero>
    </main>
  );
}
