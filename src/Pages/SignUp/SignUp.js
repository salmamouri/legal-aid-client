import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleUpdateProfileUser = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoUrl: photoUrl,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    // console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateProfileUser(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
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
    <Container my={24}>
      <FormControl my={12} onSubmit={handleSubmit}>
        <FormLabel fontSize={20}>Your Name</FormLabel>
        <Input type="text" name="name" placeholder="Enter Your Name" />

        <FormLabel fontSize={20}>Email address</FormLabel>
        <Input type="email" name="email" placeholder="Enter email" required />

        <FormLabel fontSize={20}>Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <Button fontSize={20} colorScheme="blue" my={2} type="submit">
          Sign Up
        </Button>
        <FormHelperText className="text-danger">{error}</FormHelperText>
      </FormControl>
      <Text fontSize={20} fontWeight={600}>
        Already have an account?{" "}
        <Link to="/login">
          <Box color="blue.500" as="span">
            Login
          </Box>
        </Link>
      </Text>

      <div className=" m-5">
        <ButtonGroup vertical>
          <Button
            fontSize={18}
            onClick={handleGoogleSignIn}
            colorScheme="blue"
            my={3}
          >
            <Icon mx={2} as={FaGoogle} />
            SignUp with Google
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default Register;
