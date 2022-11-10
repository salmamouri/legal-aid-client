import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  return (
    <Box m={5}>
      <Heading color="blue.600" mx="auto" marginBottom={8}>
        <Center> Review</Center>
      </Heading>
      {user?.uid ? (
        <form style={{ width: "550px" }}>
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" />
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" />
          <Textarea my={2} placeholder="Add a review"></Textarea>
          <Button colorScheme="blue" my={4}>
            Add Review
          </Button>
        </form>
      ) : (
        <Center className="">
          <Text fontSize={18} fontWeight={600}>
            Please
            <Box color="blue.600" mx={2} as="span">
              <Link to="/login">Login </Link>
            </Box>
            to Add Review
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default Review;
