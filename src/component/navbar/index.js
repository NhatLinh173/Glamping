import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assest/css/navbar.css";
import logo from "../../assest/image/logo png-07.png";
import logo2 from "../../assest/image/logo png-07.png";
import { Dropdown, Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { CiMail } from "react-icons/ci";

const Header = () => {
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
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      style={{ backgroundColor: "#0b312b" }}
    >
      <Container>
        <div className="contact-info d-none d-lg-flex">
          <CiMail className="me-2 icon-navbar" />
          <span className="me-3">LIÊN HỆ</span>
          <GoClock className="me-2 icon-navbar" />
          <span className="me-3">OPEN ALL DAY</span>
          <FaPhoneAlt className="me-2 icon-navbar" />
          <a href="tel: 0344038365" style={{ textDecoration: "none" }}>
            0344 03 83 65
          </a>
        </div>

        <Navbar.Brand href="/" className="mx-auto d-none d-lg-block">
          <img
            src={scrolled ? logo : logo2}
            alt="Logo"
            style={{ width: "100px", height: "100px", marginTop: "15px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarResponsive"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          className="navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <span className="separator">|</span>
            <Nav.Link href="/about">GIỚI THIỆU</Nav.Link>
            <span className="separator">|</span>
            <Nav.Link href="/services">GÓI DỊCH VỤ</Nav.Link>
            <span className="separator">|</span>
            <Nav.Link href="/program">CHƯƠNG TRÌNH</Nav.Link>
            <span className="separator">|</span>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-contact">
                LIÊN HỆ
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    window.open("https://zalo.me/0344038365", "_blank")
                  }
                >
                  BOOKING
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.google.com/maps/place/A'P%C4%83ng+Glamping/@15.9617977,107.7587094,17z/data=!3m1!4b1!4m6!3m5!1s0x3141e700239c3ff5:0x1a54f4ceb5921ebc!8m2!3d15.9617926!4d107.7612843!16s%2Fg%2F11wc89452d?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CHỈ DẪN ĐƯỜNG ĐI
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
