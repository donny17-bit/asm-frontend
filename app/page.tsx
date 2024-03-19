import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/sidebar";
import ProductionLt from "./components/mainProdLt/productionLt";

export default function Dashboard() {
  return (
    <>
      <Flex>
        <Sidebar />
        <ProductionLt />
      </Flex>
    </>
  );
}
