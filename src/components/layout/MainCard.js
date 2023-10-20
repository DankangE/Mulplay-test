import React from "react";
// import React, { useState } from "react";
import card1 from "../../assets/image/card1.png";
import "../../pages/main/Main.css";

const images = [card1];

function Card() {
  return (
    <div className="main_mainCard">
      <div className="main_dday">D-30</div>
      <div className="main_cardImg">
      <img src={card1} alt="card1" />
      </div>
      <div className="main_cardInfo">
        <div className="main_tag">금융</div>
        <div className="main_cardTitle">
          모두가 꿈꾸는 내일의 금융세상을 만듭니다. 신한은행
        </div>
        <div className="main_cardSubtitle">
          신한금융 앱을 새롭게 리뉴얼하며 이용하는 사람들의 사용성을 향상시키고
          필요한 정보를 한눈에 알아보기 쉽도록, 금융정보를 제공하는데 초점을
          맞춰 진행한 앱 리뉴얼 프로젝트입니다.
        </div>
        <div className="main_cardFooter">
          <div className="main_cardFunding">1,234,500 원 펀딩</div>
          <div className="main_cardPercent">달성률 %</div>
        </div>
      </div>
    </div>
  );
}

export default Card;