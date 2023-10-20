import React from "react";
// import React, { useState } from "react";
import Card from "../../components/layout/MainCard";
import Open from "../../components/layout/MainOpen";
import Pick from "../../components/layout/MainPick";
// import "../../components/layout/Slider";
import "../../pages/main/Main.css";

// /export default

function Main() {
  return (
    <div className="main_Main">
      {/* <h1>Header</h1> */}
      <div className="main_slide">
        <div className="slide_item item1">1</div>
        <div className="slide_item item2">2</div>
        <div className="slide_item item3">3</div>
        <div className="slide_item item4">4</div>
        <div className="slide_item item5">5</div>
        <div className="slide_prev_button slide_button">&lt;</div>
        <div className="slide_next_button slide_button">&gt;</div>
        <ul className="slide_pagination"></ul>
      </div>
      <h2 className="main_mainTitle">인기 펀딩</h2>
      <div className="main_AppCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="main_line"></div>
      <h2 className="main_mainTitle">신규 펀딩</h2>
      <div className="main_AppCard">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="main_banner">
        {/* <img src={require("../../assets/image/banner4.png").default}/> */}
      </div>
      <h2 className="main_mainTitle">오픈 예정</h2>
      <div className="main_open">
        <Open />
      </div>
      <div className="main_line"></div>
      <h2 className="main_mainTitle">에디터의 Pick</h2>
      <div className="main_AppCardPick">
      <div className="main_pick">
      </div>
        <Pick />
        <Pick />
      </div>
    </div>
  );
}

export default Main;
