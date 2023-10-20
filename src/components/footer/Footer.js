import React from "react";
import "./Footer.css";
import call from "../../assets/image/call.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="fnavigation">
        <ul>
          <li>정책 및 약관</li>
          <li>개인정보처리방침</li>
          <li>About us</li>
        </ul>
      </nav>
      <div className="fcontents">
        <div className="cs">
          <h2 style={{ color: "#333" }}>
            <img className="call" src={call} alt="전화" />
            고객센터
          </h2>
          <h1 style={{ color: "#333" }}>1544-9001</h1>
          <p style={{ color: "#555" }}>
            09:00 - 18:00 주말 . 공휴일 제외 <br />
            (주) MulPlay | 서울특별시 강남구 언주로 508 14층 (역삼동,
            서울상록빌딩)
          </p>
        </div>

        <div className="fdescription">
          <p>
            MULPLAY는 중개업(온라인소액투자중개 및 통신판매중개)을 영위하는
            플랫폼제공자로 자금을 모집하는당사자가 아닙니다. <br />
            따라서 투자손실의 위험을 보전하거나 리워드 제공을 보장해 드리지
            않으며 이에 대한 법적인책임을 지지 않습니다.
          </p>
          <br />
          <p>Copyright 2023. Mulplay All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
