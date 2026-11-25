import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageKitProvider from "@shared/context/ImageKitProvider";

export default function Page() {
  return (
    <ImageKitProvider>
      <main>
        <Hero
          bgImage="/portalsiv/fotos/tradiciones/tallado/tallado02Siv.webp"
          bgAlt="Imagen de tallado de madera para seccion de Cultura"
          SdImage="/portalsiv/frases/frase3.svg"
          SdAlt="Imagen de Frase para seccion de Cultura"
        >
          <Hero.Header
            title="Tradiciones que nos identifican"
            subtitle="NUESTRA CULTURA"
          />
          <Hero.Content>
            La cultura de San Ignacio de Velasco es un mosaico de costumbres,
            musica, danza, fé y tradiciones que se han transmitido de generación
            en generación, manteniendo viva la esencia de nuestro pueblo.
          </Hero.Content>
          <Hero.Footer>
            <Link
              href={"/cultura"}
              className="flex justify-center items-center gap-2 bg-[#EA8522] hover:bg-[#ae651b] text-black max-lg:text-xs font-semibold rounded-3xl px-6 py-2 lg:py-3"
            >
              <span className="max-lg:hidden">
                Explora Nuestras tradiciones
              </span>
              <span className="lg:hidden">Descubrenos</span>
              <ArrowRight className="h-[75%]" />
            </Link>
          </Hero.Footer>
        </Hero>
      </main>
    </ImageKitProvider>
  );
}
