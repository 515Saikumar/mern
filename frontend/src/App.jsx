import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import SignIn from "./auth/signin";
import Navbar from "./Nav/Navbar";
import Books from "./Book/books";
import Details from "./Book/details";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Books />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
