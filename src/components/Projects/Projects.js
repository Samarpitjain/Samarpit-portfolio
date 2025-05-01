import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PostMitra from "../../Assets/Projects/postmitra.png";
import LabelLens from "../../Assets/Projects/labellens.png";
import Playlist_Analyzer from "../../Assets/Projects/yt-Playlist_Analyzer.png";

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
              imgPath={LabelLens}
              isBlog={false}
              title="LabelLens"
              description="A health-focused mobile app that uses barcode scanning to provide food ingredient details, supports nutrition-based ranking, tracks calorie intake, and promotes better dietary decisions through an all-in-one user-friendly platform."
              ghLink="https://github.com/Samarpitjain/flu"
            />
          </Col>
          
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={PostMitra}
              isBlog={false}
              title="PostMitra"
              description="A Suitable and friendly solution for postman to reduct the return and late delivery time and a suitable idea to reduces the postman load."
              ghLink="https://github.com/Samarpitjain/SIH"
              demoLink=""              
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Playlist_Analyzer}
              isBlog={false}
              title="Yt-Playlist-Analyzer"
              description="A YouTube Playlist Analyzer that calculates the total duration of all videos in a playlist using its link, helping users estimate the time required to complete the entire playlist.."
              ghLink="https://github.com/Samarpitjain/project"
              demoLink="https://ytanalyzer-psi.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
