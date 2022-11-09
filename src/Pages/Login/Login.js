import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
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

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form
        style={{
          width: "400px",
          margin: "auto",
          marginTop: "100px",
          marginBottom: "100px",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" />
        </FormControl>

        <Button fontSize={20} my={4} colorScheme="blue" type="submit">
          Login
        </Button>

        <Text fontSize={20} fontWeight={500}>
          New to here? Please
          <Link to="/signup">
            <Box color="blue.600" mx={2} fontWeight={500} as="span">
              Sign Up
            </Box>
          </Link>
        </Text>
      </form>
    </div>
  );
};

export default Login;
