import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Navigation/Accounts/Login";
import Signup from "./Components/Navigation/Accounts/Signup";
import Navigation from "./Components/Navigation/navigation";
import "./App.css";
import Fixtures from "./Components/Navigation/Fixtures"
import Highlights from "./Components/Navigation/highlights";
import Home from "./Components/Navigation/Home";
import LiveMatches from "./Components/Navigation/LiveMatches";
import Results from "./Components/Navigation/Results";
import Teams from "./Components/Navigation/Teams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fixtures" element={<Fixtures />} />
          <Route path="/Highlights" element={<Highlights />} />
          <Route path="/LiveMatches" element={<LiveMatches />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
