import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bridge from "./pages/Bridge";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import { Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <TopBar />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
