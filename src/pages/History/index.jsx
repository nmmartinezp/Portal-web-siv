import HistoryLayout from "@layouts/HistoryLayout";
import CardPageLayout from "@layouts/CardPageLayout";
import CardContent from "@components/CardContent";
import MenuContent from "@components/MenuContent";
import ParagraphContent from "@components/ParagraphContent";
import SpringAnimateText from "@components/SpringAnimateText";
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
import useHistoryPageData from "@hooks/useHistoryPageData";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import imageMenu from "@assets/images/history/plazaPrincipalSiv.webp";

function History() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { history } = useParams();
  const navigate = useNavigate();
  const [dataModal, setDataModal] = useState({
    title: "",
    image: "",
    history: "",
  });
  const data = useHistoryPageData();
  const columns = 12;

  useEffect(() => {
    if (history) {
      const index = data.findIndex((entry) => entry.identifier === history);
      if (index !== -1) {
        setDataModal({
          title: data[index].title,
          image: data[index].image,
          history: data[index].history,
        });
        onOpen();
      }
    }
  }, [history]);

  const handleOpen = (index) => {
    navigate(`/historia/${data[index].identifier}`);
  };

  const handleClose = () => {
    onClose();
    navigate("/historia");
  };
  return (
    <HistoryLayout
      banner={
        <div className="w-full h-full flex items-center justify-center">
          <h2 className="w-3/4 md:w-2/4 text-center text-3xl md:text-5xl">
            <span className="text-warning font-medium">
              <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
            </span>
            <span> </span>
            <SpringAnimateText>
              UN PUEBLO DE PATRIMONIO HISTORICO.
            </SpringAnimateText>
          </h2>
        </div>
      }
      content1={
        <>
          <CardPageLayout cols={`grid-cols-${columns}`}>
            {data.map((item, index) => (
              <CardContent
                onPress={() => {
                  handleOpen(index);
                }}
                animation
                atlImage={item.altImage}
                description={item.description}
                src={item.image}
                cols={`col-span-${columns}`}
                col={`md:col-span-${item.space}`}
                key={index}
                id={index}
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
                    <div className="w-full h-[30vh] gap-2 grid grid-cols-2">
                      <Card className="col-span-2 h-full">
                        <Image
                          removeWrapper
                          alt="Card background"
                          className="z-0 w-full h-full object-cover"
                          src={dataModal.image}
                        />
                      </Card>
                    </div>
                    <ParagraphContent>{dataModal.history}</ParagraphContent>
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
      }
      content2={
        <MenuContent
          span={"Visita la historia de este municipio"}
          image={imageMenu}
        >
          <div className="col-span-6 md:col-span-3 h-[20vh] bg-red-300">as</div>
          <div className="col-span-6 md:col-span-3 h-[20vh] bg-red-300">as</div>
          <div className="col-span-6 md:col-span-3 h-[20vh] bg-red-300">as</div>
          <div className="col-span-6 md:col-span-3 h-[20vh] bg-red-300">as</div>
        </MenuContent>
      }
    />
  );
}

export default History;
