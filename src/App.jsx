import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './pages/Style.css';

function App() {
  return (
    <BrowserRouter>
      {/* Thanh Menu điều hướng */}
      <nav className="navbar">
        <Link to="/" className="logo">MyProject</Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/about-us">Giới thiệu (About Us)</Link>
          </li>
        </ul>
      </nav>

      {/* Cấu hình định tuyến URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;