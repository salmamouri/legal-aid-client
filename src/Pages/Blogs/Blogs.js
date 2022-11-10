import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Blogs = () => {
  return (
    <SimpleGrid
      mx={10}
      my={20}
      columns={{ base: 1, md: 1, lg: 2 }}
      spacing={20}
    >
      <Box border="1px" borderRadius="20" borderColor="blue.600" mx={10}>
        <Heading py={5} px={10}>
          Difference between SQL and NoSQL
        </Heading>
        <Text fontSize={20} py={5} px={10}>
          SQL databases are primarily called as Relational Databases whereas
          NoSQL database are primarily called as non-relational or distributed
          database.SQL data sets characterizes and controls information based
          organized inquiry language. Seeing from a side this language is very
          strong. SQL is one of the most flexible and broadly utilized choices
          accessible which settles on it a protected decision particularly for
          incredible complex questions.A NoSQL data set has dynamic diagram for
          unstructured information. Information is put away in numerous ways
          which implies it tends to be report situated, section situated,
          diagram based or coordinated as a KeyValue store. This adaptability
          implies that reports can be made without having characterized
          structure first.
        </Text>
      </Box>
      <Box border="1px" borderRadius="20" borderColor="blue.600" mx={10}>
        <Heading py={5} px={10}>
          What is JWT, and how does it work?
        </Heading>
        <Text fontSize={20} py={5} px={10}>
          JWT or JSON Web Token, is an open standard used to divide security
          data among two gatherings — a client and a server. Each JWT contains
          encoded JSON objects, including a bunch of cases. JWTs are marked
          utilizing a cryptographic calculation to guarantee that the cases
          can't be changed after the token is given. JWT vary from other web
          tokens in that they contain a bunch of cases. Claims are utilized to
          communicate data between two gatherings. What these cases are relies
          upon the utilization case within reach. For instance, a case might
          declare who gave the token, how long it is legitimate for, or what
          consents the client has been conceded.
        </Text>
      </Box>
      <Box border="1px" borderRadius="20" borderColor="blue.600" mx={10}>
        <Heading py={5} px={10}>
          What is the difference between javascript and NodeJS?
        </Heading>
        <Text fontSize={20} py={5} px={10}>
          JavaScript is a programming language, which runs in internet browsers.
          Though Node.js is a mediator or running climate for JavaScript, which
          holds a ton of requiring libraries what not. JavaScript is essentially
          one standard characterizing programming language; it can run any
          program with a default program running climate. It is an exceptionally
          harsh speech regularly utilized for a web application on any
          confirmation or a particular business rationale. We really want to
          attach in the screen without page reviving. JavaScript additionally
          assists with utilizing Ajax whenever, which assists us with calling
          any server-side content for given powerful information in light of the
          necessity. Node.js likewise holds a ton of relative libraries, which
          we typically use in javascript for broadly useful programming
          language. It is really a sort of climate or mediator that can address
          JavaScript or run any javascript program. It mostly assists us with
          executing some non-obstructing activity like some working framework
          extraordinary data like authentication subtleties or equipment
          subtleties; we might utilize hub js on the equivalent, which assist us
          with getting it done, and JavaScript typical programming won't help us
          on the equivalent.
        </Text>
      </Box>
      <Box border="1px" borderRadius="20" borderColor="blue.600" mx={10}>
        <Heading py={5} px={10}>
          How does NodeJS handle multiple requests at the same time?
        </Heading>
        <Text fontSize={20} py={5} px={10}>
          NodeJS is an offbeat occasion driven JavaScript runtime climate
          intended to construct versatile organization applications. Offbeat
          here alludes to that large number of capabilities in JavaScript that
          are handled behind the scenes without hindering some other
          solicitation.Event loop inside the NodeJS environment. But first,
          let's understand some basic terms which will help us understand the
          whole mechanism. An event loop is an event-listener which functions
          inside the NodeJS environment and is always ready to listen, process,
          and output for an event. An event can be anything from a mouse click
          to a keypress or a timeout.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Blogs;
