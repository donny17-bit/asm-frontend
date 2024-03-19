"use client";

import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/sidebar";
import ProductionLt from "./components/mainProdLt/productionLt";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <ProductionLt isOpen={isOpen} />
      </Flex>
    </>
  );
}
