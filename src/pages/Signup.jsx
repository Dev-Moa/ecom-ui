import {
  Button,
  Paper,
  PasswordInput,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { useSignupMutation } from "../app/services/AuthApi";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup,{data,error,isLoading}] = useSignupMutation()
  // username onChange
  const handleUsernameOnchange = (e) => {
    setUsername(e.target.value);
  };
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
      name:username,
      email:email,
      password:password,
    }
    const resp = await signup(userInfo)
    console.log("res",resp);
    console.log("data",data);
  };

  if(isLoading) return <h1>Loading ...</h1>
  if(error) return <h1>Error ...</h1>
  return (
    <Paper
      my="4rem"
      mx="auto"
      shadow="sm"
      withBorder
      w="25rem"
      p="xl"
      h="27rem"
    >
      <Text fw="bold" my="1rem" fz="h3" ta="center">
        Signup
      </Text>
      <form onSubmit={handleFormSubmission}>
        {/* username field */}
        <TextInput
          value={username}
          onChange={handleUsernameOnchange}
          size="md"
          label="Username"
          variant="default"
          placeholder="devmoha"
        />
        <Space h="md"></Space>
        {/* email field */}
        <TextInput
          size="md"
          label="Email"
          value={email}
          variant="default"
          onChange={handleEmailOnchange}
          placeholder="devmoha@gmail.com"
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

export default Signup;
