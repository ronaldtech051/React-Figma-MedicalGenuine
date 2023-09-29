import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import section3doc from "../assets/c1c3607d6d81eae2875a9befaeef2deb.jpeg";
import section3pink from "../assets/0a1202a5aa18b957d0ac414e132e8ae0.png";
import section3white from "../assets/1b7136ac26ae9bf1160ebfdcb8597fff.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
export default function Layout3() {
  return (
    <Flex
      className="section3-container"
      p={"0px 195px 50.593px 195px"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#2D4059"}
    >
      {" "}
      <Flex
        className="wrapper"
        w={"1050px"}
        p={"160px 0px"}
        flexDir={"column"}
        alignItems={"flex-start"}
        flexShrink={0}
      >
        <Flex
          className="row1"
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Flex
            alignItems={"center"}
            gap={"30px"}
            w={"507px"}
            h={"342.407px"}
            position={"relative"}
          >
            <Box
              className="rektangel"
              h={"324.559px"}
              w={"324.559px"}
              flexShrink={0}
              m={"17.85px 54.2px 0px 128.24px"}
              position={"relative"}
              bgColor={"#DCEAEF"}
              borderRadius={"0px 66.102px"}
            ></Box>
            <Image
              width={"324.559px"}
              height={"324.559px"}
              m={"0px 78.66px 17.85px 103.78px"}
              src={section3doc}
              transform={"scale(1)"}
              position={"absolute"}
              bgRepeat={"no-repeat"}
              objectFit={"fill"}
              borderRadius={"0px 33.102px"}
              alt="doc"
            />
            <Image
              src={section3pink}
              alt="pink"
              w={"158px"}
              h={"158px"}
              position={"absolute"}
              m={"138px 339px 46.41px 10px"}
            />
            <Image
              src={section3white}
              alt="white"
              w={"115px"}
              h={"58px"}
              position={"absolute"}
              m={"80px 0px 204.41px 392px"}
            />
          </Flex>
          <Flex
            w={"381px"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"35px"}
            shrink={0}
          >
            <Box w={"94px"} h={"7px"} bgColor={"#FF7171"} />
            <Heading
              fontSize={"40px"}
              fontWeight={700}
              lineHeight={"50px"}
              letterSpacing={0.2}
            >
              Meet Our Experts
            </Heading>
            <Text
              fontSize={"14px"}
              fontWeight={400}
              lineHeight={"20px"}
              letterSpacing={0.2}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Text>{" "}
            <Text
              color={"#96BB7C"}
              fontSize={"14px"}
              fontWeight={400}
              lineHeight={"24px"}
              letterSpacing={0.2}
            >
              Learn more <ChevronRightIcon />
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
