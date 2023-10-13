import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Container,
  Heading,
  IconButton,
  VStack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container
      position={{ base: "fixed", xl: "absolute" }}
      minH={"20vh"}
      zIndex={300}
      overflowX={"hidden"}
      className="nav-container"
      maxW={"100%"}
      minW={"100%"}
      p={{ base: "0px 0px 0px 0px", xl: "0px 150px 0px 150px" }}
    >
      <Flex
        display={{
          base: "none",
          xl: "flex",
        }}
        w={"100%"}
        h={"100%"}
      >
        <Flex
          flexDir={{ base: "row", lg: "row" }}
          h={"100%"}
          w={"100%"}
          m={"0px 0px 0px 0px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
        >
          <Heading w={"76%"} className="navLogo" display={"inline"}>
            MedicalGenuin
          </Heading>
          <Flex
            w={"100%"}
            flexDir={"row"}
            p={"0px 0px 0px 0px"}
            m={"0px px 0px 0px"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
            className="nav-menu"
          >
            <Flex direction={"row"} w={"100%"} justify={"start"}>
              <Box
                mt={4}
                m=" 33px 0px 34px 44px"
                fontSize={18}
                fontWeight={700}
                lineHeight={10}
                letterSpacing={0.2}
              >
                Home
              </Box>
              <Box
                mt={4}
                m=" 33px 0px 34px 21px"
                fontSize={18}
                fontWeight={700}
                lineHeight={10}
                letterSpacing={0.2}
              >
                Product
              </Box>
              <Box
                mt={4}
                m=" 33px 0px 34px 21px"
                fontSize={18}
                fontWeight={700}
                lineHeight={10}
                letterSpacing={0.2}
              >
                Pricing
              </Box>
              <Box
                mt={4}
                m=" 33px 0px 34px 21px"
                fontSize={18}
                fontWeight={700}
                lineHeight={10}
                letterSpacing={0.2}
              >
                Contact
              </Box>
            </Flex>
          </Flex>
          <Flex className="nav-buttons" w={"100%"} justifyContent={"center"}>
            <HStack
              alignItems={"center"}
              w={"100%"}
              spacing={"45px"}
              justify={"end"}
            >
              <Button
                p={"15px 25px 15px 25px"}
                size={"lg"}
                h={"100%"}
                fontSize={18}
                fontWeight={700}
                lineHeight={"22px"}
                letterSpacing={0.2}
              >
                Login
              </Button>
              <Button
                p={"15px 25px 15px 25px"}
                h={"100%"}
                size={"lg"}
                fontSize={18}
                fontWeight={700}
                lineHeight={"22px"}
                letterSpacing={0.2}
                rightIcon={<ArrowForwardIcon />}
                backgroundColor={"#96BB7C"}
              >
                JOIN US
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        display={{
          base: "flex",
          xl: "none",
        }}
        alignItems={"center"}
        justify={"flex-start"}
        w={"100vw"}
        h={"100vh"}

        //mt={3}
      >
        <Flex
          w={"100%"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexShrink={0}
          bgColor={"whitesmoke"}
        >
          <Flex
            flexDir={"row"}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            zIndex={222}
          >
            <Heading m={2} lineHeight="32px" color={"#252B42"} fontSize={22}>
              MedicalGenuin
            </Heading>
            <IconButton
              as={"div"}
              m={4}
              color={"#252B42"}
              aria-label="Open Menu"
              size="lg"
              icon={!isOpen ? <HamburgerIcon /> : <CloseButton size={"lg"} />}
              alignSelf={"flex-end"}
              onClick={onToggle}
            />
          </Flex>
        </Flex>
        <Collapse
          className="responsive-nav"
          in={isOpen}
          transition={{ exit: { delay: 0.3 }, enter: { duration: 0.5 } }}
        >
          <Flex
            overflowY={"hidden"}
            bg={"whiteAlpha.900"}
            overflowX={"hidden"}
            w={"100vw"}
            h={"52vh"}
            mt={"1px"}
            pl={2}
            brightness={"20%"}
            flexDir={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
          >
            <Box
              borderBottom={"1px solid grey"}
              mt={4}
              pl={"10"}
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              color={"#252B42"}
              lineHeight={10}
              letterSpacing={0.2}
              h={"10"}
            >
              Home
            </Box>
            <Box
              borderBottom={"1px solid grey"}
              mt={4}
              pl={"10"}
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              lineHeight={10}
              letterSpacing={0.2}
              h={"10"}
              color={"#252B42"}
            >
              Product
            </Box>
            <Box
              borderBottom={"1px solid grey"}
              mt={4}
              pl={"10"}
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              lineHeight={10}
              letterSpacing={0.2}
              h={"10"}
              color={"#252B42"}
            >
              Pricing
            </Box>
            <Box
              borderBottom={"1px solid grey"}
              mt={4}
              pl={"10"}
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              lineHeight={10}
              letterSpacing={0.2}
              color={"#252B42"}
              h={"10"}
            >
              Contact
            </Box>

            <Box mt={4} w={"100%"} h={"20"}>
              <VStack
                alignItems={"flex-start"}
                w={"100%"}
                spacing={"10px"}
                justify={"end"}
                ml={"10"}
              >
                <Button
                  fontSize={22}
                  p={"15px 25px 15px 25px"}
                  fontWeight={700}
                  lineHeight={"22px"}
                  letterSpacing={0.2}
                  color={"#252B42"}
                  h={"100%"}
                  size={"lg"}
                  shadow={"md"}
                >
                  Login
                </Button>

                <Button
                  p={"15px 25px 15px 25px"}
                  h={"100%"}
                  size={"lg"}
                  fontSize={18}
                  fontWeight={700}
                  lineHeight={"22px"}
                  letterSpacing={0.2}
                  rightIcon={<ArrowForwardIcon />}
                  backgroundColor={"#96BB7C"}
                >
                  JOIN US
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Collapse>
      </Flex>
    </Container>
  );
}
