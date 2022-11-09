import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Container maxW={"xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Help to Reclaim your
            <br />
            <Text as={"span"} color={"blue.600"}>
              Life and Freedom
            </Text>
          </Heading>
          <Text color={"gray.600"}>
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"blue"}
              bg={"blue.600"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
