"use client";

import { useState } from "react";

import {
  VStack,
  Flex,
  Text,
  Button,
  Icon,
  Spacer,
  HStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  Select,
} from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import TableComp from "../table/table";
import Filter from "../filter/filter";

type data = {
  isOpen: boolean;
};

export default function ProductionLt(data: data) {
  const isOpen = data.isOpen;
  const [isFilter, setIsFilter] = useState(true);

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  return (
    <>
      <Flex direction="column" w="100%" h={"100vh"} maxW={"100%"}>
        <Navbar />
        <Flex
          flex="1"
          direction={"column"}
          // spacing={"10px"}
          bgColor="#F6F7F9" // abu2
          // h={"100vh"}
          px="20px"
          py="10px"
          // w="inherit"
        >
          {/* filter */}
          <Filter isFilter={isFilter} toggleFilter={toggleFilter} />
          {/* table */}
          <TableComp isOpen={isOpen} isFilter={isFilter} />
        </Flex>
      </Flex>
    </>
  );
}
