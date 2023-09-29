import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function StatsLayout() {
  return (
    <Flex
      p={"0px 195px"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      alignSelf={"stretch"}
    >
      <Flex p={"80px"} flexDir={"column"} alignItems={"center"} gap={"px"}>
        <Flex className="stats-wrapper" alignItems={"center"} gap={"30px"}>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"58px"}
              fontWeight={700}
              lineHeight={"80px"}
              letterSpacing={0.2}
              color={"#96BB7C"}
            >
              15K
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              lineHeight={"24px"}
              letterSpacing={0.1}
              color={"#FFFFFF"}
            >
              Happy Customer
            </Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"58px"}
              fontWeight={700}
              lineHeight={"80px"}
              letterSpacing={0.2}
              color={"#96BB7C"}
            >
              150K
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              lineHeight={"24px"}
              letterSpacing={0.1}
              color={"#FFFFFF"}
            >
              Monthly Visitors
            </Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"58px"}
              fontWeight={700}
              lineHeight={"80px"}
              letterSpacing={0.2}
              color={"#96BB7C"}
            >
              15
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              lineHeight={"24px"}
              letterSpacing={0.1}
              color={"#FFFFFF"}
            >
              Countries Worlwide
            </Text>
          </Flex>
          <Flex
            className="flex-item"
            w={"238px"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text
              fontSize={"58px"}
              fontWeight={700}
              lineHeight={"80px"}
              letterSpacing={0.2}
              color={"#96BB7C"}
            >
              100+
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              lineHeight={"24px"}
              letterSpacing={0.1}
              color={"#FFFFFF"}
            >
              Top Partners
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
