import {
  Anchor,
  Button,
  Drawer,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { FaOpencart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleIsLoggedIn } from "../app/slices/authSlice";

function Navbar() {
  //color scheme
  const [opened, { open, close }] = useDisclosure(false);
  // user auth
  const username = localStorage.getItem("user");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    dispatch(toggleIsLoggedIn(false));
  };
  return (
    <Flex
      justify="space-around"
      align="center"
      p="2rem"
      bg="orange"
      c="white"
      mb="2rem"
    >
      <Group c="white" align="center" justify="center">
        <FaOpencart size="2.5rem" />
        <Text fw={700} size="lg" component={Link} to="/">
          Adeego
        </Text>
      </Group>
      {/* menu only show above sm devices */}
      <Group display={{ base: "none", sm: "flex" }} gap="md">
        <Anchor c="white" component={Link} to="/products">
          Products
        </Anchor>
        {isLoggedIn ? (
          <Anchor c="white" component={Link} to="/carts">
          Carts
        </Anchor>
        ) : (
          <>
          <Anchor c="white" component={Link} to="/signup">
            Register
          </Anchor>
          <Anchor c="white" component={Link} to="/login">
            Login
          </Anchor>
          </>
        )}
        {isLoggedIn ? (
          <Button bg="yellow" onClick={handleLogout}>
            Logout
          </Button>
        ) : null}
      </Group>
      {/* drawer only shown on sm devices */}
      <Group display={{ base: "flex", sm: "none" }}>
        <IconMenu2 onClick={open} style={{ cursor: "pointer" }} />
        {/* drawer */}
        <Drawer opened={opened} onClose={close}>
          <Stack onClick={close} align="start" ml="2rem" gap="md">
            <Group c="orange" align="center" justify="center">
              <FaOpencart size="2.5rem" />
              <Text fw={700} size="lg" component={Link} to="/">
                Adeego
              </Text>
            </Group>
            <Anchor c="dark" component={Link} to="/products">
              Products
            </Anchor>
            {isLoggedIn ? (
              <Anchor c="dark" component={Link} to="/carts">
              Carts
            </Anchor>
            ) : (
              <Anchor component={Link} to="/login">
                Login
              </Anchor>
            )}
            {isLoggedIn ? (
              <Button bg="orange" onClick={handleLogout}>
                Logout
              </Button>
            ) : null}
          </Stack>
        </Drawer>
      </Group>
    </Flex>
  );
}

export default Navbar;
