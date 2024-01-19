import React from "react";
import "./index.css";
import Home1 from "./routes/Home1";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route,Routes } from "react-router-dom";
import Resume from "./routes/Resume";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home1/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
