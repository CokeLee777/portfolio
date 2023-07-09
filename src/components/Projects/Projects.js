import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import umm from "../../Assets/Projects/umm.png";
import hollang from "../../Assets/Projects/hollang.jpg";
import mendolong from "../../Assets/Projects/mendolong.png";
import parkinson from "../../Assets/Projects/parkinson-diary.png";
import cowalk from "../../Assets/Projects/cowalk.png";
import beyerage from "../../Assets/Projects/beyerage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umm}
              isBlog={false}
              title="Umm..."
              description="청년들을 위한 채팅기반 레터 작성 웹 서비스입니다. ChatGPT API를 활용하여 구체적인 상황과 상대방을 선정하여 보다 글쓰기에 도움을 주며
              내 글쓰기에 대한 첨삭 또한 가능한 나의 “업무 및 글쓰기 비서”를 선보인다.
              또한 일반적인 상황(축하, 안부, 위로, 상담)에서도 풍부한 글쓰기를 활용할 수 있다는 장점을 가지고 있다."
              ghLink="https://github.com/MOKY4/um-oh-ah-yeh-backend-lambda"
              demoLink="https://umm.swygbro.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hollang}
              isBlog={false}
              title="Hollang"
              description="취미 성향 테스트해서 자신의 성향에 따른 취미를 추천해주는 웹 서비스입니다. 취미가 없는 사람들이 많고 새로운 취미를 하고 싶어하는 사람들이 존재합니다. 보통 사람들을 만나고 밥먹고, 카페가고, 술먹는 취미만 있는 사람이 많고 직장인들은 시간이 없어서 자신에게 맞는 취미를 찾는 시간도 아까워 한다. 이러한 사람들을 위해 간단한 테스트로 성향에 맞는 취미를 찾아주는데, 보다 특별함을 부여하기 위해 몰라서 못해본 취미 이색적인 취미 추천을 통해 삶에 활력을 넣어주고자 한다."
              ghLink="https://github.com/swyg-goorm/api_server"
              demoLink="https://hollang.swygbro.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mendolong}
              isBlog={false}
              title="멘도롱주멍"
              description="제주도민과 여행객을 연결하는 물물거래 웹 서비스입니다. 제주도민의 입장에서는 대부분의 물류를 배송 시키면, 매우 많은 배송비가 붙어서 배송을 해야한다. 또한 제주도를 찾아오는 여행객이 많아지면서 제주도내의 배출 쓰레기가 많아지는 문제점이 생겨나고 있다. 이에 따라서 제주도민과 여행객이 서로 원하는 물건이나 체험 등을 물물거래하여 모든 문제점을 해소하고자 한다."
              ghLink="https://github.com/Levains-house/Levains-backend"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkinson}
              isBlog={false}
              title="Parkinson-diary"
              description="파킨슨 환자 약 복용시간에 알람을 해주고, 특정 시간마다 약효에 대한 설문조사를 하는 갤럭시 워치 서비스입니다. 환자가 스마트 워치를 착용하 고 자신의 정보와 약 복용 주기 정보를 세팅하면 약 복용 시간에 알람이 울린다. 또한 설문 주기마다 푸쉬 알림이 가서 환자에게 약 복용 후 상태에 대해서 물어본다. 이런 정보들을 데이터베이스에 저장해서 의사는 관리자 웹사이트에 접속하여 환자의 상태를 그래프와 같은 정보들로 파악할 수 있다."
              ghLink="https://github.com/CokeLee777/Parkinson-Diary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cowalk}
              isBlog={false}
              title="CO-WALK"
              description="스탭센서를 이용한 발걸음 스트리밍 모바일 앱 서비스입니다. CO-Walk는 일상생활에 지친 사람들을 위한 명상 관련 음악 스트리밍 서비스이다. 거리를 걸어가면 발걸음에 따라서 설정해둔 발걸음 소리가 재생된다. 이는 일상에서 벗어나 자신을 돌아보고 명상과 비슷한 효과를 낼 수 있다는 장점이 있다."
              ghLink="https://github.com/OMEGA-STARTUP/CO-Walk-Spring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beyerage}
              isBlog={false}
              title="BeYerage"
              description="시각장애인을 위한 편의점 음료안내 서비스입니다. 대부분의 캔 음료들이 점자로 ‘탄산’, ‘맥주’, ‘음료’ 등과 같은 정확한 명칭이 아닌 대략적인 명칭으로 점자를 표기하고 있는데, 이러한 이유로 BeYerage는 음료를 구매함에 있어서 시각장애인들의 불편함을 해소하고자 제작하였습니다."
              ghLink="https://github.com/CokeLee777/BeYerage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
