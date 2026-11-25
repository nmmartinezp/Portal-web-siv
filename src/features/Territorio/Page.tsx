import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageKitProvider from "@shared/context/ImageKitProvider";

export default function Page() {
  return (
    <ImageKitProvider>
      <main>
        <Hero
          bgImage="/portalsiv/fotos/lugares/plaza%20principal/plazaPrincipalSiv.webp"
          bgAlt="Imagen de la plza principal de San Ignacio de Velasco durante la noche"
          SdImage="/portalsiv/frases/frase4.svg"
          SdAlt="Imagen de Frase para seccion de Territorio"
        >
          <Hero.Header
            title="Un lugar de paisajes, vida y biodiversidad"
            subtitle="NUESTRA TERRITORIO"
          />
          <Hero.Content>
            San Ignacio de Velasco se encuentra en el corazón de la Chiquitania
            boliviana, una región rica en naturaleza, cultura y gente
            trabajadora que mantiene viva su esencia.
          </Hero.Content>
          <Hero.Footer>
            <Link
              href={"/cultura"}
              className="flex justify-center items-center gap-2 bg-[#EA8522] hover:bg-[#ae651b] text-black max-lg:text-xs font-semibold rounded-3xl px-6 py-2 lg:py-3"
            >
              <span className="max-lg:hidden">Explora Nuestro Territorio</span>
              <span className="lg:hidden">Descubrenos</span>
              <ArrowRight className="h-[75%]" />
            </Link>
          </Hero.Footer>
        </Hero>
      </main>
    </ImageKitProvider>
  );
}
