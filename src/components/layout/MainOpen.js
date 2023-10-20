import React from "react";
// import React, { useState } from "react";
import "../../pages/main/Main.css";
import card2 from "../../assets/image/card2.jpg";


function Open() {
  return (
    <div className="main_openCard">
      <div className="main_openImg">   
      <img src={card2} alt="card2" />
      </div>
      <div className="main_openInfo">
        <div className="main_tag">금융</div>
        <div className="main_openTitle">이제 오픈할 웹개발 펀딩 타이틀</div>
        <div className="main_openSubtitle">웹개발 펀딩 설명과 개요 등등</div>
        <button className="main_openButton">
          {/* <img className="bell" src="./assets/bell.png" /> */}
          10월 11일 오픈 알림 신청
        </button>
      </div>
    </div>
  );
}

export default Open;