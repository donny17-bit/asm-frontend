"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  setLoading,
  setError,
} from "../store/reducer/userReducer";
// import { getCookie } from "cookies-next"; --> nnti dihapus/uninstall
import { useRouter } from "next/navigation";

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

interface dataLogin {
  cabang: string;
  divisi: string;
  message: string;
  nik: string;
  status: string;
}

interface UserState {
  userData: dataLogin | null;
  loading: boolean;
  error: string | null;
}

console.log("setUserData", setUserData);

export default function Login() {
  const router = useRouter();

  const dispatch = useDispatch();
  const userState = useSelector((state: { user: UserState }) => state.user);

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

    dispatch(setLoading(true));

    const result = await fetch("api/auth", {
      method: "post",
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => dispatch(setError(error.message)));

    dispatch(setUserData(result.data));
    dispatch(setLoading(false));

    localStorage.setItem("nik", result.data.nik);
    localStorage.setItem("cabang", result.data.cabang);

    if (result.data.message == "Login successful") {
      // nnti diganti
      router.push("/"); // to check reducer
    } else {
      alert(`login gagal : ${result.data.message}`);
    }
    console.log(result);
  };

  const prodBtn = async () => {
    // const { data, headers } = await axios.get("/api/business-source?lvl=3", {
    //   withCredentials: true,
    // });
    // console.log(data);
    // console.log(headers);
    // const cookieStore = cookies();
    // const session = cookieStore.get("session");
    // const allCookies = document.cookie;
    // const cookies = parseCookies();
    // const myCookieValue = cookies.myCookieName;
    // console.log(allCookies);
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
                  <Button
                    w="100%"
                    colorScheme="teal"
                    borderColor="gray.400"
                    border="1px"
                    onClick={() => prodBtn()}
                  >
                    cek cookie
                  </Button>
                  <Link href="/dash">
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
