import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Layout5() {
  return (
    <Flex
      className="pricing-container"
      p={{ base: "0px 30px 5px 30px", xl: "0px 195px 50.593px 195px" }}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#2D4059"}
    >
      <Flex
        w={"100%"}
        className="wrapper"
        p={{ xl: "100px", base: "20px" }}
        flexDir={"column"}
        alignItems={"flex-start"}
        bgColor={"#2D4059"}
      >
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          gap={5}
          w={{ base: "auto", xl: "691px" }}
        >
          <Text variant={"green"}>Practice Advice</Text>
          <Heading>Pricing</Heading>
          <Text>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </Text>
        </Flex>

        <Flex
          flexDir={{ base: "column", xl: "row" }}
          justifyContent={"space-around"}
          w={"100%"}
          p={"160px 0px"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Flex
            className="card-wrapper"
            flexDir={"column"}
            w={{ base: "100%", xl: "400px" }}
            alignItems={"center"}
          >
            <Flex
              className="inner-card-wrapper"
              p={"29px 14.5px 0px 10.5px"}
              flexDir={"column"}
              boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07);"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              w={{ base: "100%" }}
            >
              <Flex
                className="inner-card"
                borderRadius={"4px"}
                p={"50px 40px"}
                flexDir={"column"}
                w={"100%"}
                alignItems={"center"}
                gap={"35px"}
                bgColor={"#fff"}
              >
                <Box
                  w={"96px"}
                  height={"96px"}
                  p={"24px 23.5px 24px 24.5px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"200px"}
                  bgColor={"#96BB7C"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M4 16.7999C3.9995 13.9006 5.16477 11.1228 7.23363 9.09156C9.30248 7.06032 12.1012 5.94621 15 5.9999C18.4346 5.98166 21.712 7.43825 24 9.9999C26.288 7.43825 29.5654 5.98166 33 5.9999C35.8988 5.94621 38.6975 7.06032 40.7664 9.09156C42.8352 11.1228 44.0005 13.9006 44 16.7999C44 27.5119 31.242 35.5999 24 41.9999C16.774 35.5459 4 27.5199 4 16.7999Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Heading color={"#252B42"}>FREE</Heading>
                <Text variant={"grey"} textAlign={"center"}>
                  Organize across all apps by hand
                </Text>
                <Heading
                  color={"#96BB7C"}
                  fontSize={"40px"}
                  fontWeight={700}
                  lineHeight={"50px"}
                  letterSpacing={0.2}
                >
                  19$
                </Heading>
                <Text color={"#8EC2F2"}>Per Month</Text>
                <Text variant={"grey"} textAlign={"center"}>
                  Slate helps you see how many more days you need...
                </Text>
                <Button
                  p={"15px 40px"}
                  h={"100%"}
                  size={"lg"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  color={"#fff"}
                  bgColor={"#96BB7C"}
                  _hover={{ color: "#96BB7C", bgColor: "#96bb7c2f" }}
                >
                  Try For Free
                </Button>
                <Box>
                  <List spacing={3}>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      1GB Cloud storage
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      email and community support
                    </ListItem>
                  </List>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className="card-wrapper"
            flexDir={"column"}
            w={{ base: "100%", xl: "400px" }}
            alignItems={"center"}
          >
            <Flex
              className="inner-card-wrapper"
              borderRadius={"4px"}
              p={"29px 14.5px 0px 10.5px"}
              flexDir={"column"}
              boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07);"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              w={{ base: "100%" }}
            >
              <Flex
                className="inner-card"
                borderRadius={"4px"}
                p={"50px 40px"}
                flexDir={"column"}
                w={"100%"}
                alignItems={"center"}
                gap={"35px"}
                bgColor={"#2A7CC7"}
              >
                <Box
                  w={"96px"}
                  height={"96px"}
                  p={"24px 23.5px 24px 24.5px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"200px"}
                  bgColor={"#fff"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M4 16.7999C3.9995 13.9006 5.16477 11.1228 7.23363 9.09156C9.30248 7.06032 12.1012 5.94621 15 5.9999C18.4346 5.98166 21.712 7.43825 24 9.9999C26.288 7.43825 29.5654 5.98166 33 5.9999C35.8988 5.94621 38.6975 7.06032 40.7664 9.09156C42.8352 11.1228 44.0005 13.9006 44 16.7999C44 27.5119 31.242 35.5999 24 41.9999C16.774 35.5459 4 27.5199 4 16.7999Z"
                      fill="#96BB7C"
                    />
                  </svg>
                </Box>
                <Heading>FREE</Heading>
                <Text textAlign={"center"}>
                  Organize across all apps by hand
                </Text>
                <Heading
                  color={"#fff"}
                  fontSize={"40px"}
                  fontWeight={700}
                  lineHeight={"50px"}
                  letterSpacing={0.2}
                >
                  19$
                </Heading>
                <Text color={"#8EC2F2"}>Per Month</Text>
                <Text textAlign={"center"}>
                  Slate helps you see how many more days you need...
                </Text>
                <Button
                  h={"100%"}
                  size={"lg"}
                  p={"15px 40px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  color={"#fff"}
                  bgColor={"#96BB7C"}
                >
                  Try For Free
                </Button>
                <Box>
                  <List spacing={3}>
                    <ListItem fontSize={"xl"} color={"#fff"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#fff"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#fff"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#fff"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      1GB Cloud storage
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#fff"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      email and community support
                    </ListItem>
                  </List>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className="card-wrapper"
            flexDir={"column"}
            w={{ base: "100%", xl: "400px" }}
            alignItems={"center"}
          >
            <Flex
              className="inner-card-wrapper"
              p={"29px 14.5px 0px 10.5px"}
              flexDir={"column"}
              boxShadow={"0px 13px 19px 0px rgba(0, 0, 0, 0.07);"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              w={{ base: "100%" }}
            >
              <Flex
                position={"relative"}
                className="inner-card"
                borderRadius={"4px"}
                p={"50px 40px"}
                flexDir={"column"}
                w={"100%"}
                alignItems={"center"}
                gap={"35px"}
                bgColor={"#fff"}
              >
                <Flex
                  alignItems={"flex-end"}
                  justifyContent={"center"}
                  position={"absolute"}
                  w={"100%"}
                  left={{
                    base: "0",
                    sm: "0",
                    md: "275",
                    lg: "370",
                    xl: "-10",
                    "2xl": "0",
                  }}
                  top={"-10"}
                  className="new box"
                >
                  <Flex
                    position={"relative"}
                    display={"flex"}
                    justify={"center"}
                    align={"center"}
                    p={"24px 16px"}
                    zIndex={3}
                    //top={2}
                    left={{ base: "150px", xl: "190px" }}
                    flexDir={"column"}
                    gap={"10px"}
                    bgColor={"#E77C40"}
                    color={"#fff"}
                    borderRadius={"50%"}
                  >
                    NEW
                  </Flex>
                </Flex>
                <Box
                  w={"96px"}
                  height={"96px"}
                  p={"24px 23.5px 24px 24.5px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"200px"}
                  bgColor={"#96BB7C"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M4 16.7999C3.9995 13.9006 5.16477 11.1228 7.23363 9.09156C9.30248 7.06032 12.1012 5.94621 15 5.9999C18.4346 5.98166 21.712 7.43825 24 9.9999C26.288 7.43825 29.5654 5.98166 33 5.9999C35.8988 5.94621 38.6975 7.06032 40.7664 9.09156C42.8352 11.1228 44.0005 13.9006 44 16.7999C44 27.5119 31.242 35.5999 24 41.9999C16.774 35.5459 4 27.5199 4 16.7999Z"
                      fill="white"
                    />
                  </svg>
                </Box>
                <Heading color={"#252B42"}>FREE</Heading>
                <Text variant={"grey"} textAlign={"center"}>
                  Organize across all apps by hand
                </Text>
                <Heading color={"#96BB7C"}>19$</Heading>
                <Text color={"#8EC2F2"}>Per Month</Text>
                <Text variant={"grey"} textAlign={"center"}>
                  Slate helps you see how many more days you need...
                </Text>
                <Button
                  size={"lg"}
                  p={"15px 40px"}
                  h={"100%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"10px"}
                  alignSelf={"stretch"}
                  color={"#fff"}
                  bgColor={"#96BB7C"}
                  _hover={{ color: "#96BB7C", bgColor: "#96bb7c2f" }}
                >
                  Try For Free
                </Button>
                <Box>
                  <List spacing={3}>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Unlimited product updates
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      1GB Cloud storage
                    </ListItem>
                    <ListItem fontSize={"xl"} color={"#252B42"}>
                      <ListIcon as={MdCheckCircle} color="grey.200" />
                      email and community support
                    </ListItem>
                  </List>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
