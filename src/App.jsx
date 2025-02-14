import { React, useState } from "react";

// Import libary components
import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import { useLocation } from "react-router-dom";

// Import custom components
import Header from "./components/common/Header.jsx";
import Navbar from "./components/common/Navbar.jsx";
import RouterSwitcher from "./components/common/RouterSwitcher.jsx";
function App() {
    const [opened, { toggle }] = useDisclosure();
    const isLandingPage = useLocation().pathname === "/";

    return (
        <>
            <AppShell
                header={{ height: "60" }}
                navbar={
                    isLandingPage
                    ? undefined
                    : {
                        width: "300",
                        breakpoint: "sm",
                        collapsed: { mobile: !opened },
                    }
                }
                padding="md"
            >
                <Header opened={opened} toggle={toggle} />
                {!isLandingPage && <Navbar />}
                <AppShell.Main>
                    <RouterSwitcher />
                </AppShell.Main>
            </AppShell>
        </>
    );
}

export default App;