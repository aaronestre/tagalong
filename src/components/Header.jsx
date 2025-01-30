import React from "react";
import {
  Flex,
  AppShell,
  Burger,
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";

function Header({opened, toggle}) { 
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell.Header>
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ padding: "10px 20px" }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Text size="xl" variant="gradient" gradient={{ from: "orange", to: "red", deg: 45 }}>Tagalong</Text>
        <Button size="sm" variant="link" onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <IconMoon /> : <IconSun />}
        </Button>
      </Flex>
    </AppShell.Header>
  );
}
export default Header;