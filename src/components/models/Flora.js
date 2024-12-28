import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Carousel from "../slider/Carousel";
import img2 from "../../assets/Pshoot/Flora/F2.png";
import img3 from "../../assets/Pshoot/Flora/F5.png";
import img4 from "../../assets/Pshoot/Flora/F3.png";
import img5 from "../../assets/Pshoot/Flora/F4.png";

import Layout from "../layout/Layout";
const ZippyDetail = () => {
  return (
    <Layout>
      <Stack width={"100%"} className="telex-regular">
        <Stack alignItems={"center"} p={10} gap={4}>
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            Introducing Eveon Flora
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "15px" }}
            fontWeight={"400"}
            color={"#000"}
            textAlign={"center"}
            w={{ base: "100%", md: "70%" }}
          >
            Revolutionizing the transport industry in Pakistan. We are proud to
            offer a high-quality, reliable, and convenient transportation
            solution that is perfect for a wide range of needs.
          </Text>
        </Stack>

        <Carousel images={[img2, img3, img4, img5]} />

        <Stack gap={4} alignItems={"center"} textAlign={"center"} px={10}>
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            Choose Your Preference
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "15px" }}
            fontWeight={"400"}
            color={"#000"}
            textAlign={"center"}
            w={{ base: "100%", md: "70%" }}
          >
            Choose from two distinct colors that reflects your personality.
            Eveon Zippy is available in two colors: Pink and Yellow.
          </Text>
        </Stack>

        <Stack
          gap={4}
          py={10}
          alignItems={"center"}
          textAlign={"center"}
          px={10}
        >
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            FEATURES
          </Heading>
        </Stack>
        <Stack
          w={"100%"}
          direction={{ base: "column", md: "row" }}
          px={"8%"}
          pb={10}
          gap={10}
        >
          <Stack width={{ base: "100%", md: "50%" }}>
            <Stack gap={10}>
              <Heading
                fontSize={{ base: "25px", md: "25px", lg: "33px" }}
                fontWeight={"400"}
                color={"black"}
              >
                Powerful Motor
              </Heading>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"400"}
                color={"#000"}
                lineHeight={"35px"}
              >
                The motor on Eveon Flora has 600w, providing enough
                power and torque for a smooth and efficient ride for your daily use. The motor
                magnet on Eveon Zippy provides strong and reliable
                performance.
              </Text>
            </Stack>
          </Stack>
          {/* <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              Comfortable on Road
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              Eveon Zippy has tire size 10, providing excellent grip and
              handling with disc brakes for reliable stopping power. Eveon
              Zippy is equipped with hydraulic shock absorbers for a
              smooth and comfortable ride
            </Text>
          </Stack> */}
        </Stack>

        <Stack
          gap={10}
          w={"100%"}
          direction={{ base: "column", md: "row" }}
          px={"8%"}
          pb={10}
        >
          <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              Battery
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              Eveon Zippy is equipped with 60V 23AH Chilwee Brand battery,
              approximately 8 hours to fully charge. The range of Eveon Flora is 50 - 55 Km on a single charge, providing plenty of distance
              for a full day’s worth of travel with a max speed of 45 Km/h. This
              model features Anti-theft Alarm system.
            </Text>
          </Stack>
          {/* <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              {/* Loading Capacity */}
            {/* </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              {/* Eveon Zippy has a loading capacity of 80 kg, allowing you
              to carry plenty of cargo. */}
            {/* </Text> */}
          {/* </Stack> */} 
        </Stack>
      </Stack>
    </Layout>
  );
};

export default ZippyDetail;
