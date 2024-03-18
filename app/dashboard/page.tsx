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
import { MdOutlineSimCardDownload } from "react-icons/md";
import { LuArrowLeftFromLine } from "react-icons/lu";

export default function Dashboard() {
  return (
    <>
      <Flex>
        <Sidebar />
        <VStack w="100%">
          {/* navbar */}
          <HStack h={"70px"} w={"100%"} p="20px">
            {/* <Input
              flex={0.5}
              size={"md"}
              placeholder="Cari no polis"
              // borderColor={"gray.400"}
              variant="filled"
            /> */}
            <Text fontSize={"20"} fontWeight={"semibold"}>
              Production Longterm
            </Text>
            <Spacer />
            <Text
              // flex={1}
              color={"gray.700"}
              fontWeight={"normal"}
              fontSize={"18"}
            >
              Welcome, Donny Wahyu
            </Text>
          </HStack>
          {/* main */}
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
              h={"100px"}
              p="20px"
            >
              <Text fontSize={"20"} fontWeight={"semibold"}>
                Filter
              </Text>
            </Box>

            {/* table */}
            <Box
              bgColor="white"
              borderRadius={"md"}
              border="1px"
              borderColor="gray.100"
              pt={"10px"}
              w={"inherit"}
              maxW={"83vw"}
              // overflowX={"auto"}
            >
              {/* <Box h={"100px"} bgColor={"white"}></Box> */}

              <HStack mx={"20px"} mb="10px">
                {/* <Text fontSize={"20"} fontWeight={"semibold"}>
                  Production Longterm
                </Text> */}
                <Spacer />
                <Button variant={"ghost"} colorScheme="teal" size={"md"}>
                  Download excel
                  <Text fontSize={"x-large"}>
                    <FaRegFileExcel />
                  </Text>
                  {/* <MdOutlineSimCardDownload /> */}
                </Button>
              </HStack>
              <TableContainer
                borderBottomRadius={"md"}
                overflowY={"auto"}
                overflowX={"auto"}
                maxH={"780px"}
              >
                <Table variant="simple">
                  <Thead
                    bgColor={"#fcb890"}
                    position="sticky"
                    top="0"
                    zIndex="sticky"
                  >
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th>into</Th>
                      <Th>into</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>

                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}
