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
  //const filterData

  // lanjut nnti dlu
  const isFilter = data.isFilter;

  const toggleFilter = data.toggleFilter;

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

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
      <form onSubmit={filterHandler}>
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
            {/* nnti diganti posisinya */}
            <Button
              mt="1"
              ms="10"
              variant={"solid"}
              size="sm"
              colorScheme={"teal"}
              type="submit"
            >
              Apply filter
            </Button>
          </Flex>
          <IconButton
            onClick={toggleFilter}
            me="10px"
            variant={"ghost"}
            isRound={true}
            aria-label="Search database"
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
          </>
        ) : (
          <></>
        )}
      </form>
    </Box>
  );
}
