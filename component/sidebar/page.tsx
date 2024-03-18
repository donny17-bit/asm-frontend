import { VStack, Text, Button, Icon, Spacer } from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";

export default function Sidebar() {
  return (
    <>
      {/* sidebar */}
      <VStack
        p="0"
        border="1px"
        borderColor="gray.200"
        py="5"
        w="30vw"
        h="100vh"
      >
        <VStack pb="5" w="30vw" h="100vh" spacing="3">
          <Text fontSize="xl" fontWeight="bold">
            eReport
          </Text>
          <Button
            w="80%"
            mt="5"
            variant="ghost"
            colorScheme="teal"
            justifyContent="left"
          >
            <HiOutlineNewspaper />
            <Text ps="2">Production</Text>
          </Button>
          <Button
            w="80%"
            variant="ghost"
            colorScheme="teal"
            justifyContent="left"
          >
            <VscGraph />
            <Text ps="2">Surplus</Text>
          </Button>
          <Button
            w="80%"
            variant="ghost"
            colorScheme="teal"
            justifyContent="left"
          >
            <GrMoney />
            <Text ps="2">Claim</Text>
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
          <PiSignOutLight />
          <Text ps="2">Logout</Text>
        </Button>
      </VStack>
    </>
  );
}
