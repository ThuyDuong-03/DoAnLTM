import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Dùng Link từ react-router-dom thay vì react-scroll

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img
          src="./img/blog.png"
          alt="my blog"
          className="small-image"
          style={{ width: "70px", height: "auto" }}
        />
      </div>

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              to="/"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="/blog"  // Dẫn đến trang Blog riêng biệt
              className="navbar--content"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="/about-me"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        to="/contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
