import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../../assets/img/linkedin-icon.svg";
import mailIcon from "../../assets/img/email-icon.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className={styles.logo}>m@nev</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className={styles.socialIcon}>
              <a href="https://www.linkedin.com/in/manevdusko/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" />
              </a>
              <a
                href="mailto:dushkomanev9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mailIcon} alt="Email" />
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
