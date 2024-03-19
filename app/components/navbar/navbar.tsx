import { Text, Spacer, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack
      // flex="1"
      h={"50px"}
      w={"100%"}
      p="20px"
    >
      {/* <Input
              flex={0.5}
              size={"md"}
              placeholder="Cari no polis"
              // borderColor={"gray.400"}
              variant="filled"
            /> */}
      <Text fontSize={"20"} fontWeight={"semibold"}>
        Production Longterm
      </Text>
      <Spacer />
      <Text
        // flex={1}
        color={"gray.700"}
        fontWeight={"normal"}
        fontSize={"18"}
        pe="10px"
      >
        Welcome, Donny Wahyu
      </Text>
    </HStack>
  );
}
