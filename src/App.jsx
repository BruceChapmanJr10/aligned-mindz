import React from "react";
import Navbar from "./components/nav/Navbar";
import Services from "./components/Services";
import GettingStarted from "./components/GettingStarted";
import AboutMe from "./components/AboutMe";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
        <Services />
        <GettingStarted />
        <AboutMe />
        <Form />
      </div>
    </BrowserRouter>
  );
};

export default App;
