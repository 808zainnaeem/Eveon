import { Stack, Text, Img, chakra, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import LeopardProModel from "../../assets/Pshoot/LEOPARD_PRO/LP1.png";
import Voltage from "../../assets/images/voltage.png";
import battery from "../../assets/images/battery.png";
import speed from "../../assets/images/speed.png";
import price from "../../assets/images/Price.png";
import { Link } from "react-router-dom";
// Convert Chakra UI components to motion components
const MotionStack = motion(Stack);
const MotionImg = motion(Img);

const LeopardProHome = () => {
  // Animation variants for the image
  const imageVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2, // Increased duration to 1.2 seconds
      },
    },
  };

  // Animation variants for the text
  const textVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2, // Increased duration to 1.2 seconds
      },
    },
  };

  return (
    <div>
      <MotionStack
        px={{ base: 6, md: 10 }}
        py={10}
        spacing={{ base: 10, md: 12, lg: 16 }}
        alignItems={"center"}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Stack
          boxShadow={"xl"}
          borderRadius={"sm"}
          bg="#0b8c29"
          alignItems={"center"}
          justifyContent={"center"}
          p={2}
          w={{ base: "390px", md: "390px" }}
          variants={textVariants}
        >
          <Text
            color={"white"}
            className="telex-regular"
            fontSize={{ base: "2xl", lg: "3xl" }}
            fontWeight={"600"}
          >
            Eveon Leopard Pro
          </Text>
        </Stack>

        <Link to={`/product/4`}>
          <MotionStack
            alignItems={"center"}
            w={{ base: "100%", lg: "100%" }}
            variants={imageVariants}
          >
            <MotionImg w={{ base: "100%", lg: "100%" }} src={LeopardProModel} />
          </MotionStack>
        </Link>
        <MotionStack
          alignItems={"center"}
          w={{ base: "100%", lg: "100%" }}
          variants={textVariants}
        >
          <SimpleGrid columns={[2, null, 4]} spacing="40px">
            <Stack alignItems={"center"} gap={4}>
              <Img w={{ base: 12, md: 14, lg: 16 }} src={price} />
              <Text
                className="telex-regular"
                fontSize={"sm"}
                fontWeight={"600"}
                textAlign={"center"}
              >
                Rs. 280000{" "}
                <chakra.span fontWeight={"light"}> only! </chakra.span>
              </Text>
            </Stack>
            <Stack alignItems={"center"} gap={4}>
              <Img w={{ base: 12, md: 14, lg: 16 }} src={speed} />
              <Text
                className="telex-regular"
                fontSize={"sm"}
                fontWeight={"600"}
                textAlign={"center"}
              >
                70 Kph{" "}
                <chakra.span fontWeight={"light"}>
                  {" "}
                  Fast Speed{" "}
                </chakra.span>
              </Text>
            </Stack>
            <Stack alignItems={"center"} gap={4}>
              <Img w={{ base: 12, md: 14, lg: 16 }} src={Voltage} />
              <Text
                className="telex-regular"
                fontSize={"sm"}
                fontWeight={"600"}
                textAlign={"center"}
              >
                72vh 38Ah
                <chakra.span fontWeight={"light"}>
                  {" "}
                  Gold Graphene Technology{" "}
                </chakra.span>
              </Text>
            </Stack>
            <Stack alignItems={"center"} gap={4}>
              <Img w={{ base: 12, md: 14, lg: 16 }} src={battery} />
              <Text
                className="telex-regular"
                fontSize={"sm"}
                fontWeight={"600"}
                textAlign={"center"}
              >
                18 month
                <chakra.span fontWeight={"light"}>
                  {" "}
                  Battery Warranty
                </chakra.span>
              </Text>
            </Stack>
          </SimpleGrid>
        </MotionStack>
      </MotionStack>
    </div>
  );
};

export default LeopardProHome;
