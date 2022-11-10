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
import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ServiceReview from "./ServiceReview";

const Review = () => {
  const [comment, setComment] = useState("");

  const { _id, title } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(comment);

  const submitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const name = form.name.value;

    const review = {
      service: _id,
      serviceName: title,
      name: name,
      email,
      comment,
    };
    console.log(review);
    fetch("https://legal-aid-server-six.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Box m={5}>
      <Heading color="blue.600" mx="auto" marginBottom={8}>
        <Center> Review</Center>
      </Heading>
      <ServiceReview></ServiceReview>
      {user?.uid ? (
        <form style={{ width: "550px" }}>
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" />
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" defaultValue={user?.email} />
          <Textarea
            onChange={(e) => setComment(e.target.value)}
            name="review"
            my={2}
            placeholder="Add a review"
          ></Textarea>
          <Button onClick={submitReview} colorScheme="blue" my={4}>
            Add Review
          </Button>
        </form>
      ) : (
        <Center>
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
