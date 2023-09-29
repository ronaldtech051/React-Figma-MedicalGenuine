import { Container, Flex, Grid, Heading } from "@chakra-ui/react";
import herogb from "../assets/doc.jpg";
import NavBar from "./NavBar";

function Header() {
  return (
    <Container
      position={"relative"}
      overflow={"hidder"}
      backgroundImage={herogb}
      top={0}
      bottom={0}
      left={0}
      p={"0px 0px 0px 0px"}
      right={0}
      h="100svh"
      minW="100%"
      bgRepeat="no-repeat"
      bgSize={["contain", "contain", "cover", "cover"]}
      sx={{ Tran: " rgba(0, 0, 0, 0.644); " }}
      flexShrink={0}
    >
      <Grid
        bg={"rgba(0, 0, 0, 0.50)"}
        overflow={"hidden"}
        w={"100%"}
        h={"100vh"}
        m={"0px 0px 0px 0px"}
        className="aaa"
      >
        <NavBar />
        <Flex
          as={"section"}
          flexDir={"column"}
          m={"0px 195px 7px 195px"}
          p={"112px 0px"}
          alignItems={"center"}
          gap={"80px"}
        >
          <Heading
            size={"sm"}
            fontWeight={700}
            lineHeight={"24px"}
            letterSpacing={"0.1"}
            color={"#96BB7C"}
          >
            Join us
          </Heading>
          <Heading
            size={"4xl"}
            textAlign={"center"}
            fontWeight={700}
            lineHeight={"80px"}
            letterSpacing={0.2}
          >
            Meet The Best Hospital
          </Heading>
          <Heading
            size={"md"}
            textAlign={"center"}
            fontWeight={400}
            lineHeight={"30px"}
            letterSpacing={0.2}
          >
            We are always focused on helping your child and you
          </Heading>
        </Flex>
      </Grid>
    </Container>
  );
}

export default Header;
