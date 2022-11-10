import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const AddService = () => {
  const [details, setDetails] = useState("");

  const addService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const img = form.image.value;
    form.reset();
    alert(" Congratulation!!! New Service Added");
    // console.log(name, price, img);

    const newService = {
      title: name,
      price: price,
      img: img,
      details: details,
    };
    console.log(newService);

    fetch("https://legal-aid-server-six.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Box m={5}>
        <Heading color="blue.600" mx="auto" marginBottom={8}>
          <Center> Add Service</Center>
        </Heading>

        <form onSubmit={addService} style={{ width: "550px" }}>
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" />
          <FormLabel>Price</FormLabel>
          <Input name="price" type="text" />
          <FormLabel>Image</FormLabel>
          <Input name="image" type="text" />
          <Textarea
            onChange={(e) => setDetails(e.target.value)}
            name="review"
            my={2}
            placeholder="Add a review"
          ></Textarea>
          <Button type="submit" colorScheme="blue" my={4}>
            Add Review
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddService;
