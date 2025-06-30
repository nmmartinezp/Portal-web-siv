import SpringAnimateText from "@/components/animation/SpringAnimateText";
import Image from "next/image";

export default function Culture() {
  return (
    <main className="w-full min-h-[var(--myapp-main-height)] flex flex-col">
      <section className="w-full min-h-[32vh] md:min-h-[52vh] flex items-center justify-center pb-16 pt-[calc(6rem_+_var(--myapp-navbar--height))] md:pt-[calc(4rem_+_var(--myapp-navbar--height))]">
        <div className="h-auto w-4/5 md:w-4/6 grid grid-cols-12 gap-4">
          <div className="h-full col-span-12 md:col-span-7 flex items-center justify-center">
            <h1 className="w-3/4 md:w-full text-center text-3xl md:text-5xl">
              <span className="text-warning font-medium">
                <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
              </span>{" "}
              <SpringAnimateText>
                UN PUEBLO DE PATRIMONIO CULTURAL
              </SpringAnimateText>
            </h1>
          </div>
          <div className="h-full col-span-5 md:col-span-5 flex items-center justify-center py-12 md:py-0">
            <Image
              priority={true}
              src="/logoChiquitania01.svg"
              alt="logo chiquitano siv web"
              width={500}
              height={500}
              className="h-[18vh] md:h-[35vh] w-auto"
            />
          </div>
          <div className="col-span-7 md:col-span-12 w-full h-auto flex items-center justify-center py-12 md:py-8">
            <p className="w-full md:w-3/4 text-sm md:text-lg text-start md:text-center">
              <SpringAnimateText speed={7}>
                San Ignacio de Velasco, cuna de cultura y tradición, es uno de
                los tesoros de la Chiquitanía boliviana. Conserva viva la
                herencia de las misiones jesuíticas a través de su arquitectura
                histórica, celebraciones religiosas y artesanía en madera.
              </SpringAnimateText>
            </p>
          </div>
        </div>
      </section>
      <section>2</section>
    </main>
  );
}
