import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function JoinUsLayout() {
  return (
    <Flex
      className="container"
      p={"0px 195px 2px 195px"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#2D4059"}
    >
      {" "}
      <Flex
        className="wrapper"
        w={"100%"}
        p={"160px 0px"}
        flexDir={"column"}
        alignItems={"center"}
        gap={"80px"}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          gap={"10px"}
          alignItems={"center"}
        >
          {" "}
          <Text variant={"green"}>NewsLetter</Text>
          <Heading>JOIN US</Heading>
          <Text>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </Text>
        </Flex>
        <Flex w={"688px"} h={"60px"}>
          <InputGroup bgColor={"#fff"} h={"100%"} borderRadius={"8px"}>
            <Input
              h={"100%"}
              bgColor={""}
              color={"#737373"}
              type={"email"}
              placeholder="Your Email"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            <InputRightElement w={"100px"} h={"100%"}>
              <Button size={"lg"} bgColor={"#96BB7C"} h={"100%"}>
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
