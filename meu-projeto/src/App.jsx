import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";
import Container from "./components/layouts/Container";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> <Link to="/company">Company</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/newproject">Novo Projeto</Link>
      </nav>

      <Routes>
        <Route element={<Container customClass="min_height" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Route>
      </Routes>
      <p>Footer</p>
    </BrowserRouter>
  );
}
