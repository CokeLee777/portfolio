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
            <br /> 저는 경기대학교에서 전자공학과를 전공했지만, IT 분야 Backend 개발에 관심이 생겨
            훌륭한 백엔드 개발자라는 꿈을 향해 나아가는 중입니다.
            <br />
            <br />
            현재는 매일 꾸준히 학습을하며 사이드 프로젝트를 진행하고 있습니다.
            <br />
            <br />
            그 밖의 제가 하고있는 활동은 다음과 같습니다.
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
