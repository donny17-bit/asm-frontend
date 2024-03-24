"use client";

import { useState } from "react";
import { getCookie } from "cookies-next";

import {
  Box,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  VStack,
  Link,
  Spacer,
} from "@chakra-ui/react";

export default function Login() {
  const cookie = getCookie("test"); // for example

  const [form, setForm] = useState({
    nik: "",
    password: "",
  });

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log("nik : ", form.nik);
    console.log("password : ", form.password);
    // const result = LoginApi(form);
    const result = await fetch("api/auth", {
      method: "post",
      body: JSON.stringify(form),
    });
    console.log(result);
  };

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
      >
        <Card
          width={["90%", "60%", "50%", "30%"]}
          // h={"60%"}
          shadow="xl"
          border="1px"
          borderColor="gray.200"
        >
          <CardHeader fontWeight="bold" fontSize="xl" textAlign="center">
            eReport Sinarmas
          </CardHeader>
          <CardBody pt="0">
            <form onSubmit={submitHandler}>
              <FormControl>
                <FormLabel mb="0">NIK</FormLabel>
                <Input
                  variant="flushed"
                  size="sm"
                  type="text"
                  value={form.nik}
                  name="nik"
                  borderColor="gray.400"
                  onChange={formHandler}
                />
                <FormLabel mt="5" mb="0">
                  Password
                </FormLabel>
                <Input
                  variant="flushed"
                  size="sm"
                  mt="0"
                  type="password"
                  name="password"
                  borderColor="gray.400"
                  value={form.password}
                  onChange={formHandler}
                />
                <VStack mt="5">
                  <Button
                    w="100%"
                    colorScheme="teal"
                    borderColor="gray.400"
                    border="1px"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Link href="#">
                    <Text color="blue.500" fontSize="sm">
                      Forgot Password
                    </Text>
                  </Link>
                </VStack>
              </FormControl>
            </form>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}
