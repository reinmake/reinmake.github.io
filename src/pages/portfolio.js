import { Col, Row } from "react-bootstrap"

export default function PortFolioComponent() {
  const projects = [
    {
      title: '디지털 도로대장업무지원시스템 개발',
      duration: '2025.03 ~ 현재',
      descs: [
        '디지털 도로대장 관리 업무를 지원하는 서비스의 개발',
        'Geoserver를 통한 지리정보 서비스 제공',
        'SOC 정보를 제공하는 현장 모니터링 서비스와의 융합',
        '도로관리를 위한 유지보수/관리 서비스 개발'
      ], cates: [
        'React', 'TypeScript', 'VITE', 'PostgreSQL', 'Spring Boot Application',
        'NginX', 'Cassandra', 'MQTT', 'eGov', 'OpenLayer', 'GeoServer', 'QGIS'
      ]
    },
    {
      title: 'AI 탐지기술이 적용된 도로 SOC 정보를 제공하는 현장 모니터링 장치, 서비스',
      duration: '2024.05 ~ 2025.02',
      descs: [
        'MQTT, Cassandra, PostgreSQL, WEB, APP 개발환경 구축',
        'AI 기반 도로 SOC 변화 정보를 관리하고 Kakao Map에 표출하는 React WEB의 개발',
        'Flutter를 이용한 센서 관리 APP의 개발'
      ], cates: [
        'React', 'TypeScript', 'PostgreSQL', 'Spring Boot Application',
        'NginX', 'Cassandra', 'MQTT', 'eGov', 'Flutter', 'Android'
      ]

    },
    {
      title: "충남도청 디지털 문화유산 관리시스템 개발",
      duration: "2024.02 - 2024.05",
      descs: [
        "디지털 문화유산 관리 시스템 개발",
        "문화재 GIS 레이어 표출",
        "시스템 빌드 및 배포"
      ], cates: [
        "eGov",
        "SpringFramework",
        "GeoServer",
        "GIS",
        "PostgreSQL",
        "Apache HTTP",
        "Tomcat"
      ], links: [
        { href: "https://www.chungnam.go.kr/cnh/", title: "충남 디지털 문화유산" }
      ]
    },
    {
      title: "통계청 자연재해지리정보시스템 개발",
      duration: "2023.10 - 2024.02",
      descs: [
          "자연재해 연계 데이터(태풍, 호우, 홍수, 산사태, 기상특보 등) 수집 기능 설계 및 개발",
          "자연재해 통계 데이터 제공 시스템 개발",
          "개발 시스템 빌드 및 배포(Hyperframe)",
      ], cates: [
        "eGov",
        "SpringFramework",
        "GeoServer",
        "GIS",
        "PostgreSQL",
        "HyperFrame",
        "OpenAPI",
      ], links: [
        { href: "https://sgis.kostat.go.kr/ndsm/srv/", title: "자연재해통계지도" }
      ]
    },
    {
      title: "주식회사 에스앤비 솔루션(HomZ Enterprise) 개발",
      duration: "2013.04 - 2023.08",
      descs: [
        "지능형 인프라 관리 솔루션(서버 모니터링, 스마트 시티 인프라 관리 시스템)의 개발 기획 및 진행",
        "지능형 통합 모니터링 솔루션(서버 모니터링, 업무 모니터링, 트랜잭션 모니터링)의 개발 기획 및 진행",
        "정부지원 R&D 수행 및 자사 솔루션 GS 인증 획득",
        "기술연구소 연구개발 책임"
      ],
      cates: [
        "Flutter",
        "Android",
        "iOS",
        "eGov",
        "SpringFramework",
        "React",
        "Angular",
        "Apache Spark",
        "Apache Nutch",
        "Oracle", "MariaDB", "UnixODBC", "C"
      ]
    },
    {
      title: "세종시 3단계 1-2차 세종엔 유지보수",
      duration: "2022.09 - 2023.08",
      descs: [
        "Flutter를 이용한 앱(세종엔) 기능 추가",
        "초정밀 버스, 공통 팝업, 앱 서랍, 놀이터 관리 등 요구 사항에 따른 앱, 웹, 관리자 기능 추가",
        "WEB, WAS, (IOS, Android) APP, Collector(Java 프로그램 수집기) 버그 수정, 빌드 및 배포",
        "Apache nutch, spark를 이용한 웹 기사 크롤링, 관리자 페이지를 통한 세종엔 기사 개시 연계"
      ],
      cates: [
        "Flutter",
        "Android",
        "iOS",
        "eGov",
        "SpringFramework",
        "React",
        "Apache Spark",
        "Apache Nutch",
        "Oracle", "MariaDB", "GitLab"
      ],
      links: [
        { href: "https://smart.sejong.go.kr/", title: "세종엔 홈페이지" },
        { href: "https://play.google.com/store/apps/details?id=com.sejong.sjnapp", title: "구글플레이 세종엔" },
        { href: "https://apps.apple.com/kr/app/%EC%84%B8%EC%A2%85%EC%97%94/id1620327409", title: "앱스토어 세종엔" },
      ]
    },
    {
      title: "세종시 3단계 1-2차 스마트도시구축",
      duration: "2021.09 - 2022.08",
      descs: [
        "지능형 인프라 시스템의 모바일 버전 고도화",
        "Flutter를 이용한 앱(세종엔) 개발",
        "Geolocation service를 활용한 위치 기반의 알람 서비스(안심이)",
        "Android, iOS용 APP의 빌드 및 배포"
      ],
      cates: [
        "Flutter", "Android", "iOS", "eGov", "SpringFramework", "React", "Oracle", "MariaDB", "GitLab"
      ]
    },
    {
      title: "`20년 스마트 특허넷 시스템 개발",
      duration: "2020.03 - 2021.09",
      descs: [
        "특허정보 시스템의 트랜잭션 추적을 위한 시스템 개발 및 구축",
        "가상 시스템(Xenserver)의 연계, 가상 시스템 모니터링 구축",
        "보안 솔루션 Chakansak 연계, 침임탐지 모니터링 구축",
        "업무 모니터링 및 이상감지, 알림 시스템 구축"
      ],
      cates: [
        "eGov", "SpringFramework", "XenServer", "Oracle", "MariaDB", "UnixODBC", "SNMP", "C", "HBase", "Flume", "Flink"
      ]
    },
    {
      title: "광명시 지능형인프라 관리 시스템 구축",
      duration: "2020.03 - 2020.06",
      descs: [
        "광명시 도시정보센터에 솔루션 도입 및 감시/관리 체계 구축"
      ],
      cates: [
        "eGov", "SpringFramework", "MariaDB", "UnixODBC", "SNMP", "Angular", "C"
      ]
    },
    {
      title: "공군 군수사 인프라 감시 체계 구축",
      duration: "2019.09 - 2019.12",
      descs: [
        "대구 공군 군수사에 솔루션 도입 및 감시/관리 체계 구축"
      ],
      cates: [
        "eGov", "SpringFramework", "MariaDB", "UnixODBC", "SNMP", "Angular", "C"
      ]
    },
    {
      title: "세종시 2단계 3차 스마트 시티 구축",
      duration: "2017.11 - 2019.12",
      descs: [
        "도시통합정보센터의 IT 인프라 모니터링과 인프라 자원 관리를 위한 시스템의 개발",
      ],
      cates: [
        "eGov", "SpringFramework", "MariaDB", "UnixODBC", "SNMP", "Angular", "C"
      ]
    },
    {
      title: "End-toEnd 실시간 통합성능관제 시스템 개발",
      duration: "2017.09 - 2018.09",
      descs: [
        "트랜잭션 추적을 위한 시스템의 설계, 기획 및 개발",
        "정부지원 R&D 사업으로 자사 솔루션 개발",
      ],
      cates: [
        "eGov", "SpringFramework", "XenServer", "MariaDB", "UnixODBC", "SNMP", "C", "HBase", "Flume", "Flink"
      ]
    },
    {
      title: "자사 솔루션(HomZ ITSM) 개발",
      duration: "2014.11 - 2015.06",
      descs: [
        "ITSM 솔루션 개발 기획 및 진행",
      ],
      cates: [
        "SpringFramework", "MariaDB"
      ]
    },
    {
      title: "필리핀 온라인 복권 로또 시스템 관제 시스템 구축",
      duration: "2014.03 - 2015.10",
      descs: [
        "필리핀 온라인 복권 시스템에 모니터링 솔루션 제공",
        "로또 업무 대시보드 개발",
      ],
      cates: [
        "SpringFramework", "MariaDB", "SNMP", "C", "Java", "UnixODBC"
      ]
    },
    {
      title: "침례신학대학교 수강 신청 시스템 고도화",
      duration: "2013.11 - 2014.03",
      descs: [
        "수강 신청 시스템의 성능 진단",
        "부하 분석 및 로직 개선",
      ],
      cates: [
        "SpringFramework", "Java", "Oracle", "JSP"
      ]
    },
    {
      title: "의약 바코드 시스템 도입",
      duration: "2012.10 ~ 2013.03",
      descs: [
        "환인, 한화, LG, 보령 등 12개 제약사 대상",
        "바코드 발행 도입 및 컨설팅"
      ],
      cates: [
        "PM"
      ]
    },
    {
      title: "의약 2차원 바코드 솔루션 개발",
      duration: "2012.04 ~ 2012.11",
      descs: [
        "의약분야 EPC Code 적용 표준에 따른 솔루션의 개발",
        "EPC Tag 비용 문제로 인한 2D 바코드를 EPCGlobal 표준으로 적용",
        "바코드 발급 시스템, 바코드 발급 정보 수집 시스템 개발 전반에 대한 팀장(PM)",
      ],
      cates: [
        "Java", "C#", "H2", "Vision 연계", "PLC 연계", "Domino Printer 연계"
      ]
    },
    {
      title: "Smart Cold Chain 기술개발",
      duration: "2011.10 - 2012.09",
      descs: [
        "RFID를 이용한 냉장/냉동 물류의 라이프 사이클 관리 솔루션의 개발",
        "정부지원 연구과제로 물류 시스템의 RFID 적용에 대한 연구 수행"
      ],
      cates: [
        "Java", "JSP", "SpringFramework", "EPCGlobal Spec."
      ]
    },
    {
      title: "동부한농 물류운영시스템 구축",
      duration: "2011.05 - 2011.11",
      descs: [
        "RFID를 이용한 동부한농의 물류시스템 구축",
        "동부CNI에서 제공하는 DaFrame를 사용한 개발"
      ],
      cates: [
        "Java", "JSP", "DaFrame"
      ]
    },
    {
      title: "모바일 정품 확인 서비스 시스템 개발",
      duration: "2011.03 - 2011.07",
      descs: [
        "EPCGlobal 표준을 활용한 RFID부착 상품의 정품 확인 서비스 개발",
        "분석, 설계, 개발, 협업 진행",
      ],
      cates: [
        "Java", "Bind9", "C", "SpringFramework", "JSP", "EPCGlobal Spec."
      ]
    },
    {
      title: "모바일 RFID 코드정보 검색인프라 제공 방안 연구",
      duration: "2010.06 - 2010.10",
      descs: [
        "EPCGlobal 표준인 ONS를 활용한 방법에 대한 정부지원 과제 연구",
        "코드 분석 및 설계, 시스템 설계",
      ],
      cates: [
        "Java", "Bind9", "C", "SpringFramework", "JSP", "EPCGlobal Spec."
      ]
    },
    {
      title: "u-CSRM 개발",
      duration: "2009.12 - 2010.04",
      descs: [
        "동부한농 RFID 시스템 구축 및 RFID를 활용한 물류 시스템 개발",
        "물류 프로세스 분석/설계, EPC 코드 분석/설계, Forklift 관련 프로그램 개발",
      ],
      cates: [
        "Java", "C#"
      ]
    },
    {
      title: "제조 유통산업 RFID/EPC 확산의 위한 서비스 개발 연구 용역",
      duration: "2009.10 - 2009.11",
      descs: [
        "코드 분석 설계, 시스템 설계",
      ],
      cates: [
        "Java", "EPCGlobal Spec."
      ]
    },
    {
      title: "UPLUS 고도화",
      duration: "2009.01 - 2009.10",
      descs: [
        "Ubiquitous Product Lifecycle Unified System",
        "RFID 기반의 상품 라이프사이클 물류정보 통합관리 솔루션 고도화 사업",
        "시스템의 분석 및 설계, 개발 수행"
      ],
      cates: [
        "Java", "EPCGlobal Spec."
      ]
    },
    {
      title: "Indigo EAI 솔루션의 개발",
      duration: "2004.06 - 2007.02",
      descs: [
        "자사 EAI 솔루션의 개발",
        "연계를 위한 Adaptor, Message Channel, 관리자 페이지(EMC)에 대한 개발"
      ],
      cates: [
        "Java", "JSP", "H2", "JDBC", "Message Queue"
      ]
    },
    {
      title: "시군구 행정 정보 고도화 사업 2차 고도화",
      duration: "2006.06 - 2006.12",
      descs: [
        "EAI 솔류션 도입 및 컨설팅",
        "Adaptor 연계 로직 개발 교육"
      ],
      cates: [
        "Java", "JSP", "H2", "JDBC", "Message Queue"
      ]
    },
    {
      title: "시군구 행정 정보 고도화 사업 1차 고도화",
      duration: "2005.11 - 2006.08",
      descs: [
        "EAI 솔류션 도입 및 컨설팅",
        "Adaptor 연계 로직 개발 교육"
      ],
      cates: [
        "Java", "JSP", "H2", "JDBC", "Message Queue"
      ]
    },
    {
      title: "신 교육행정정보시스템(NEIS) 구축사업",
      duration: "2005.04 - 2005.09",
      descs: [
        "EAI 솔류션 도입 및 컨설팅",
        "Adaptor 연계 로직 개발 교육"
      ],
      cates: [
        "Java", "JSP", "H2", "JDBC", "Message Queue"
      ]
    },
    {
      title: "행정 자치부 17개 시도 행정정보화 사업",
      duration: "2004.07 - 2005.08",
      descs: [
        "EAI 솔류션 도입 및 컨설팅",
        "Adaptor 연계 로직 개발 교육"
      ],
      cates: [
        "Java", "JSP", "H2", "JDBC", "Message Queue"
      ]
    }
  ]
  return (
    <section id="portfolio" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                특정 분야의 문제를 해결하기 위한 솔루션의 개발과<br />
                여러 유형의 문제를 해결하기 위해 다양한 기술을 활용하여 개발을 수행하였습니다.
              </p>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <ul className="project-list work">
            { projects.map((project, index) => (
              <li className="project-item" key={index}>
                <h3 className="project-title">{project.title}</h3>
                <h3 className="project-duration">{project.duration}</h3>
                <>
                  {
                    project.descs.map((desc) => (
                      <div className="project-desc">{desc}</div>
                    ))
                  }
                </>
                <div className="project-cate">
                  {
                    project.cates.map((cate) => (
                      <span>{cate}</span>
                    ))
                  }
                </div>
                {project.links 
                  ? <div className="project-links"> {project.links.map((link) => ( <div><a target="_blank" href={link.href}>{link.title}</a></div> ))} </div>
                  : <></>}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </section>
  );
}
