import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const Details = () => {
  const service = useLoaderData();

  return (
    <div>
      <SimpleGrid column={2} spacing={12} py={24} px={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"550px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url()`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={482}
              objectFit={"cover"}
              src={service.img}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={700}>
              {service.title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={500} fontSize={"lg"}>
                {service.details}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Details;
