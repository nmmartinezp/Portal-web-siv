import CultureLayout from "@layouts/CultureLayout";
import {
  Link,
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
import SpringAnimateText from "@components/SpringAnimateText";
import ParagraphContent from "@components/ParagraphContent";
import Article from "@components/Article";
import MenuReference from "@components/MenuReference";
import MenuContent from "@components/MenuContent";
import CardReference from "@components/CardReference";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";
import useCulturePageData from "@hooks/useCulturePageData";

function Culture() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { article, culture } = useParams();
  const data = useCulturePageData();
  const [dataModal, setDataModal] = useState({
    title: "",
    images: [],
    content: "",
  });

  useEffect(() => {
    if (culture && article) {
      const index = data[article].content.findIndex(
        (entry) => entry.identifier === culture
      );
      if (index !== -1) {
        setDataModal({
          title: data[article].content[index].title,
          images: data[article].content[index].images,
          content: data[article].content[index].content,
        });
        onOpen();
      }
    }
  }, [culture, article]);

  const handleClose = () => {
    setDataModal({
      title: "",
      images: [],
      content: "",
    });
    onClose();
    navigate("/cultura");
  };
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
      {data.map((item, index) => (
        <Fragment key={`fragment-${index}`}>
          <div
            id={`cart-${index}`}
            key={`cart-${index}`}
            className="w-full h-auto flex items-center md:items-start justify-center col-span-12 md:col-span-8 px-4"
          >
            <div
              id={`csart-${index}`}
              key={`csart-${index}`}
              className="w-[97%] md:w-3/4"
            >
              <Article
                id={`art-${index}`}
                title={item.title}
                img={item.image.src}
                altImg={item.image.alt}
              >
                <ParagraphContent>{item.article}</ParagraphContent>
              </Article>
            </div>
          </div>
          <div
            id={`cmu-${index}`}
            key={`cmu-${index}`}
            className="w-full h-auto flex items-center md:items-start justify-center md:justify-start col-span-12 md:col-span-4 px-4"
          >
            <div
              id={`csmu-${index}`}
              key={`csmu-${index}`}
              className="w-[97%] md:w-3/4"
            >
              <MenuReference id={`mu-${index}`} title="Visitar tambien">
                {item.links.map((itemLink, indexLink) => (
                  <Link
                    id={`link-${index}-${indexLink}`}
                    key={`link-${index}-${indexLink}`}
                    showAnchorIcon
                    underline="hover"
                    color="primary"
                    className="py-1"
                    onPress={
                      itemLink.type === "route"
                        ? () => navigate(itemLink.link)
                        : () => {}
                    }
                    href={itemLink.type === "link" ? () => itemLink.link : ""}
                  >
                    {itemLink.title}
                  </Link>
                ))}
              </MenuReference>
            </div>
          </div>
          {Array.isArray(item.content) && item.content.length > 0 && (
            <div id={`cmuc-${index}`} className="w-full h-auto col-span-12">
              <MenuContent
                id={`muc-${index}`}
                span={item.subTitle}
                image={item.image.src}
              >
                {item.content.map((itemContent, indexContent) => (
                  <div
                    id={`ccr-${index}-${indexContent}`}
                    key={`ccr-${index}-${indexContent}`}
                    className="col-span-6 md:col-span-3 h-full"
                  >
                    <CardReference
                      id={`cardr-${index}-${indexContent}`}
                      title={itemContent.title}
                      image={itemContent.images[0].src}
                      to={`/cultura/${index}/${itemContent.identifier}`}
                    >
                      {itemContent.description}
                    </CardReference>
                  </div>
                ))}
              </MenuContent>
            </div>
          )}
        </Fragment>
      ))}
      <Modal
        id={"modalc"}
        key={"modalc"}
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
    </CultureLayout>
  );
}

export default Culture;
