import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageKitProvider from "@shared/context/ImageKitProvider";

export default function Page() {
  return (
    <ImageKitProvider>
      <main>
        <Hero
          bgImage="/portalsiv/fotos/lugares/parque%20noel%20kempf/parquenoelkempffmercado.webp"
          bgAlt="Imagen de Cascadas en el Parque Noel Kempff"
          SdImage="/portalsiv/frases/frase5.svg"
          SdAlt="Imagen de Frase para seccion de Turismo"
        >
          <Hero.Header
            title="Naturaleza, cultura e Historia en un solo lugar"
            subtitle="TURISMO EN SAN IGNACIO DE VELASCO"
          />
          <Hero.Content>
            Descubre un destino único donde la cultura, la tradición y los
            paisajes se unen para ofrecerte experiencias inolvidables en el
            corazón de la Chiquitania boliviana.
          </Hero.Content>
          <Hero.Footer>
            <Link
              href={"/cultura"}
              className="flex justify-center items-center gap-2 bg-[#EA8522] hover:bg-[#ae651b] text-black max-lg:text-xs font-semibold rounded-3xl px-6 py-2 lg:py-3"
            >
              <span className="max-lg:hidden">Viaja mas</span>
              <span className="lg:hidden">Viaja mas</span>
              <ArrowRight className="h-[75%]" />
            </Link>
          </Hero.Footer>
        </Hero>
      </main>
    </ImageKitProvider>
  );
}
