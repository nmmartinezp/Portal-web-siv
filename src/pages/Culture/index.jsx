import CultureLayout from "@layouts/CultureLayout";
import { Link } from "@heroui/react";
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import Article from "@components/Article";
import MenuReference from "@components/MenuReference";
import imagen from "@assets/images/photo/territorioSiv.webp";

function Culture() {
  return (
    <CultureLayout
      banner={
        <div className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center md:justify-end">
            <h2 className="w-3/4 md:w-3/4 text-center text-3xl md:text-5xl">
              <span className="text-warning font-medium">
                <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
              </span>
              <span> </span>
              <SpringAnimateText>
                UN PUEBLO DE PATRIMONIO CULTURAL
              </SpringAnimateText>
            </h2>
          </div>
        </div>
      }
      logo={
        <div className="h-full w-full flex items-center justify-start">
          <img src="/logoChiquitania01.svg" className="h-[90%] md:w-auto" />
        </div>
      }
      description={
        <div className="w-full h-full flex items-center justify-center text-start md:text-center">
          <p className="w-full md:w-2/4 text-sm md:text-lg">
            <SpringAnimateText speed={10}>
              San Ignacio de Velasco, cuna de cultura y tradición, es uno de los
              tesoros de la Chiquitanía boliviana. Conserva viva la herencia de
              las misiones jesuíticas a través de su arquitectura histórica,
              celebraciones religiosas y artesanía en madera.
            </SpringAnimateText>
          </p>
        </div>
      }
    >
      <div className="w-full h-auto flex items-center md:items-start justify-center col-span-12 md:col-span-8 px-4">
        <div className="w-[97%] md:w-3/4">
          <Article
            title="Manos que cuentan historias: artesanía ignaciana"
            img={imagen}
            altImg="imagen"
          >
            <ParagraphContent>
              San Ignacio de Velasco, cuna de cultura y tradición, es uno de los
              tesoros de la Chiquitanía boliviana. Conserva viva la herencia de
              las misiones jesuíticas a través de su arquitectura histórica,
              celebraciones religiosas y artesanía en madera.\nSan Ignacio de
              Velasco, cuna de cultura y tradición, es uno de los tesoros de la
              Chiquitanía boliviana. Conserva viva la herencia de las misiones
              jesuíticas a través de su arquitectura histórica, celebraciones
              religiosas y artesanía en madera.
            </ParagraphContent>
          </Article>
        </div>
      </div>
      <div className="w-full h-auto flex items-center md:items-start justify-center md:justify-start col-span-12 md:col-span-4 px-4">
        <div className="w-[97%] md:w-3/4">
          <MenuReference title="Visitar tambien">
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado
            </Link>
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado historia
            </Link>
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado quien
            </Link>
          </MenuReference>
        </div>
      </div>
      <div className="w-full h-auto flex items-center md:items-start justify-center col-span-12 md:col-span-8 px-4">
        <div className="w-[97%] md:w-3/4">
          <Article
            title="Manos que cuentan historias: artesanía ignaciana"
            img={imagen}
            altImg="imagen"
          >
            <ParagraphContent>
              San Ignacio de Velasco, cuna de cultura y tradición, es uno de los
              tesoros de la Chiquitanía boliviana. Conserva viva la herencia de
              las misiones jesuíticas a través de su arquitectura histórica,
              celebraciones religiosas y artesanía en madera.\nSan Ignacio de
              Velasco, cuna de cultura y tradición, es uno de los tesoros de la
              Chiquitanía boliviana. Conserva viva la herencia de las misiones
              jesuíticas a través de su arquitectura histórica, celebraciones
              religiosas y artesanía en madera.
            </ParagraphContent>
          </Article>
        </div>
      </div>
      <div className="w-full h-auto flex items-center md:items-start justify-center md:justify-start col-span-12 md:col-span-4 px-4">
        <div className="w-[97%] md:w-3/4">
          <MenuReference title="Visitar tambien">
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado
            </Link>
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado historia
            </Link>
            <Link
              showAnchorIcon
              underline="hover"
              color="primary"
              className="py-1"
            >
              Hacia otro lado quien
            </Link>
          </MenuReference>
        </div>
      </div>
    </CultureLayout>
  );
}

export default Culture;
