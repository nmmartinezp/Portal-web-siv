import CardPageLayout from "@layouts/CardPageLayout";
import CardContent from "@components/CardContent";
import ParagraphContent from "@components/ParagraphContent";
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
import { useState } from "react";

function History() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataModal, setDataModal] = useState({
    title: "",
    image: "",
    history: "",
  });
  const data = useHistoryPageData();
  const columns = 12;

  const handleOpen = (index) => {
    setDataModal({
      title: data[index].title,
      image: data[index].image,
      history: data[index].history,
    });
    onOpen();
  };
  return (
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
          >
            {item.title}
          </CardContent>
        ))}
      </CardPageLayout>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
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
          {(onClose) => (
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
                <Button color="warning" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default History;
