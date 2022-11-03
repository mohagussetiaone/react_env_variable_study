import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
