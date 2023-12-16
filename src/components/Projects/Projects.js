import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fullframe from "../../Assets/Projects/fullframe.png";
import byoutak from "../../Assets/Projects/byoutak.png";
import anaween from "../../Assets/Projects/anaween.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullframe}
              isBlog={false}
              title="Fullframe"
              description="As a dedicated front-end developer at FullFrame, I specialize in crafting seamless and visually appealing user interfaces. With expertise in technologies like React.js, Redux, and Tailwind CSS, I bring a passion for creating engaging web experiences. Collaborating within FullFrame's dynamic team, I contribute to the design and implementation of responsive and pixel-perfect UIs."
              ghLink="https://github.com/zwaugaman/scriptsearch-react"
              demoLink="https://fullfr.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={byoutak}
              isBlog={false}
              title="Byoutak"
              description="Byoutak is a web application that allows users to search for properties in the Egypt. Users can search for properties by title, location, and price. This web application was built using Node.js, Express.js, React, Redux, and Tailwind CSS."
              ghLink="https://github.com/shahabhamid/Byoutak"
              demoLink="https://www.byoutak.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anaween}
              isBlog={false}
              title="Anaween"
              description="Extended version of Byoutak. Anaween is a web application that allows users to search for properties in the Dubai. Users can search for properties by title, location, and price. This web application was built using Node.js, Express.js, React, Redux, and Tailwind CSS."
              ghLink="hhttps://github.com/ZahidChandio/anaween"
              demoLink="https://www.anaweendxb.com/app"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
