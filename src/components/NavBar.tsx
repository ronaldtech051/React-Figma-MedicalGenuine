import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function NavBar() {
  const [MenuDisplay, MenuDisplaySetter] = useState("none");
  const changer = (changedvalue: string) => {
    if (changedvalue === "none") {
      MenuDisplaySetter("flex");
    } else MenuDisplaySetter("none");
  };

  return (
    <Flex position={"relative"}>
      <Container
        display={["none", "none", "flex", "flex"]}
        minW={"100%"}
        maxH={"91px"}
        marginLeft={"59px"}
        marginRight={"59px"}
      >
        <Flex
          flexDir={["column", "column", "row", "row"]}
          maxH={"91px"}
          width={"100%"}
          m={"0px 0px 0px 0px"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Heading variant={"nav"}>MedicalGenuin</Heading>
          <Flex
            w={"100%"}
            flexDir={"row"}
            p={"0px 0px 0px 0px"}
            m={"0px px 0px 0px"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
          >
            <Flex direction={"row"} w={"100%"}>
              <Box
                m=" 33px 0px 34px 44px"
                fontSize={14}
                fontWeight={700}
                lineHeight={"24px"}
                letterSpacing={0.2}
              >
                Home
              </Box>
              <Box
                m=" 33px 0px 34px 21px"
                fontSize={14}
                fontWeight={700}
                lineHeight={"24px"}
                letterSpacing={0.2}
              >
                Product
              </Box>
              <Box
                m=" 33px 0px 34px 21px"
                fontSize={14}
                fontWeight={700}
                lineHeight={"24px"}
                letterSpacing={0.2}
              >
                Pricing
              </Box>
              <Box
                m=" 33px 0px 34px 21px"
                fontSize={14}
                fontWeight={700}
                lineHeight={"24px"}
                letterSpacing={0.2}
              >
                Contact
              </Box>
            </Flex>
            <HStack alignSelf={"flex-end"} w={"100%"}>
              <Button
                fontSize={14}
                fontWeight={700}
                lineHeight={"22px"}
                letterSpacing={0.2}
                m="34px 0px 35px 240px"
              >
                Login
              </Button>
              <Button
                fontSize={14}
                fontWeight={700}
                lineHeight={"22px"}
                letterSpacing={0.2}
                m=" 19px 220px 20px 45px"
                rightIcon={<ArrowForwardIcon />}
                backgroundColor={"#96BB7C"}
              >
                JOIN US
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Container>
      <Flex
        flexDir={"column"}
        display={["flex", "flex", "none", "none"]}
        alignItems={"center"}
        justify={"flex-start"}
        w={"100vw"}
        h={"100vh"}
        mt={3}
      >
        <Flex
          w={"100%"}
          flex={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading
            m={2}
            lineHeight="32px"
            fontSize={24}
            fontWeight={700}
            letterSpacing={0.1}
          >
            MedicalGenuin
          </Heading>
          <IconButton
            m={2}
            aria-label="Open Menu"
            size="lg"
            icon={MenuDisplay === "none" ? <HamburgerIcon /> : <CloseButton />}
            alignSelf={"flex-end"}
            onClick={() => changer(MenuDisplay)}
          />
        </Flex>
        <VStack
          bgColor={"#96bb7c2d"}
          w={"100vw"}
          h={"100%"}
          mt={79}
          display={MenuDisplay}
          alignItems={"center"}
          justify={"center"}
        >
          <Box
            fontSize={14}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={0.2}
            h={"20"}
          >
            Home
          </Box>
          <Box
            fontSize={14}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={0.2}
            h={"20"}
          >
            Product
          </Box>
          <Box
            fontSize={14}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={0.2}
            h={"20"}
          >
            Pricing
          </Box>
          <Box
            fontSize={14}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={0.2}
            h={"20"}
          >
            Contact
          </Box>
          <Box h={"20"}>
            <Button
              fontSize={14}
              fontWeight={700}
              lineHeight={"22px"}
              letterSpacing={0.2}
            >
              Login
            </Button>
          </Box>
          <Box h={"20"}>
            <Box
              fontSize={14}
              fontWeight={700}
              lineHeight={"22px"}
              letterSpacing={0.2}
              backgroundColor={"#96BB7C"}
            >
              JOIN US <ArrowForwardIcon />
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}
