import { Col, Row } from "react-bootstrap"

export default function CertificationComponent() {
  const certifications = [
    {
      regdate: "2020.08.24",
      title: "정보통신기술자 중급기술자",
      org: "한국정보통신공사협회",
      id: "301202001127L"
    },
    {
      regdate: "2000.05.31",
      title: "비트 SW 프로젝트자격증(1급)",
      org: "비트교육센터",
      id: "10110006869"
    },
    {
      regdate: "1998.06.26",
      title: "정보기기운용기능사",
      org: "한국산업인력공단",
      id: "98601001560N"
    },
    {
      regdate: "1997.06.27",
      title: "통신기기기능사",
      org: "한국산업인력공단",
      id: "97601002506K"
    },
    {
      regdate: "1996.12.20",
      title: "정보처리산업기사",
      org: "한국산업인력공단",
      id: "96602120051O"
    },
    {
      regdate: "1996.06.26",
      title: "전자계산기기능사",
      org: "한국산업인력공단",
      id: "96601170159R"
    },
    {
      regdate: "1995.08.07",
      title: "전자기기기능사",
      org: "한국산업인력공단",
      id: "95405173731S"
    },
    {
      regdate: "1991.11.27",
      title: "정보처리2급기능사",
      org: "한국산업인력공단",
      id: "91407021048D"
    },
  ];
  return (
    <section id="certification" className="sect-pt4 route">
      <div className="container">
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Certifications</h3>
              <p className="subtitle-a">
                어릴때부터 프로그래밍과 다양한 분야에 대한 관심이 많았습니다.
              </p>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        { 
          certifications.map((cert) => (
            <div className="certifictaion-item">
              <Row className="certification-row">
                <Col sm={6} className="certification-col">
                  발급일 : { cert.regdate }
                </Col>
                <Col sm={6} className="certification-col">
                  자격증 : { cert.title }
                </Col>
              </Row>
              <Row className="certification-row">
                <Col sm={6} className="certification-col">
                  발급기관 : { cert.org }
                </Col>
                <Col sm={6} className="certification-col">
                  코드 : { cert.id }
                </Col>
              </Row>
            </div>
          ))
        }
      </div>
    </section>
  )
}