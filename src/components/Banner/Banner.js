import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/astronaut.webp";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from "./Banner.module.css";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Engineer",
    "React Developer",
    "Front-End Developer",
    "Full-Stack Developer",
  ];
  const period = 2000;
  const yearsOfExperience = Math.ceil(
    ((new Date().getFullYear() - new Date(2022, 0).getFullYear()) * 12 +
      (new Date().getMonth() - new Date(2022, 0).getMonth())) /
      12
  );

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className={styles.banner} id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className={styles.tagline}>
                    Welcome to my Portfolio
                  </span>
                  <h1>
                    {`Hi! I'm Dushko, `}{" "}
                    <span
                      className={styles.txtRotate}
                      dataperiod="1000"
                      data-rotate='[ "Software Engineer", "React Developer", "Front-End Developer", "Full-Stack Developer" ]'
                    >
                      <span className={styles.wrap}>{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a front-end developer with {yearsOfExperience} years of
                    experience in React, HTML, CSS, JavaScript, and TypeScript.
                    I focus on building modern, responsive web apps with clean
                    design and great user experience. With additional experience
                    in Java Spring Boot and .NET, I'm comfortable handling
                    full-stack projects. I love solving problems through code
                    and am currently learning Flutter to expand my skill set.
                  </p>
                  <HashLink to="#connect">
                    <button>
                      Contact me <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
