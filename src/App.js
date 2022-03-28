import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Call CSS */
import "./assets/css/style.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Contact from './pages/Contact';

/* Call SPA */
export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}