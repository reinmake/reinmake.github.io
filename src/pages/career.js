import { Col, Row } from "react-bootstrap";

export default function CareerComponent() {
  const careers = [
    {
      company: "주식회사 지오앤",
      duration: "2023. 10 ~ 현재",
      position: "기술본부 기술3그룹 부장",
      descs: "공공기관 SI 사업, 시스템과 솔루션의 개발",
      works: [
        "SI 업무 - 통계청 SGIS 시스템 개발",
        "충남도청 - 디지털 문화유산 관리시스템 개발"
      ]
    },
    {
      company: "주식회사 에스앤비",
      duration: "2013. 04 ~ 2023. 08",
      position: "기업부설연구소 수석연구원",
      descs: "지능형 IT 자원관리 시스템과 분산 환경에서의 트랜잭션 추적 솔루션을 개발",
      works: [
        "자사 솔루션 기획 및 개발",
        "R&D 개발과제 수행 책임",
        "자사 솔루션 GS 인증 획득"
      ]
    },
    {
      company: "주식회사 메타비즈",
      duration: "2009. 10 ~ 2013. 03",
      position: "기업부설연구소 선임연구원",
      descs: "RFID를 활용한 유통물류 사업의 SI와 자사 솔루션의 개발",
      works: [
        "자사 솔루션 기획 및 개발",
        "R&D 개발과제 수행",
        "RFID관련 SI 사업 수행"
      ]
    },
    {
      company: "주식회사 유플러스네트웍스",
      duration: "2009. 01 ~ 2009. 10",
      position: "연구소 대리, 팀장",
      descs: "RFID기반의 정부지원 연구과제 수행 및 사업화 수행 책임",
      works: [
        "정부지원 연구과제 수행",
      ]
    },
    {
      company: "메타빌드(주)",
      duration: "2004. 07 ~ 2007. 01",
      position: "기업부설연구소 주임연구원",
      descs: "EAI 솔루션의 개발, 제품을 활용한 연계 개발 컨설팅",
      works: [
        "Indigo EAI 자사 솔루션 개발",
        "회사내 파견 개발자 교육 및 고객 컨설팅"
      ]
    },
    {
      company: "대한민국 공군",
      duration: "1996. 04 ~ 2003. 05",
      position: "전산장비 정비사(부사관)",
      descs: "부대의 전산자원(Computer, Printer, Network 등)의 유지관리",
      works: [
        "17전투비행단 네트워크 구성관리 및 IT 자원관리",
        "17전투비행단 광 네트워크 공사 감독(부)",
        "30단 311대대 광 네트워크 공사 감독(정)",
        "30단 311대대 네트워크, 소프트웨어 및 IT 자원관리"
      ]
    }
  ];
  const edus = [
    {
      title: "동국대학교 대학원",
      position: "산업공학과 산업정보시스템 전공(석사)",
      duration: "2007. 03 ~ 2009. 08",
      works: [
        "(논문)RFID 시스템 설계를 지원하는 프로세스 모델러와 시뮬레이터의 구현",
        "Eclipse RCP 시뮬레이터 개발 – 시뮬레이터 결과 EPCIS와 연계 인터페이스 가능",
        "(연구, 2007.03 ~ 2007.06) A Proof-of-Concept Test-bed Development for Container-Lavel",
        "(산학, 2007.03 ~ 2009.01) RFID 기반의 상품 라이프사이클 물류정보 통합관리 솔루션 개발",
        "동국대학교 산학협력단 u-SCM, EPCIS의 개발 및 GS1 국제 표준 인증 획득",
        "JAVA, Spring, Webservice"
      ]
    },
    {
      title: "비트교육센터",
      position: "자바 전문가 과정(JX251기)",
      duration: "2003.12 ~ 2004.05",
      works: [
        "자바 풀스택 전문가과정",
        "프로그래밍 기본부터 서버 운용지식",
        "웹 프론트엔드 및 백엔드 이론 및 실습",
        "6인 구성 프로젝트 선정부터 발표까지"

      ]
    },
    {
      title: "청주대학교",
      position: "컴퓨터정보공학 전공(학사)",
      duration: "1996. 03 ~ 2001. 03",
      works: [
        "컴퓨터 사이언스 이론 학습",
        "소프트웨어 개발 방범론 이론 및 졸업학기 프로젝트 수행"
      ]
    },
    {
      title: "공군항공과학고등학교",
      position: "통신전자 전공",
      duration: "1993. 03 ~ 1996. 02",
      works: [
        "항공통신전자에 필요한 기반 지식 습득",
        "기판 설계 및 컴퓨터 기초 이론 습득",
        "볼랜드 C를 통한 학교 소개 프로그램 개발"
      ]
    }
  ];
  return (
    <section id="career" className="sect-pt4 route">
      <div className="container">
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Career</h3>
              <p className="subtitle-a">
                다양한 문제 해결을 경험하였습니다.
              </p>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="resume">
            { careers.map((item) => (
              <div className="resume-item">
                <h4>{item.company}</h4>
                <h5>{item.duration}</h5>
                <p>{item.descs}</p>
                <ul>
                  {
                    item.works.map((work) => (
                      <li>{work}</li>
                    ))
                  }
                </ul>
              </div>
            ))}
          </Col>
          <Col sm={6} className="resume">
            { edus.map((item) => (
              <div className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.duration}</h5>
                <p>{item.position}</p>
                <ul>
                  {
                    item.works.map((work) => (
                      <li>{work}</li>
                    ))
                  }
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}