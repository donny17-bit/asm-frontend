"use client";

import { useState } from "react";

import {
  VStack,
  Text,
  Button,
  Icon,
  Spacer,
  Box,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BsArrowBarLeft } from "react-icons/bs";
import { LuArrowLeftFromLine } from "react-icons/lu";

type min = {
  isOpen: boolean;
  toggleBar: any;
};

export default function Sidebar(min: data) {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);
  // };

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
        bgColor={"#ffede3"}
        // bgColor={"white"}
        // bgGradient="linear(to-b, #fc9356, #ffede3)"
        width={min.isOpen ? [null, null, "30vw", "15vw"] : "50px"}
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
          <HStack w="100%" pb="5" px="5">
            {/* logo */}
            <Text
              w={"90%"}
              fontSize="2xl"
              fontWeight="bold"
              textAlign={"left"}
              color="gray.700"
            >
              eReport
            </Text>
            <Spacer />
            {/* hide button */}
            <Button
              onClick={min.toggleBar}
              fontSize={"20"}
              // border={"1px solid black"}
              py={"3px"}
              pl={"3px"}
              mr={"0px"}
              _hover={{ cursor: "pointer", color: "#FE5E37" }}
            >
              <LuArrowLeftFromLine />
            </Button>
          </HStack>
          <Divider
            color={"gray.400"}
            bgColor={"gray.400"}
            // border={"1px"}
          />
          <Button
            w="90%"
            mt="6"
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
            <Text ps="2" fontSize={"18"}>
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
            <Text ps="2" fontSize={"18"}>
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
            <Text ps="2" fontSize={"18"}>
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
            <Text ps="2" fontSize={"18"}>
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
