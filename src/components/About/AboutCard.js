import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요! 👋 포기를 모르는 개발자 <span className="purple">이채민</span>입니다.
            <br />
            <br /> 저는 경기대학교에서 전자공학과를 전공했지만, <span className="purple">Backend</span> 개발에 관심이 생겨서
            백엔드 개발자라는 꿈을 향해 나아가는 중입니다.
            <br />
            <br />
            현재는 꾸준한 성장을 위해 <span className="purple">1일 1cs</span> 학습을 실천하고 있고, <span className="purple">사이드 프로젝트</span>를 통해서 학습한 내용을 체득하며 성장하고 있습니다.
            <br />
            <br />
            그 밖의 남는 시간에 하는 활동은 다음과 같습니다.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Go to cafe daily
            </li>
            <li className="about-activity">
              <ImPointRight /> Study tech daily
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing computer game sometimes
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
