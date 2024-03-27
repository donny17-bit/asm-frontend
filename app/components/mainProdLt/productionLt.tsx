"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProdLt } from "../../store/reducer/prodLtReducer";

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
  Skeleton,
} from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import TableComp from "../table/table";
import Filter from "../filter/filter";

type data = {
  isOpen: boolean;
};

export default function ProductionLt(data: data) {
  const prodData = useSelector(selectProdLt);
  const isProdDataEmpty = Object.keys(prodData).length === 0;

  const { current_page, max_page, page_size } = prodData.data;
  const dataProd = prodData.data.data;
  // if (!isProdDataEmpty) {
  // } else {
  //   const { current_page, max_page, page_size } =
  //   const dataProd = prodData.data.data;
  // }

  // console.log(prodData.data);
  // console.log(current_page, max_page, page_size, dataProd);

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

          {isProdDataEmpty || prodData.loading ? (
            <>
              <Skeleton
                mt="10px"
                // flex="1"
                bgColor="white"
                borderRadius={"md"}
                pt={"10px"}
                w={"100%"}
                height={
                  isFilter
                    ? [null, null, "60vh", "50vh", "64vh"]
                    : [null, null, "60vh", "50vh", "78vh"]
                }
              />
            </>
          ) : (
            <>
              <TableComp
                isOpen={isOpen}
                isFilter={isFilter}
                dataProd={dataProd}
                currentPage={current_page}
                maxPage={max_page}
                pageSize={page_size}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
}
