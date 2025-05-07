import TerritoryLayout from "@layouts/TerritoryLayout";
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import MenuExplore from "@components/MenuExplore";
import CardExplore from "@components/CardExplore";
import Article from "@components/Article";
import ArticleData from "@components/ArticleData";
import useTerritoryPageData from "@hooks/useTerritoryPageData";
import imagen from "@assets/images/photo/represaSiv.webp";

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
              <CardExplore title="como estas" to={"/historia"} image={imagen}>
                Hola mundo
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              {" "}
              <CardExplore title="como estas" to={"/historia"} image={imagen}>
                Hola mundo
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              {" "}
              <CardExplore title="como estas" to={"/historia"} image={imagen}>
                Hola mundo
              </CardExplore>
            </div>
            <div className="col-span-9 md:col-span-6">
              {" "}
              <CardExplore title="como estas" to={"/historia"} image={imagen}>
                Hola mundo
              </CardExplore>
            </div>
          </MenuExplore>
        </div>
      }
    >
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
