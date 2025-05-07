import TourismLayout from "@layouts/TourismLayout";
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import MenuContent from "@components/MenuContent";
import CardReference from "@components/CardReference";
import CardPageLayout from "@layouts/CardPageLayout";
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
import imageMenu from "@assets/images/photo/plazaPrincipalSiv.webp";
import imageRef from "@assets/images/photo/catedral03Siv.webp";

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
            image={imageMenu}
          >
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Turismo"
                image={imageRef}
                to={"/historia/historia-de-san-ignacio-de-velasco"}
              >
                El mundo de Gumball en 3D solo en cines
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Turismo"
                image={imageRef}
                to={"/historia/historia-de-san-ignacio-de-velasco"}
              >
                El mundo de Gumball en 3D solo en cines, con la venta exclusiva
                de 100 manos
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Turismo"
                image={imageRef}
                to={"/historia/historia-de-san-ignacio-de-velasco"}
              >
                El mundo de Gumball en 3D solo en cines
              </CardReference>
            </div>
            <div className="col-span-6 md:col-span-3 h-full">
              <CardReference
                title="Turismo"
                image={imageRef}
                to={"/historia/historia-de-san-ignacio-de-velasco"}
              >
                El mundo de Gumball en 3D solo en cines
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
            <span>¿Que puedes </span>
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
                        {" "}
                        {dataModal.title.toLowerCase()}
                      </span>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30623.855051029976!2d-60.96854251622101!3d-16.374885354744084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93933d8fb4c1fc91%3A0x8d336c8f6518e89e!2sCueva%20de%20Yeso!5e0!3m2!1ses-419!2sbo!4v1746623788806!5m2!1ses-419!2sbo"
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
