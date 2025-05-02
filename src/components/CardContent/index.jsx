import { Card, CardHeader, Image } from "@heroui/react";
import { motion } from "framer-motion";

function CardContent({
  children,
  src,
  atlImage,
  description,
  col,
  cols,
  animation = false,
  onPress,
}) {
  return (
    <motion.div
      className={`${cols} ${col} h-[41vh]`}
      whileHover={{ scale: animation ? 1.03 : 1 }}
      whileTap={{ scale: animation ? 0.99 : 1 }}
      onClick={onPress}
    >
      <Card className={`h-full`}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {description}
          </p>
          <h4 className="text-white font-medium text-large">{children}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={atlImage}
          className="z-0 w-full h-full object-cover brightness-90"
          src={src}
        />
      </Card>
    </motion.div>
  );
}

export default CardContent;
