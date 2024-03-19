"use client";

import { useState } from "react";

import {
  Text,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Divider,
  Center,
  Select,
} from "@chakra-ui/react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function Filter() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <Box
      bgColor="white"
      borderRadius={"md"}
      border="1px"
      borderColor="gray.100"
      w={"inherit"}
      h="fit-content"
      // maxW={[null, null, null, "50vw", "50vw", "83vw"]}
      //   h={"100px"}
      px="10px"
      py="10px"
    >
      <Text fontSize={"20"} fontWeight={"semibold"} ps="10px">
        Filter
      </Text>
      <FormControl>
        {/* parent */}

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
                size="sm"
                variant="outline"
                borderRadius="lg"
                borderColor="gray.300"
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
    </Box>
  );
}
