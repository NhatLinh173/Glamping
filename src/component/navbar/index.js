import React, { useEffect, useState } from "react";
import { Dropdown, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assest/css/navbar.css";
import logo from "../../assest/image/logo png-07.png";
import logo2 from "../../assest/image/logo png-07.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  // Hàm đóng menu
  const closeMenu = () => {
    setExpanded(false);
  };

  // Hàm xử lý toggle menu
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`navbar ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
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

        <Navbar.Toggle aria-controls="navbarResponsive" onClick={toggleMenu} />

        <Navbar.Collapse
          id="navbarResponsive"
          className={expanded ? "show" : ""}
        >
          <Nav className="ms-auto">
            <Nav.Link href="/" onClick={closeMenu}>
              HOME
            </Nav.Link>
            <span className="separator d-none d-lg-inline">|</span>
            <Nav.Link href="/about" onClick={closeMenu}>
              GIỚI THIỆU
            </Nav.Link>
            <span className="separator d-none d-lg-inline">|</span>
            <Nav.Link href="/services" onClick={closeMenu}>
              GÓI DỊCH VỤ
            </Nav.Link>
            <span className="separator d-none d-lg-inline">|</span>
            <Nav.Link href="/program" onClick={closeMenu}>
              CHƯƠNG TRÌNH
            </Nav.Link>
            <span className="separator d-none d-lg-inline">|</span>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-contact">
                LIÊN HỆ
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    window.open("https://zalo.me/0344038365", "_blank");
                    closeMenu();
                  }}
                >
                  BOOKING
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.google.com/maps..."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
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
