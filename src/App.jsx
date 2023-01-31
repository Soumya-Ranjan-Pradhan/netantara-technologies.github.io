import React from 'react';
import Clientele from './Clientele';
import Expertise from './Expertise';
import Home from './Home';
import Partner from './Partner';
import Studies from './Studies';
import Viewpoints from './Viewpoints';
import What from './What'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
// import Footer from './components/Footer';
// import GoToTop from './components/GoToTop';
const App = () => {
const theme = {
  colors: {
    heading : "rgb(26, 26, 26)",
    text: "#333",
    color1:" #fff",
    box1: "rgba(0,110,142,1)",
    box2: "rgba(51,51,51,1)",
    box3: "rgba(255,111,50,1)",
    box4: "rgba(0,106,188,1)",
    boxMiddle: "rgba(224,222,222,1)",
    hover: "#0693e3",
    btn:"#006abc",
    span1:"rgb(0, 106, 188)",
    backText:"rgba(0,0,0,1)",
  },
  media: { 
    mobile: "768px", tab: "998px",
  },
};

  return (
   <ThemeProvider theme={theme}>
   <GlobalStyle />
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='what' element= {<What />} />
        <Route path='clientele' element= {<Clientele />} />
        <Route path='expertise' element= {<Expertise />} />
        <Route path='studies' element= {<Studies />} />
        <Route path='partner' element= {<Partner />} />
        <Route path='viewpoints' element= {<Viewpoints />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;