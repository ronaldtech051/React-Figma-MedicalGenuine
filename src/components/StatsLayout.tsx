import { Flex, Text } from "@chakra-ui/react";

export default function StatsLayout() {
  return (
    <Flex
      p={{ base: "0px 30px 5px 30px", xl: "0px 195px 50.593px 195px" }}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      alignSelf={"stretch"}
    >
      <Flex
        p={{ base: "10px", xl: "80px" }}
        flexDir={"column"}
        alignItems={"center"}
        gap={"50px"}
      >
        <Flex
          className="stats-wrapper"
          alignItems={"center"}
          justify={"center"}
          gap={"30px"}
          wrap={"wrap"}
        >
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"7xl"}
              fontWeight={700}
              lineHeight={"80px"}
              variant={"green"}
            >
              15K
            </Text>
            <Text fontWeight={700}>Happy Customer</Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"7xl"}
              fontWeight={700}
              lineHeight={"80px"}
              variant={"green"}
            >
              150K
            </Text>
            <Text fontWeight={700}>Monthly Visitors</Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"7xl"}
              fontWeight={700}
              lineHeight={"80px"}
              variant={"green"}
            >
              15
            </Text>
            <Text fontWeight={700}>Countries Worlwide</Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"7xl"}
              fontWeight={700}
              lineHeight={"80px"}
              variant={"green"}
            >
              100+
            </Text>
            <Text fontWeight={700}>Top Partners</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
