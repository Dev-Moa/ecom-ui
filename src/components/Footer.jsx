import { Anchor, Flex, Group, Text } from "@mantine/core";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Footer() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  const username = localStorage.getItem('user')
  return (
    <Flex
      justify="space-around"
      align="center"
      p="2rem"
      mt="4rem"
      direction={{ base: "column", sm: "row" }}
      bg="gray.3"
      c="dark"
    >
      <Anchor c="orange" component={Link} to="/">
        <Text size="xl" fw={700} mb="2rem">
          <FaOpencart px="1rem"  />
          Adeego
        </Text>
      </Anchor>
      <Group gap="lg" grow>
        <Anchor c="dark" component={Link} to="/products">
          Products
        </Anchor>
        
        {isLoggedIn ? (<>{username}</>):(<Anchor c="dark" component={Link} to="/login" >
          Login
        </Anchor>)}
      </Group>
    </Flex>
  );
}

export default Footer;
