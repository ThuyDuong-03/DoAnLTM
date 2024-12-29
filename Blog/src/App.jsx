import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/home";
import Blog from "./Pages/Home/Blog";
import AboutMe from "./Pages/Home/AboutMe";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar luôn hiển thị */}
        <Navbar />

        {/* Routes quản lý việc hiển thị nội dung */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Trang Home */}
          <Route path="/blog" element={<Blog />} /> {/* Trang Blog */}
          <Route path="/about-me" element={<AboutMe />} /> {/* Trang About Me */}
          <Route path="/contact" element={<ContactMe />} /> {/* Trang Contact */}
          <Route path="*" element={<div>404 Not Found</div>} /> {/* Trang lỗi */}
        </Routes>

        {/* Footer luôn hiển thị */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
