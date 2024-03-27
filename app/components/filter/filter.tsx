"use client";

import { useState } from "react";

import {
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Divider,
  Center,
  Select,
  Button,
  IconButton,
} from "@chakra-ui/react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type data = {
  isFilter: boolean;
  toggleFilter: any;
};

export default function Filter(data: data) {
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1); // nnti diganti jadi sesuai filter di component production
  const [pageSize, setPageSize] = useState(100); // nnti diganti jadi sesuai filter di component production

  const changeBeginDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    console.log("begin date value : ", value);

    setBeginDate(value);
  };

  const changeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setEndDate(value);
    console.log("end date in value : ", value);
  };

  const filterHandler = async (e: any) => {
    e.preventDefault();

    // convert date format to DDMMYYYY
    const bDateObj = new Date(beginDate);
    const eDateObj = new Date(endDate);

    // Extract day, month, and year from the Date object
    const dayBegin = String(bDateObj.getDate()).padStart(2, "0");
    const monthBegin = String(bDateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const yearBegin = String(bDateObj.getFullYear());

    const dayEnd = String(eDateObj.getDate()).padStart(2, "0");
    const monthEnd = String(eDateObj.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const yearEnd = String(eDateObj.getFullYear());

    // change the format to YYYYMMDD
    const beginDateStr = `${yearBegin}${monthBegin}${dayBegin}`;
    const endDateStr = `${yearEnd}${monthEnd}${dayEnd}`;

    const result = await fetch(
      `api/production?ldc_id=125&page=1&page_size=10&sort=asc&order=thnbln, client_name&begin_date=${beginDateStr}&end_date=${endDateStr}`,
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error : ", error));

    console.log(result);
  };

  const isFilter = data.isFilter;
  const toggleFilter = data.toggleFilter;

  return (
    <Box
      // flex={"1"}
      bgColor="white"
      borderRadius={"md"}
      border="1px"
      borderColor="gray.100"
      // w={"inherit"}
      // maxW={"inherit"}
      h={isFilter ? "fit-content" : "60px"}
      // maxW={[null, null, null, "50vw", "50vw", "83vw"]}
      //   h={"100px"}
      px="10px"
      py="10px"
      transform={"height 1s ease-in-out"}
    >
      <Flex justify={"space-between"}>
        <Flex>
          <Text
            textAlign={"center"}
            fontSize={"20"}
            fontWeight={"semibold"}
            ps="10px"
            pt="5px"
          >
            Filter
          </Text>
          <Button
            ms="10"
            size="sm"
            mt="1"
            variant="solid"
            onClick={(e) => filterHandler(e)}
          >
            Apply Filter
          </Button>
        </Flex>
        <IconButton
          onClick={toggleFilter}
          me="10px"
          variant={"ghost"}
          isRound={true}
          aria-label="minimize=btn"
          icon={<IoIosArrowDown />}
          size="md"
          _hover={{ color: "#FE5E37", bgColor: "gray.200" }}
          _active={{ color: "#FE5E37", bgColor: "gray.200" }}
          transform={isFilter ? "rotate(0deg)" : "rotate(180deg)"}
        />
      </Flex>
      {isFilter ? (
        <>
          <FormControl>
            <Flex h="fit-content">
              <Box
                // border={"1px"}
                borderColor="gray.300"
                borderRadius="lg"
                flex="1"
                p="10px"
              >
                <FormLabel>Periode</FormLabel>
                <Flex>
                  <Input
                    flex="2"
                    type="date"
                    placeholder="dd-mm-yyyy"
                    value={beginDate}
                    size="sm"
                    variant="outline"
                    borderRadius="lg"
                    borderColor="gray.300"
                    onChange={changeBeginDate}
                  />
                  <Text
                    textAlign="center"
                    pt="2px"
                    mx="5px"
                    fontWeight={"semibold"}
                  >
                    s/d
                  </Text>
                  <Input
                    flex="2"
                    type="date"
                    value={endDate}
                    onChange={changeEndDate}
                    size="sm"
                    variant={"outline"}
                    borderRadius="lg"
                    borderColor="gray.300"
                  />
                </Flex>
                <FormLabel mt="10px">Tipe</FormLabel>
                <Select size="sm" borderRadius={"lg"} borderColor="gray.300">
                  <option value="detail">Detail</option>
                  <option value="summary">Summary</option>
                </Select>
              </Box>
              <Center h="150px">
                <Divider orientation="vertical" borderColor={"gray.300"} />
              </Center>
              <Box
                // border={"1px"}
                borderColor="gray.300"
                borderRadius="lg"
                flex="1"
                p="10px"
                mx="5px"
              >
                <FormLabel>Business Source</FormLabel>
                <Input
                  type="email"
                  size="sm"
                  variant="outline"
                  borderRadius={"lg"}
                />
                <FormLabel mt="10px">Business Class</FormLabel>
                <Input type="email" size="sm" borderRadius={"lg"} />
              </Box>
              <Center h="150px">
                <Divider orientation="vertical" borderColor={"gray.300"} />
              </Center>
              <Box
                // border={"1px"}
                borderColor="gray.300"
                borderRadius="lg"
                flex="1"
                p="10px"
                me={"5px"}
              >
                <FormLabel>Branch</FormLabel>
                <Input type="email" size="sm" borderRadius={"lg"} />
                <FormLabel mt="10px">Client Name</FormLabel>
                <Input type="email" size="sm" borderRadius={"lg"} />
              </Box>
              <Center h="150px">
                <Divider orientation="vertical" borderColor={"gray.300"} />
              </Center>
              <Box
                // border={"1px"}
                borderColor="gray.300"
                borderRadius="lg"
                flex="1"
                p="10px"
              >
                <FormLabel>No Polis</FormLabel>
                <Input type="email" size="sm" borderRadius={"lg"} />
                <FormLabel mt="10px">No Cif</FormLabel>
                <Input type="email" size="sm" borderRadius={"lg"} />
              </Box>
            </Flex>
          </FormControl>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
