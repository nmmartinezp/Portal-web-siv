import { Card, CardHeader, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function CardContent({
  children,
  src,
  atlImage,
  description,
  col,
  cols,
  animation = false,
  onPress,
  id,
}) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isActive && onPress) {
      onPress(event);
    }
  };
  return (
    <motion.div
      id={id}
      className={`${cols} ${col} h-[41vh]`}
      whileHover={{ scale: animation ? 1.03 : 1 }}
      whileTap={{ scale: animation ? 0.99 : 1 }}
      onClick={handleClick}
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
          className="z-0 w-full h-full object-cover brightness-75"
          src={src}
        />
      </Card>
    </motion.div>
  );
}

export default CardContent;
