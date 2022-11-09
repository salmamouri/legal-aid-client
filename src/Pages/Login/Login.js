import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <Container my={24}>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel fontSize={20}>Email address</FormLabel>
        <Input name="email" type="email" placeholder="Enter email" />

        <FormLabel fontSize={20}>Password</FormLabel>
        <Input name="password" type="password" placeholder="Password" />

        <Button fontSize={20} my={4} colorScheme="blue" type="submit">
          Login
        </Button>

        <FormHelperText colorScheme="red">{error}</FormHelperText>
      </FormControl>

      <Text fontSize={20} fontWeight={500}>
        New to here? Please
        <Link to="/signup">
          <Box color="blue.600" mx={2} fontWeight={500} as="span">
            Sign Up
          </Box>
        </Link>
      </Text>
    </Container>
  );
};

export default Login;
