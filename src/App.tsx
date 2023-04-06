import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { Flex } from "@mantine/core";
import Header from "./SharedComponents/Header";
import SideBar from "./SharedComponents/SideBar";
import Features from "./Pages/Features";
import Error404 from "./Pages/Error404";
import Authentification from "./Pages/Authentification";
import SignUp from "./Pages/SignUp";
import { Route, Routes,BrowserRouter } from "react-router-dom";
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
 
  return (
    <BrowserRouter>
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header
          links={[
            {
              link: "/",
              label: "Home",
            },
            {
              link: "/learn",
              label: "Features",
            },
            {
              link: "/pricing",
              label: "Pricing",
            },
          ]}
        />
        <Flex>
          <SideBar />
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Features />} />
            <Route path="/Authentification" element={<Authentification />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Flex>
      </MantineProvider>
    </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
