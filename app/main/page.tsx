"use client";

import { useState } from "react";

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

  function counterHandler() {
    setCounter(counter + 1);
    console.log(counter);
  }
  // const toggleCounter = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  //   // console.log(e);
  // };

  return (
    <>
      <button onClick={counterHandler}>counter</button>
      <p>{counter}</p>
    </>
    // <Flex>
    //   {/* <Button onClick={() => toggleCounter()}>counter</Button> */}
    //   <button onClick={() => toggleCounter()}>counter</button>
    //   <Text>{counter}</Text>
    // </Flex>
  );
}
