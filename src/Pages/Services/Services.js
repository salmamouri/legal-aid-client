import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3}>
      {services?.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </SimpleGrid>
  );
};

export default Services;
