import {
  VStack,
  Text,
  Button,
  Icon,
  Spacer,
  HStack,
  Flex,
  Input,
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
} from "@chakra-ui/react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { GrMoney } from "react-icons/gr";
import { PiSignOutLight } from "react-icons/pi";
import { FaRegFileExcel } from "react-icons/fa";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import TableComp from "../components/table/table";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { LuArrowLeftFromLine } from "react-icons/lu";

export default function Dashboard() {
  return (
    <>
      <Flex>
        <Sidebar />
        {/* canvas */}
        <VStack w="100%">
          <Navbar />
          <VStack
            spacing={"10px"}
            bgColor="#F6F7F9"
            h={"100%"}
            w="100%"
            px="20px"
            py="10px"
          >
            {/* filter */}
            <Box
              bgColor="white"
              borderRadius={"md"}
              border="1px"
              borderColor="gray.100"
              w={"inherit"}
              // maxW={[null, null, null, "50vw", "50vw", "83vw"]}
              h={"100px"}
              p="20px"
            >
              <Text fontSize={"20"} fontWeight={"semibold"}>
                Filter
              </Text>
            </Box>
            {/* table */}
            <TableComp />
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}
