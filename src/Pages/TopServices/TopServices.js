import { Button, Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopServiceCard from "./TopServiceCard";

const TopServices = () => {
  const [topServices, setTopServices] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/topservices")
      .then((res) => res.json())
      .then((data) => setTopServices(data));
  }, []);
  console.log(topServices);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
        {topServices?.map((topService) => (
          <TopServiceCard
            key={topService._id}
            topService={topService}
          ></TopServiceCard>
        ))}
      </SimpleGrid>
      <Center>
        <Button colorScheme="blue" size="md">
          <Link to="/services">See All</Link>
        </Button>
      </Center>
    </>
  );
};

export default TopServices;
