import { ChatIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceReview = () => {
  const { _id } = useLoaderData();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch(`https://legal-aid-server-six.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);
  return (
    <div>
      {reviews?.map((review) => (
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
    </div>
  );
};

export default ServiceReview;
