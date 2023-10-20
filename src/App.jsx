import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<signIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/signUp" element={<signUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
