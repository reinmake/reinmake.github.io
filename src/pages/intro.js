import { ReactMatrixAnimation } from "react-matrix-animation";
import Typewriter from "./typewriter";

export default function IntroComonent() {
  return (
    <section id="home" className="intro route bg-image background">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <b className="intro-name">안녕하세요. 저는 프로그래머입니다.</b>
            <b className="intro-title mb-4">함께 일하고 싶은 18년 경력의 개발자 곽지호입니다</b>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typewriter texts={[
                  "새로운 것을 두려워 하지 않는 개발자입니다.",
                  "Spring, 전자정부 프레임워크, Angular, React, Flutter, GIS등 다방면의 프로젝트 경험을 보유하고 있습니다.",
                  "직면한 문제를 해결하기 위해 포기하지 않고 끝없이 도전합니다.",
                  "이 페이지는 React로 개발되어 있습니다."
                  ]} delay={60}></Typewriter>
              </strong>
            </p>
            <div className="m-auto flex matrix items-center justify-center">
              <ReactMatrixAnimation
                tileSize={13}
                backgroundColor={'#0a192f'}
                fadeFactor={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}