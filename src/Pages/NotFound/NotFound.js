import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <SimpleGrid>
      <Center>
        <Text color="blue.600" fontSize={35} fontWeight={800}>
          404
        </Text>
        <Text color="blue.600" fontSize={28} fontWeight={600}>
          Not found
        </Text>
      </Center>
    </SimpleGrid>
  );
};

export default NotFound;
