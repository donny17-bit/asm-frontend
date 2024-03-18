import { VStack, Text, Button, Icon, Spacer, Box } from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";

export default function Sidebar() {
  return (
    <>
      <VStack
        p="0"
        border="1px"
        borderColor="gray.200"
        py="5"
        w={[null, null, "30vw", "15vw"]}
        h="100vh"
        bgColor={"#F6F7F9"}
      >
        <VStack
          pb="5"
          w={[null, null, "30vw", "15vw"]}
          h="100vh"
          spacing="3"
          // color={"#F6F7F9"}
        >
          <Text
            w={"90%"}
            fontSize="2xl"
            fontWeight="bold"
            textAlign={"left"}
            pl="4"
            pb="5"
            borderBottom={"1px"}
            borderColor={"gray.400"}
            color="gray.700"
          >
            eReport
          </Text>
          <Button
            w="90%"
            mt="6"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "#ECEEF0" }}
            size="lg"
          >
            <Text fontSize={"x-large"}>
              <GoHome />
            </Text>
            <Text ps="2" fontSize={"18"}>
              Dashboard
            </Text>
          </Button>
          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "#ECEEF0" }}
            size="lg"
          >
            <Text fontSize={"x-large"}>
              <HiOutlineNewspaper />
            </Text>
            <Text ps="2" fontSize={"18"}>
              Production
            </Text>
          </Button>
          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "#ECEEF0" }}
            size="lg"
          >
            <Text fontSize={"x-large"}>
              <VscGraph />
            </Text>
            <Text ps="2" fontSize={"18"}>
              Surplus
            </Text>
          </Button>
          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "#ECEEF0" }}
            size="lg"
          >
            <Text fontSize={"x-large"}>
              <GrMoney />
            </Text>
            <Text ps="2" fontSize={"18"}>
              Claim
            </Text>
          </Button>
        </VStack>
        <Spacer />
        <Button
          w="80%"
          mt="5"
          variant="ghost"
          colorScheme="red"
          justifyContent="left"
        >
          <Text fontSize={"x-large"}>
            <PiSignOutLight />
          </Text>
          <Text ps="2" fontSize={"18"}>
            Logout
          </Text>
        </Button>
      </VStack>
    </>
  );
}
