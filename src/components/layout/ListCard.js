import React from "react";
// import React, { useState } from "react";
import "../../pages/fundinglist/FundingListPage.css";
import projectData from "../../data/projectData.json";

function FundingListPage_Card() {
  return (
    <div className="fundinglist_mainCard">
      <div className="fundinglist_dday">D-30</div>
      <div className="fundinglist_cardImg">
        <img className="fundinglist_img"
                alt="" src={projectData[0].prod_mainimg} />
      </div>
      <div className="fundinglist_cardInfo">
        <ul>
          <li>
            <div className="fundinglist_tag">금융</div>
          </li>
          <li>
            <div className="fundinglist_tag">금융</div>
          </li>
          <li>
            <div className="fundinglist_tag">금융</div>
          </li>
        </ul>
        <div className="fundinglist_cardTitle">
          모두가 꿈꾸는 내일의 금융세상을 만듭니다. 신한은행
        </div>
        <div className="fundinglist_cardSubtitle">
          신한금융 앱을 새롭게 리뉴얼하며 이용하는 사람들의 사용성을 향상시키고
          필요한 정보를 한눈에 알아보기 쉽도록, 금융정보를 제공하는데 초점을
          맞춰 진행한 앱 리뉴얼 프로젝트입니다.
        </div>
        <div className="fundinglist_cardFooter">
          <div className="fundinglist_cardFunding">1,234,500 원 펀딩</div>
          <div className="fundinglist_cardPercent">달성률 95%</div>
        </div>
      </div>
    </div>
  );
}

export default FundingListPage_Card;