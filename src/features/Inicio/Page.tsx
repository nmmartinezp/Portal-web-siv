import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageKitProvider from "@shared/context/ImageKitProvider";

export default function Page() {
  return (
    <ImageKitProvider>
      <main>
        <Hero
          bgImage="/portalsiv/fotos/lugares/iglesia%20catedral/catedralSiv.webp"
          bgAlt="Iglesia Catedral de San Ignacio de Velasco"
          SdImage="/portalsiv/frases/frase1.svg"
          SdAlt="Imagen de Frase para seccion de bienvenida"
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
              href={"/cultura"}
              className="flex justify-center items-center gap-2 bg-[#EA8522] hover:bg-[#ae651b] text-black max-lg:text-xs font-semibold rounded-3xl px-6 py-2 lg:py-3"
            >
              <span className="max-lg:hidden">Explora el pueblo</span>
              <span className="lg:hidden">Mas del pueblo</span>
              <ArrowRight className="h-[75%]" />
            </Link>
          </Hero.Footer>
        </Hero>
      </main>
    </ImageKitProvider>
  );
}
