import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import herogb from "../assets/doc.jpg";
import NavBar from "./NavBar";

function Header() {
  return (
    <Container
      className="hero-container"
      position={"relative"}
      overflowX={"hidden"}
      backgroundImage={herogb}
      top={0}
      bottom={0}
      left={0}
      p={"0px 0px 0px 0px"}
      right={0}
      minH={"100vh"}
      minW={"100vw"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      sx={{ Tran: " rgba(0, 0, 0, 0.644); " }}
      flexShrink={0}
    >
      <Flex
        flexDir={"column"}
        bg={"rgba(0, 0, 0, 0.50)"}
        overflowX={"hidden"}
        w={"100%"}
        minH={"100vh"}
        m={"0px 0px 0px 0px"}
        className="aaa"
      >
        <NavBar />
        <Flex
          position={"relative"}
          as={"section"}
          flexDir={"column"}
          m={[
            "0px 0px 7px 0px",
            "0px 0px 7px 0px",
            "0px 195px 7px 195px",
            "0px 195px 7px 195px",
          ]}
          p={["10px 0px", "0px 5px 112px 5px", "112px 0px", "112px 0px"]}
          alignItems={"center"}
          gap={"80px"}
        >
          <Text variant={"green"}>Join us</Text>
          <Heading variant={"header-big"}>Meet The Best Hospital</Heading>
          <Heading variant={"header-small"}>
            We are always focused on helping your child and you
          </Heading>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Header;
