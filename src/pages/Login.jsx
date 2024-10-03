import {
  Button,
  Paper,
  PasswordInput,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../app/services/AuthApi";
import { toggleIsLoggedIn } from "../app/slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login,{error,isLoading}] = useLoginMutation()
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  // email onChange
  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
  };
  // password onChange
  const handlePasswordonChange = (e) => {
    setPassword(e.target.value);
  };
  // onSubmit
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const userInfo = {
      email:email,
      password:password,
    }
    const resp = await login(userInfo)
    if(resp.data.token){
      localStorage.setItem('token',resp.data.token)
      localStorage.setItem('user',email)
      localStorage.setItem('isLoggedIn','true')
      dispatch(toggleIsLoggedIn(true))
      navigate('/')
    }
    console.log("res",resp.data.token);
  };

  if(isLoading) return <h1>loading ...</h1>
  if(error) return <h1>Error ...</h1>
  return (
    <Paper
      my="4rem"
      mx="auto"
      shadow="sm"
      withBorder
      w="25rem"
      p="xl"
      h="22rem"
    >
      <Text fw="bold" my="1rem" fz="h3" ta="center">
        Login
      </Text>
      <form onSubmit={handleFormSubmission}>
        {/* email field */}
        <TextInput
          value={email}
          onChange={handleEmailOnchange}
          size="md"
          label="Email"
          variant="default"
          placeholder="devmoha"
          type="email"
        />
        <Space h="md"></Space>
        {/* password field */}
        <PasswordInput
          size="md"
          value={password}
          variant="default"
          placeholder="Please put strong password"
          label="Password"
          onChange={handlePasswordonChange}
        />
        <Button type="submit" style={{ float: "right" }} my="1rem">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
