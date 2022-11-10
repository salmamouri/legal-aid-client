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
import Review from "./Review";

const Details = () => {
  const service = useLoaderData();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={12} py={24}>
      <Box
        role={"group"}
        p={6}
        mx={4}
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
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              Fee:{service.price}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Review></Review>
      </Box>
    </SimpleGrid>
  );
};

export default Details;
