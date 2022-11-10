import { ChatIcon, EmailIcon } from "@chakra-ui/icons";
import {
  AlertDialogOverlay,
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const allReviews = useLoaderData();

  const { user } = useContext(AuthContext);
  const reviews = allReviews.filter((review) => review.email === user.email);

  return (
    <div>
      <Center>
        <Heading my={8} color="blue.600">
          My Reviews
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}>
        {reviews.map((review) => (
          <Box
            py={5}
            color="blue.600"
            border="1px"
            mx={10}
            borderRadius="20px"
            borderColor="blue.800"
            my={10}
            key={review._id}
          >
            <Center>
              <EmailIcon mx={2} />
              <Text fontSize={20}>{review.email}</Text>
            </Center>
            <Center>
              <ChatIcon mx={2} />
              <Text fontSize={24} fontWeight={600}>
                {review.comment}
              </Text>
            </Center>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default MyReviews;
