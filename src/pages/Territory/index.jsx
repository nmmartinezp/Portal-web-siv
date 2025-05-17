import TerritoryLayout from "@layouts/TerritoryLayout";
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import MenuExplore from "@components/MenuExplore";
import CardExplore from "@components/CardExplore";
import Article from "@components/Article";
import ArticleData from "@components/ArticleData";
import useTerritoryPageData from "@hooks/useTerritoryPageData";
import velascoMap from "@assets/images/maps/provinciaVelascoMap.webp";
import parqueNKMImg from "@assets/images/photo/parquenoelkempffmercado.webp";
import miradorCristoImg from "@assets/images/photo/miradorCristo02Siv.webp";
import catedralImg from "@assets/images/photo/catedral03Siv.webp";
import cabildo from "@assets/images/photo/cabildo1Siv.webp";

function Territory() {
  const data = useTerritoryPageData();
  return (
    <TerritoryLayout
      banner={
        <div className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="w-3/4 md:w-3/4 text-center text-3xl md:text-5xl">
              <span className="text-warning font-medium">
                <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
              </span>
              <span> </span>
              <SpringAnimateText>TERRITORIO CHIQUITANO</SpringAnimateText>
            </h2>
          </div>
        </div>
      }
      description={
        <div className="w-full h-full flex items-center justify-center text-center">
          <p className="w-full md:w-2/4 text-sm md:text-lg">
            <SpringAnimateText speed={10}>
              San Ignacio de Velasco - Jose Miguel de Velasco - Santa Cruz -
              Bolivia
            </SpringAnimateText>
          </p>
        </div>
      }
      content2={
        <div className="w-[95%] md:w-4/5 h-auto my-8 flex items-center justify-center">
          <MenuExplore title="Explora más de San Ignacio de Velasco">
            <div className="col-span-9 md:col-span-6">
              <CardExplore
                title="Historia"
                to={"/historia/parque-noel-kempff-mercado"}
                image={parqueNKMImg}
              >
                Un parque de legado natural que guarda la historia de un gran
                personaje, Noel Kempff Mercado
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              <CardExplore
                title="Turismo"
                to={"/turismo/el-mirador-del-cristo"}
                image={miradorCristoImg}
              >
                Uno de los mejores miradores del municipio de San Ignacio, con
                una gran vista a la represa guapomó
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              <CardExplore
                title="Historia"
                to={"/historia/catedral-de-san-ignacio-de-velasco"}
                image={catedralImg}
              >
                La creación de la catedral por misioneros jesuítas que dejarían
                un legado de años
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              <CardExplore
                title="Cultura"
                toHashLink={"/cultura#cabildo-indigenal-voz-y-raiz-del-pueblo"}
                image={cabildo}
              >
                Una institución que preserva la cultura y tradiciones de un
                pueblo que lucha por su identidad
              </CardExplore>
            </div>
          </MenuExplore>
        </div>
      }
    >
      <div
        id={`map-01`}
        key={`map-01`}
        className="col-span-12 w-full h-auto flex items-center justify-center"
      >
        <div className="w-[95%] md:w-2/4 flex py-8 items-center justify-center border-b-1 border-foreground-300">
          <img
            src={velascoMap}
            alt="mapa territorial provincia velasco"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      {data.map((item, index) =>
        item.image.src ? (
          <div
            id={`cart-${index}`}
            key={`cart-${index}`}
            className="col-span-12 w-full h-auto flex items-center justify-center"
          >
            <div className="w-[95%] md:w-2/4">
              <Article
                id={`art-${index}`}
                title={item.title}
                img={item.image.src}
                altImg={item.image.alt}
              >
                <ParagraphContent>{item.content}</ParagraphContent>
              </Article>
            </div>
          </div>
        ) : (
          <div
            id={`cart-${index}`}
            key={`cart-${index}`}
            className="col-span-12 w-full h-auto my-4 md:my-10 flex items-center justify-center"
          >
            <div className="w-[95%] md:w-2/4">
              <ArticleData id={`art-${index}`} title={item.title}>
                <ParagraphContent>{item.content}</ParagraphContent>
              </ArticleData>
            </div>
          </div>
        )
      )}
    </TerritoryLayout>
  );
}

export default Territory;
