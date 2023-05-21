import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { Flex } from "@mantine/core";
import Header from "./SharedComponents/Header";
import SideBar from "./SharedComponents/SideBar";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Authentification from "./Pages/Authentification";
import SignUp from "./Pages/SignUp";
import ContactUs from "./Pages/ContactUs";
import Footer from "./SharedComponents/Footer";
import Profile from "./Pages/ProfilePage";
import ChatPage from "./Pages/ChatPage/Index";
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
        theme={{ colorScheme: colorScheme,
        primaryColor: 'pink' ,
        
        }}
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
              link: "/ContactUs",
              label: "Contact Us",
            },
            
          ]}
        />
        
          <div style={{marginTop:'8%'}}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/Authentification" element={<Authentification />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Chat" element={<ChatPage/>} />
          </Routes>
          </div>
          <Footer data={[]} />
      </MantineProvider>
    </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
