import React from "react";
import { Col } from "react-bootstrap";
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4} className={styles.projectCard}>
    <h4 className="text-center">{title}</h4>
      <div className={styles.projImgbx}>
        <img src={imgUrl} alt={title} style={{borderRadius: '20px', height: '163px'}} />
        <div className={styles.projTxtx} style={{overflow: 'visible'}}>
          <span>{description}{githubLink && (
            <><br></br>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            Check this project
          </a></>)
          }</span>
        </div>
      </div>
    </Col>
  );
};