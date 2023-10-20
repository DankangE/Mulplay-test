import React from "react";
// import React, { useState } from "react";
import "../../pages/main/Main.css";
import card3 from "../../assets/image/card3.png";

function Pick() {
  return (
    
      <div className="main_pickCard">
          <div className="main_pickImg"> 
        <img src={card3} alt="card3" />
        </div>
        <div className="main_pickInfo">
          <div className="main_pickTitle">개인화 추천 서비스 홈페이지 리뉴얼
          <div className="main_pickSubtitle">웹개발 펀딩 설명과 개요 등등</div>
          </div>
          
          <button className="main_pickButton">바로가기</button>
        </div>
        
      </div>
   
  );
}

export default Pick;
