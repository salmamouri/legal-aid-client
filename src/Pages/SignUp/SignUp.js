import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Box>
      <form
        style={{
          width: "400px",
          margin: "auto",
          marginTop: "80px",
          marginBottom: "30px",
        }}
        onSubmit={handleSubmit}
        my={24}
      >
        <FormControl id="Name">
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" />
        </FormControl>

        <Button fontSize={20} my={4} colorScheme="blue" type="submit">
          Sign Up
        </Button>

        <Text fontSize={20} fontWeight={500}>
          Already have an account?
          <Link to="/login">
            <Box color="blue.600" mx={2} fontWeight={500} as="span">
              Login
            </Box>
          </Link>
        </Text>
      </form>
      <Center>
        <Button my={4} colorScheme="blue" onClick={handleGoogleSignIn}>
          <Icon mx={3} as={FaGoogle} />
          SignUp with Google
        </Button>
      </Center>
    </Box>
  );
};

export default SignUp;
