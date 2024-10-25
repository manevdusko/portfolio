import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import MyDeskIcon from "../../assets/img/MyDesk.jpg";
import BlackboardImage from "../../assets/img/blackboard.webp";
import AnthologyStudent from "../../assets/img/AnthologyStudent.jpg";
import ToTheMoonImage from "../../assets/img/ToTheMoon.png";
import CovidStaticticImage from "../../assets/img/CovidStatistic.png";
import PortfolioImage from "../../assets/img/Portfolio.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      title: "MyDesk",
      description:
        "An internal application for reserving desks in the office. Upon logging in, employees see a map of all available desks for the day and can reserve one. They can also invite a colleague to coordinate working together in the office. Additionally, users can leave reviews for the desks they've used. Technologies: Java Spring Boot, React",
      imgUrl: MyDeskIcon,
    },
    {
      title: "Anthology Blackboard",
      description:
        "This platform is widely used in higher education to facilitate student engagement and streamline instructor workflows. It offers a variety of tools, such as video content management, course links, and external resources. Technologies: React TS",
      imgUrl: BlackboardImage,
    },
    {
      title: "Anthology Student",
      description:
        "Platform designed to support universities and colleges by streamlining student information management. It offers a variety of tools for institutions to assist students throughout their academic journeys, including housing management, enrollment tracking, and financial aid processing. Technologies: React TS",
      imgUrl: AnthologyStudent,
    },
  ];

  const sideProjects = [
    {
      title: "Unity Game: To the Moon",
      description: `I developed a game called To the Moon, where the objective is to build the tallest tower using blocks. As players progress through levels, the wind strength increases, making it more challenging to position the next block accurately. Technologies Used: Unity, C#`,
      imgUrl: ToTheMoonImage,
      githubLink: "https://github.com/manevdusko/To-the-moon",
    },
    {
      title: "COVID Statistics Mobile",
      description:
        "This application displays real-time statistics related to COVID- 19, including the number of tests conducted, new infections, hospitalizations, fatalities, and vaccination rates. Technologies Used: Flutter",
      imgUrl: CovidStaticticImage,
      githubLink: "https://github.com/manevdusko/covid_statistics",
    },
    {
      title: "Portfolio",
      description:
        "My portfolio, built with React.js and Firebase, highlights my skills, projects, and career journey. It features React-Bootstrap, CSS Modules, Animate.css, custom hooks, CI/CD, and intuitive navigation for a smooth, responsive user experience.",
      imgUrl: PortfolioImage,
      githubLink: "https://github.com/manevdusko/portfolio",
    },
  ];

  return (
    <section className={styles.project} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have 3 years of experience working in IT labs, where I
                    contributed to various web development projects. In addition
                    to my professional work, I've also developed several
                    personal projects to refine my skills and explore new
                    technologies. These experiences have helped me gain
                    practical knowledge in both collaborative and independent
                    settings.
                  </p>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="Professional-Work"
                  >
                    <Nav
                      variant="pills"
                      className={`${styles.navPills} mb-5 justify-content-center align-items-center`}
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Professional-Work"
                          className={styles.tab}
                        >
                          Industry Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="Personal-Work"
                          className={styles.tab}
                        >
                          Side Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="Professional-Work">
                        <p>Hover or click for more details</p>
                        <Row className={styles.contentRow}>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Personal-Work">
                        <p>Hover or click for more details</p>
                        <Row className={styles.contentRow}>
                          {sideProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className={styles.backgroundImageRight}
        src={colorSharp2}
        alt=">"
      ></img>
    </section>
  );
};
