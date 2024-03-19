import {
  VStack,
  Text,
  Button,
  Icon,
  Spacer,
  Box,
  Divider,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BsArrowBarLeft } from "react-icons/bs";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";

type data = {
  isOpen: boolean;
  toggleSidebar: any;
};

export default function Sidebar(data: data) {
  const isOpen = data.isOpen;
  const toggleSidebar = data.toggleSidebar;

  return (
    <>
      <VStack
        p="0"
        // border="1px"
        // borderColor="gray.200"
        py="5"
        // w={[null, null, "30vw", "15vw"]}
        h="100vh"
        // boxShadow={"xl"}
        // bgColor={"#fc9356"}
        // bgColor={"#ffede3"}
        bgColor={"white"}
        // bgGradient="linear(to-b, #fc9356, #ffede3)"
        width={isOpen ? [null, null, "30vw", "15vw"] : "75px"}
        transition="width 0.3s"
      >
        <VStack
          pb="5"
          w="inherit"
          // w={[null, null, "30vw", "15vw"]}
          h="100vh"
          spacing="3"
          // color={"#F6F7F9"}
        >
          <Flex direction={isOpen ? "row" : "column"} w="100%" mb="5" px="5">
            {/* logo */}
            {/* <Flex> */}
            {isOpen ? (
              <>
                <Text>
                  <Text
                    // w={"90%"}
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign={"left"}
                    color="gray.700"
                    transition="transform 0.3s, opacity 0.1s ease-in-out"
                    // opacity={isOpen ? 1 : 0}
                    transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
                  >
                    eReport
                  </Text>
                </Text>
              </>
            ) : (
              <></>
            )}

            {/* </Flex> */}

            <Spacer />
            {/* hide button */}
            <Button
              onClick={toggleSidebar}
              fontSize={"20"}
              variant={"link"}
              py={"3px"}
              pl={"3px"}
              mr={"-10px"}
              // _hover={{ cursor: "pointer", color: "#FE5E37" }}
              _hover={{ cursor: "pointer", color: "black" }}
              transition="transform 0.3s"
              transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
            >
              <IoIosArrowBack />
            </Button>
          </Flex>
          {/* <Divider
            color={"gray.400"}
            bgColor={"gray.400"}
            // mt={"-9px"}
            // border={"1px"}
          /> */}
          <Button
            w="90%"
            mt="5"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "white" }}
            _active={{ color: "#FE5E37", bgColor: "white" }}
            size="lg"
            // isActive
            leftIcon={
              <Text fontSize={"x-large"}>
                <GoHome />
              </Text>
            }
          >
            <Text
              textAlign={"left"}
              ps="2"
              w={"inherit"}
              fontSize={"18"}
              transition="transform 0.3s ease-in-out, opacity 0.1s ease-in-out"
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? "translateX(0)" : "translateX(-30px)"}
            >
              Dashboard
            </Text>
          </Button>
          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "white" }}
            _active={{ color: "#FE5E37", bgColor: "white" }}
            size="lg"
            isActive
            leftIcon={
              <Text fontSize={"x-large"}>
                <HiOutlineNewspaper />
              </Text>
            }
          >
            <Text
              ps="2"
              fontSize={"18"}
              transition="transform 0.3s, opacity 0.1s ease-in-out"
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? "translateX(0)" : "translateX(-30px)"}
            >
              Production
            </Text>
          </Button>

          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "white" }}
            _active={{ color: "#FE5E37", bgColor: "white" }}
            size="lg"
            leftIcon={
              <Text fontSize={"x-large"}>
                <VscGraph />
              </Text>
            }
          >
            <Text
              ps="2"
              fontSize={"18"}
              transition="transform 0.3s, opacity 0.1s ease-in-out"
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? "translateX(0)" : "translateX(-30px)"}
            >
              Surplus
            </Text>
          </Button>

          <Button
            w="90%"
            variant="ghost"
            color="gray.700"
            justifyContent="left"
            _hover={{ color: "#FE5E37", bgColor: "white" }}
            _active={{ color: "#FE5E37", bgColor: "white" }}
            size="lg"
            leftIcon={
              <Text fontSize={"x-large"}>
                <GrMoney />
              </Text>
            }
          >
            <Text
              ps="2"
              fontSize={"18"}
              transition="transform 0.3s, opacity 0.1s ease-in-out"
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? "translateX(0)" : "translateX(-30px)"}
            >
              Claim
            </Text>
          </Button>
        </VStack>
        <Spacer />
        <Divider
          color={"gray.400"}
          bgColor={"gray.400"}
          // border={"1px"}
        />
        <Button
          w="80%"
          mt="5"
          variant="ghost"
          colorScheme="red"
          justifyContent="left"
          size={"lg"}
          transition={"width 1s ease-in-out 10s"}
        >
          <Text fontSize={"x-large"}>
            <PiSignOutLight />
          </Text>
          <Text
            ps="2"
            fontSize={"18"}
            // w="inherit"
            transition="transform 0.3s, opacity 0.1s ease-in-out"
            opacity={isOpen ? 1 : 0}
            transform={isOpen ? "translateX(0)" : "translateX(-100%)"} // Initial position
            // hidden={isOpen ? false : true}
          >
            Logout
          </Text>
        </Button>
      </VStack>
    </>
  );
}
