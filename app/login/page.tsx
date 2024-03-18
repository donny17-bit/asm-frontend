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
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
      >
        <Card width="60%" shadow="xl" border="1px" borderColor="gray.200">
          <CardHeader fontWeight="bold" fontSize="xl" textAlign="center">
            eReport Sinarmas
          </CardHeader>
          <CardBody pt="0">
            <FormControl>
              <FormLabel mb="0">NIK</FormLabel>
              <Input
                variant="flushed"
                size="sm"
                type="email"
                borderColor="gray.400"
              />
              <FormLabel mt="5" mb="0">
                Password
              </FormLabel>
              <Input
                variant="flushed"
                size="sm"
                mt="0"
                type="password"
                borderColor="gray.400"
              />
              <VStack mt="5">
                <Button
                  w="100%"
                  colorScheme="teal"
                  borderColor="gray.400"
                  border="1px"
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
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}
