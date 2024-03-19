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

// type min = {
//   isOpen: boolean;
//   toggleBar: any;
// };

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (e) => {
    setIsOpen(!isOpen);
    console.log(e);
    console.log(isOpen);
  };

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
        width={isOpen ? [null, null, "30vw", "15vw"] : "50px"}
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
              onClick={(e) => toggleSidebar(e)}
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
        </VStack>
      </VStack>
    </>
  );
}
