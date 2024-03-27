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
  isFilter: boolean;
  dataProd: [];
  currentPage: any;
  maxPage: any;
  pageSize: any;
};

export default function TableComp(data: data) {
  const { isOpen, isFilter, dataProd, currentPage, maxPage, pageSize } = data;

  console.log(dataProd);
  console.log(currentPage);
  console.log(maxPage);
  console.log(pageSize);

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
            Showing {dataProd[0].Rn}-{dataProd[dataProd.length - 1].Rn} row of
            512031
          </Text>
          <Select
            w="200px"
            size="sm"
            variant="filled"
            borderRadius="lg"
            value={pageSize}
          >
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
          maxH={
            isFilter
              ? [null, null, "60vh", "50vh", "64vh"]
              : [null, null, "60vh", "50vh", "78vh"]
          }
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
                <Th>THNBLN</Th>
                <Th>TGL PRODUKSI</Th>
                <Th>BEGIN DATE</Th>
                <Th>END DATE</Th>
                <Th>MO</Th>
                <Th>CLIENT NAME</Th>
                <Th>KANWIL</Th>
                <Th>CABANG</Th>
                <Th>PERWAKILAN</Th>
                <Th>SUB PERWAKILAN</Th>
                <Th>JNNER</Th>
                <Th>JENIS PRODUKSI</Th>
                <Th>JENIS PAKET</Th>
                <Th>KETERANGAN</Th>
                <Th>NAMA CEDING</Th>
                <Th>NAMALEADER0</Th>
                <Th>NAMALEADER1</Th>
                <Th>NAMALEADER2</Th>
                <Th>NAMALEADER3</Th>
                <Th>GROUP BUSINESS</Th>
                <Th>BUSINESS</Th>
                <Th>NO KONTRAK</Th>
                <Th>NO POLIS</Th>
                <Th>NO CIF</Th>
                <Th>PROD KE</Th>
                <Th>NAMA DEALER</Th>
                <Th isNumeric>TSI</Th>
                <Th isNumeric>GROSS PREMIUM WRITTEN</Th>
                <Th isNumeric>DISC</Th>
                <Th isNumeric>DISC2</Th>
                <Th isNumeric>COMM</Th>
                <Th isNumeric>OC</Th>
                <Th isNumeric>BIAYA KANTOR PUSAT</Th>
                <Th isNumeric>NETTO GROSS WRITTEN PREMIUM</Th>
                <Th isNumeric>REINSURANCE</Th>
                <Th isNumeric>RI COM</Th>
                <Th isNumeric>NETTO WRITTEN PREMIUM</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataProd.map((item: any, index: number) => (
                <Tr key={item.Rn}>
                  <Td>{item.ThnBln}</Td>
                  <Td>{item.ProdDate}</Td>
                  <Td>{item.BeginDate}</Td>
                  <Td>{item.EndDate}</Td>
                  <Td>{item.Mo}</Td>
                  <Td>{item.ClientName}</Td>
                  <Td>{item.Kanwil}</Td>
                  <Td>{item.Cabang}</Td>
                  <Td>{item.Perwakilan}</Td>
                  <Td>{item.SubPerwakilan}</Td>
                  <Td>{item.Jnner}</Td>
                  <Td>{item.JenisProd}</Td>
                  <Td>{item.JenisPaket}</Td>
                  <Td>{item.Ket}</Td>
                  <Td>{item.NamaCeding}</Td>
                  <Td>{item.Namaleader0}</Td>
                  <Td>{item.Namaleader1}</Td>
                  <Td>{item.Namaleader2}</Td>
                  <Td>{item.Namaleader3}</Td>
                  <Td>{item.GrpBusiness}</Td>
                  <Td>{item.Business}</Td>
                  <Td>{item.NoKontrak}</Td>
                  <Td>{item.NoPolis}</Td>
                  <Td>{item.NoCif}</Td>
                  <Td>{item.ProdKe}</Td>
                  <Td>{item.NamaDealer}</Td>
                  <Td isNumeric>{item.Tsi}</Td>
                  <Td isNumeric>{item.Gpw}</Td>
                  <Td isNumeric>{item.Disc}</Td>
                  <Td isNumeric>{item.Disc2}</Td>
                  <Td isNumeric>{item.Comm}</Td>
                  <Td isNumeric>{item.Oc}</Td>
                  <Td isNumeric>{item.Bkp}</Td>
                  <Td isNumeric>{item.Ngpw}</Td>
                  <Td isNumeric>{item.Ri}</Td>
                  <Td isNumeric>{item.Ricom}</Td>
                  <Td isNumeric>{item.Npw}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Flex>
  );
}
