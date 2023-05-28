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
import Quizz from "./Pages/QuizPage/index";
import Cards from "./SharedComponents/Cards";
import QuizPage1 from "./SharedComponents/Quiz1";
import QuizPage2 from "./SharedComponents/Quiz2";
import QuizPage3 from "./SharedComponents/Quiz3";
import QuizPage4 from "./SharedComponents/Quiz4";
import QuizPage5 from "./SharedComponents/Quiz5";
import QuizPage6 from "./SharedComponents/Quiz6";

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
              label: "Quizz",
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
            <Route path="/learn" element={<Quizz />} />
            <Route path="/choix" element={<Cards />} />
            <Route path="/quiz1" element={<QuizPage1/>} />
            <Route path="/quiz2" element={<QuizPage2/>} />
            <Route path="/quiz3" element={<QuizPage3/>} />
            <Route path="/quiz4" element={<QuizPage4/>} />
            <Route path="/quiz5" element={<QuizPage5/>} />
            <Route path="/quiz6" element={<QuizPage6/>} />
          </Routes>
          </div>
          
      </MantineProvider>
    </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
