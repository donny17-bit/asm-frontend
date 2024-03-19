import {
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
  Center,
  Flex,
} from "@chakra-ui/react";
import { FaRegFileExcel } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type data = {
  isOpen: boolean;
};

export default function TableComp(data: data) {
  const isOpen = data.isOpen;

  return (
    <Flex direction={"column"}>
      <Box
        mt="10px"
        // flex="1"
        bgColor="white"
        borderRadius={"md"}
        pt={"10px"}
        w={"100%"}
        h="fit-content"
        maxW="100%"
        // maxW={[null, null, "50%", "50%", "50vw", "83vw"]}
        // maxW={"82vw"} // nnti diganti
        // overflowX={"auto"}
      >
        <HStack mx={"20px"} mb="10px">
          <IconButton
            isRound={true}
            aria-label="Search database"
            icon={<IoIosArrowBack />}
            size="sm"
            _hover={{ color: "#FE5E37", bgColor: "gray.200" }}
            _active={{ color: "#FE5E37", bgColor: "gray.200" }}
          />
          <IconButton
            aria-label="Search database"
            icon={<IoIosArrowForward />}
            isRound={true}
            size="sm"
            _hover={{ color: "#FE5E37", bgColor: "gray.200" }}
            _active={{ color: "#FE5E37", bgColor: "gray.200" }}
          />
          <Text fontSize={"15"} fontWeight={"normal"} textColor="gray.600">
            Showing 1-10000 row of 512031
          </Text>
          <Select w="200px" size="sm" variant="filled" borderRadius="lg">
            <option value="option1">1000</option>
            <option value="option2">10.000</option>
            <option value="option3">100.000</option>
            <option value="option3">1.000.000</option>
          </Select>
          <Spacer />
          <Button variant={"ghost"} colorScheme="teal" size={"md"}>
            Download excel
            <Text fontSize={"x-large"}>
              <FaRegFileExcel />
            </Text>
          </Button>
        </HStack>
      </Box>
      <Center bgColor={"white"}>
        <TableContainer
          borderBottomRadius={"md"}
          overflowX={"auto"}
          overflowY={"auto"}
          // w="inherit"
          // maxW="inherit"
          maxW={
            isOpen ? [null, "100%", "100%", "100%", "50vw", "82vw"] : "92vw"
          }
          maxH={[null, null, "60vh", "50vh", "66vh"]}
          // maxH={"780px"}
          // maxH="100"
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
      </Center>
    </Flex>
  );
}
