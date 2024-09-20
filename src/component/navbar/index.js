import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assest/css/navbar.css";
import logo from "../../assest/image/A_Pang_glamping__6_-removebg.png";
import logo2 from "../../assest/image/A_Pang_glamping__9_-removebg.png";
import { Dropdown } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <CiMail className="me-2 icon-navbar" />
          <span className="me-3">LIÊN HỆ</span>
          <GoClock className="me-2 icon-navbar" />
          <span className="me-3">OPEN ALL DAY</span>
          <FaPhoneAlt className="me-2 icon-navbar" />
          <a href="tel:0942353535" style={{ textDecoration: "none" }}>
            0942 35 35 35
          </a>
        </div>

        <div className="navbar-brand mx-auto">
          <a href="/">
            <img
              src={scrolled ? logo : logo2}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
        </div>

        <div className="navbar-nav ms-auto d-flex align-items-center">
          <a className="nav-link" href="/">
            HOME
          </a>
          <span className="separator">|</span>
          <a className="nav-link" href="/about">
            GIỚI THIỆU
          </a>
          <span className="separator">|</span>
          <a className="nav-link" href="/services">
            GÓI DỊCH VỤ
          </a>
          <span className="separator">|</span>
          <a className="nav-link" href="/program">
            CHƯƠNG TRÌNH
          </a>
          <span className="separator">|</span>

          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-contact"
              className="nav-link"
            >
              LIÊN HỆ
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#contact">CONTACT</Dropdown.Item>
              <Dropdown.Item href="#booking">BOOKING</Dropdown.Item>
              <Dropdown.Item href="#directions">CHỈ DẪN ĐƯỜNG ĐI</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
