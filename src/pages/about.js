import logo from '../img/logo1.jpg';
export default function AboutComponent() {
  return (
    <section id="about" className="about-mf sect-pt4 route bg-image">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">About me</h3>
              <p className="subtitle-a">
              새로운 도전을 두려워하지 않습니다. 여러분들의 연락을 기다립니다.
              </p>
              <div className="line-mf"></div>
              <img src={logo}></img>
            </div>
          </div>
        </div>
        <div className="about_container">
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="about_icon fa fa-user"></i>
              </div>
              <div className="about_fields">
                <div className="about_field_level">이름</div>
                <div className="about_field_value">곽지호</div>
              </div>
            </div>
          </div>
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="fa fa-calendar"></i>
              </div>
              <div className="about_fields">
                <div className="about_field_level">생년월일</div>
                <div className="about_field_value">78.02.10</div>
              </div>
            </div>
          </div>
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="fa fa-map"></i>
              </div>
              <div className="about_fields">
                <div className="about_field_level">주소지</div>
                <div className="about_field_value">충북 청주시 서원구</div>
              </div>
            </div>
          </div>
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="fa fa-phone"></i>  
              </div>
              <div className="about_fields">
                <div className="about_field_level">연락처</div>
                <div className="about_field_value"><a className="about_link" href="tel:010-4335-4356">010-4335-4356</a></div>
              </div>
            </div>
          </div>
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="about_fields">
                <div className="about_field_level">이메일</div>
                <div className="about_field_value"><a className="about_link" href="mailto:reinmake@gmail.com">reinmake@gmail.com</a></div>
              </div>
            </div>
          </div>
          <div className="about_info_wrapper">
            <div className="about_basic_info">
              <div className="about_icon_wrapper">
                <i className="fa fa-book"></i>
              </div>
              <div className="about_fields">
                <div className="about_field_level">학력</div>
                <div className="about_field_value">동국대학교<br />(산업정보시스템)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}