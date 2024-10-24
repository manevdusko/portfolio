import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavBar.module.css";
import linkedinIcon from "../../assets/img/linkedin-icon.svg";
import emailIcon from "../../assets/img/email-icon.svg";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <span className={`${styles.logo}`}>m@nev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className={styles.navbarTogglerIcon}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home"
                  ? `${styles.active} ${styles.navbarLink}`
                  : styles.navbarLink
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills"
                  ? `${styles.active} ${styles.navbarLink}`
                  : styles.navbarLink
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? `${styles.active} ${styles.navbarLink}`
                  : styles.navbarLink
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className={styles.navbarText}>
            <div className={styles.socialIcon}>
              <a
                href="https://www.linkedin.com/in/manevdusko/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin" />
              </a>
              <a
                href="mailto:dushkomanev9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className={styles.vvd}>
                <span>Contact me</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
