import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT ME
            </h1>
            <p className="home-about-body">
              다양한 분야의 사람들과 함께 <b className="purple">협업</b>하는 것에 즐거움을 느껴, 지속적으로 여러가지 프로젝트를 진행하고 있습니다.
              <br />
              <br />
              기술에 서비스를 맞춰서 개발을 하는 것이 아닌 <b className="purple">서비스에 맞는 기술</b>을 사용하고자 노력하고 있습니다. 
              <br />
              <br />
              <b className="purple">지속적인 피드백</b>과 <b className="purple">즉각적인 의사결정</b>에 따른 서비스 개선을 진행하고 있습니다.
              <br />
              <br />
              꾸준히 성장하는것에 관심이 있어 1일 1개의 <b className="purple">Computer Science</b> 학습을 실천중입니다.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CokeLee777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cokelee777/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
