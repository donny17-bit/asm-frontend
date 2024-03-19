import { VStack, Flex } from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
import TableComp from "../table/table";
import Filter from "../filter/filter";

export default function ProductionLt() {
  return (
    <>
      <Flex direction="column" w="100%">
        <Navbar />
        <Flex
          flex="1"
          direction={"column"}
          // spacing={"10px"}
          bgColor="#F6F7F9" // abu2
          // h={"100vh"}
          w="100%"
          px="20px"
          py="10px"
        >
          {/* filter */}
          <Filter />
          {/* table */}
          <TableComp />
        </Flex>
      </Flex>
    </>
  );
}
