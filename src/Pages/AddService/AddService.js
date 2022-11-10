import {
  Button,
  Center,
  Heading,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const AddService = () => {
  const formEl = useRef();
  const [details, setDetails] = useState("");
  console.log(details);
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const image = form.image.value;

    const newService = {
      title: name,
      price,
      img: image,
      details,
    };

    fetch("http://localhost:5000/services", {
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
      <Center my={10}>
        <Heading color="blue.600">Add Service</Heading>
      </Center>
      <SimpleGrid mx={300} my={50}>
        <form ref={formEl}>
          <label htmlFor="name-input">Name</label>
          <input id="name-input" name="name" />
          <label htmlFor="team-input">price</label>
          <input id="team-input" name="price" />

          <Textarea
            onChange={(e) => setDetails(e.target.value)}
            name="details"
            my={2}
            placeholder="Add Details"
          ></Textarea>
          <Button onClick={handleAddService} colorScheme="blue" my={4}>
            Add Review
          </Button>
        </form>
      </SimpleGrid>
    </div>
  );
};

export default AddService;
