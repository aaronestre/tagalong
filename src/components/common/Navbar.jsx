import {React, useState} from "react";
import { AppShell, NavLink, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconSchool } from "@tabler/icons-react";
import { IconBook2 } from "@tabler/icons-react";
import { IconLogout2 } from '@tabler/icons-react';

import "../../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("/chat");

  const handleClick = (route) => {
    navigate(route);
    setIsActive(route);
  }

  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <AppShell.Section>
        <NavLink
          className="link"
          leftSection={<IconSchool />}
          label={<Text fz="20px">Tutor</Text>}
          onClick={() => handleClick("/chat")}
          m="5px"
          bg={isActive === "/chat" ? "orange" : ""}
          c={isActive === "/chat" ? "white" : ""}
        />
        <NavLink
          className="link"
          leftSection={<IconBook2 />}
          label={<Text fz="20px">Vocab</Text>}
          onClick={() => handleClick("/vocab")}
          m="5px"
          bg={isActive === "/vocab" ? "orange" : ""}
          c={isActive === "/vocab" ? "white" : ""}

        />
      </AppShell.Section>
      <AppShell.Section grow></AppShell.Section>
      <AppShell.Section>
        <NavLink leftSection={<IconLogout2 />} label={<Text fz="20px">"Logout"</Text>}/>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
export default Navbar;