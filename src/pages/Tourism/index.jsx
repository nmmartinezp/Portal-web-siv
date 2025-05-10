import TourismLayout from "@layouts/TourismLayout";
import CardPageLayout from "@layouts/CardPageLayout";
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import MenuContent from "@components/MenuContent";
import CardReference from "@components/CardReference";
import CardContent from "@components/CardContent";
import {
  Card,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import useTourismPageData from "@hooks/useTourismPageData";
import plazaPrImg from "@assets/images/photo/plazaPrincipalSiv.webp";
import sanIgnacioImg from "@assets/images/photo/territorioSiv.webp";
import represaImg from "@assets/images/photo/represa02Siv.webp";
import plazaPrincipalImg from "@assets/images/photo/plazaPrincipal02Siv.webp";
import catedralImg from "@assets/images/photo/catedral04Siv.webp";

function Tourism() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useTourismPageData();
  const { localization } = useParams();
  const navigate = useNavigate();
  const [dataModal, setDataModal] = useState({
    title: "",
    images: [],
    content: "",
    localization: "",
  });
  const columns = 12;

  useEffect(() => {
    if (localization) {
      const index = data.findIndex(
        (entry) => entry.identifier === localization
      );
      if (index !== -1) {
        setDataModal({
          title: data[index].title,
          images: data[index].images,
          content: data[index].content,
          localization: data[index].locLink,
        });
        onOpen();
      }
    }
  }, [localization]);

  const handleOpen = (index) => {
    navigate(`/turismo/${data[index].identifier}`);
  };

  const handleClose = () => {
    onClose();
    navigate("/turismo");
  };
  return (
    <TourismLayout
      banner={
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center">
          <h2 className="w-3/4 md:w-2/4 py-8 md:py-0 text-center text-3xl md:text-5xl">
            <span className="text-warning font-medium">
              <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
            </span>
            <span> </span>
            <SpringAnimateText>
              UN VIAJE ENTRE TRADICIÓN Y BIODIVERSIDAD
            </SpringAnimateText>
          </h2>
          <img
            src="/destino.svg"
            className="w-auto h-[15vh] md:h-2/3 object-cover"
          />
        </div>
      }
      content2={
        <>
          <MenuContent
            span={"Aprende mas de la historia de este municipio"}
            image={plazaPrImg}
            altImg="Plaza 31 junto a la catedral de san ignacio de velasco"
          >
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Historia"
                image={sanIgnacioImg}
                to={"/historia/historia-de-san-ignacio-de-velasco"}
              >
                Un pueblo con un pasado creado a partir de una cultura indígena
                y misional, pasado viviente
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Historia"
                image={represaImg}
                to={"/historia/represa-guapomo"}
              >
                Un tesoro de agua que sustento la vida histórica de un pueblo
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Historia"
                image={plazaPrincipalImg}
                to={"/historia/plaza-31-de-julio"}
              >
                Plaza que fue construida en el inicio de un legado misional, que
                se convertiría en un centro de historias ignacianas
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Historia"
                image={catedralImg}
                altImg="catedral de san ignacio de velasco"
                to={"/historia/catedral-de-san-ignacio-de-velasco"}
              >
                Iglesia construida para convertirse en el centro religioso
                misional, que marcaría el inicio de una época
              </CardReference>
            </div>
          </MenuContent>
          <div className="w-full flex items-center justify-center mb-8">
            <Button
              onPress={() => {
                navigate("/historia");
              }}
              className="p-6 text-xl bg-warning-300"
              size="lg"
              radius="md"
            >
              Aprende sobre la historia
            </Button>
          </div>
        </>
      }
    >
      <>
        <div className="w-full mt-10 md:mt-6 h-full flex flex-col md:flex-row items-center justify-center">
          <h3 className="w-3/4 md:w-2/4 py-2 md:py-2 text-center text-3xl md:text-5xl">
            <span>¿Qué puedes </span>
            <span className="text-warning font-medium">visitar?</span>
          </h3>
        </div>
        <CardPageLayout cols={`grid-cols-${columns}`}>
          {data.map((item, index) => (
            <CardContent
              onPress={() => {
                handleOpen(index);
              }}
              animation
              atlImage={item.images[0].alt}
              description={item.description}
              src={item.images[0].src}
              cols={`col-span-${columns}`}
              col={`md:col-span-${item.space}`}
              key={`cardloc-${index}`}
              id={`cardloc-${index}`}
            >
              {item.title}
            </CardContent>
          ))}
        </CardPageLayout>
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size="5xl"
          placement="center"
          scrollBehavior="inside"
          backdrop="blur"
          classNames={{
            body: "py-6 ",
            base: "border-foreground-200 dark text-foreground",
            header: "border-b-[1px] border-foreground-200",
            footer: "border-t-[1px] border-foreground-200",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(handleClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {dataModal.title}
                </ModalHeader>
                <ModalBody className="dark">
                  <div className="w-full h-[50vh] md:h-[30vh] gap-2 grid grid-cols-12">
                    {dataModal.images.map((img, index) => (
                      <Card
                        key={`cardmodal-${index}`}
                        className="col-span-12 md:col-span-4 h-full"
                      >
                        <Image
                          removeWrapper
                          alt={img.alt}
                          className="z-0 w-full h-full object-cover"
                          src={img.src}
                        />
                      </Card>
                    ))}
                  </div>
                  <ParagraphContent>{dataModal.content}</ParagraphContent>
                  <div className="w-full p-3 md:p-4 flex flex-col items-center justify-center bg-foreground-100 rounded-lg">
                    <div className="text-2xl text-center p-4">
                      Visita
                      <span className="text-warning">
                        {` ${dataModal.title}`}
                      </span>
                    </div>
                    <iframe
                      src={dataModal.localization}
                      className="w-[97%] md:w-2/4 h-[35vh] md:h-[40vh] rounded-lg"
                      loading="lazy"
                    ></iframe>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="warning" onPress={handleClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </TourismLayout>
  );
}

export default Tourism;
