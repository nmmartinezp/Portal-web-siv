import Hero from "@shared/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageKitProvider from "@shared/context/ImageKitProvider";

export default function Page() {
  return (
    <ImageKitProvider>
      <main>
        <Hero
          bgImage="/portalsiv/fotos/festejos/religionSiv.webp"
          bgAlt="Imagen de Festejos para seccion de Historia"
          SdImage="/portalsiv/frases/frase2.svg"
          SdAlt="Imagen de Frase para seccion de Historia"
        >
          <Hero.Header
            title="Raíces que forjaron un pueblo"
            subtitle="NUESTRA HISTORIA"
          />
          <Hero.Content>
            San Ignacio de Velasco es un lugar donde la historia, la fe y la
            cultura se entrelazan, dando forma a una identidad única en el
            corazon de la Chiquitania.
          </Hero.Content>
          <Hero.Footer>
            <Link
              href={"/cultura"}
              className="flex justify-center items-center gap-2 bg-[#EA8522] hover:bg-[#ae651b] text-black max-lg:text-xs font-semibold rounded-3xl px-6 py-2 lg:py-3"
            >
              <span className="max-lg:hidden">Explora su historia</span>
              <span className="lg:hidden">Mas de la historia</span>
              <ArrowRight className="h-[75%]" />
            </Link>
          </Hero.Footer>
        </Hero>
      </main>
    </ImageKitProvider>
  );
}
