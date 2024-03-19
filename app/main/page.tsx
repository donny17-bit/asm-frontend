"use client";

import React, { useState } from "react";

import {
  Flex,
  VStack,
  Text,
  Button,
  Icon,
  Spacer,
  Box,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Sidebar from "../components/sideBarDemo/sidebar";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { BsArrowBarLeft } from "react-icons/bs";
import { LuArrowLeftFromLine } from "react-icons/lu";

export default function Main() {
  const [counter, setCounter] = useState(0);
  //   const [isOpen, setIsOpen] = useState(true);

  //   const toggleSidebar = () => {
  //     setIsOpen(!isOpen);
  //     console.log(isOpen);
  //     // console.log(e);
  //   };

  const toggleCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
    // console.log(e);
  };

  return (
    <Flex>
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
        // width={isOpen ? "250px" : "50px"}
        w="250px"
        // transition="width 0.3s"
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
              fontSize={"20"}
              // border={"1px solid black"}
              py={"3px"}
              pl={"3px"}
              mr={"0px"}
              //   _hover={{ cursor: "pointer", color: "#FE5E37" }}
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              {/* <Text>nilai isOpen : {isOpen}</Text> */}
              <Text>nilai counter : {counter}</Text>
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
    </Flex>
  );
}
