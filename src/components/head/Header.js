import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import search from "../../assets/image/search.png";
import bell from "../../assets/image/bell.png";

const LoggedOutHeader = ({ onLoginClick }) => {
  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/fundinglist">오픈예정 </a>
            </li>
            <li>
              <a href="/fundinglist">인기펀딩</a>
            </li>
            <li>
              <a href="/fundinglist">신규펀딩 </a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="프로젝트명을 검색해보세요" />
          <img className="search" src={search} alt="검색" />
        </div>
        <div className="login">
          <Link to='/login'>
          <button onClick={onLoginClick}>로그인</button>
          </Link>
          <Link to='/signup'>
          <button onClick={onLoginClick}>회원가입</button>
          </Link>
        </div>
        <Link to='/project'>
        <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>
    </header>
  );
};
const LoggedInHeader = ({ onLogoutClick }) => {
  return (
    <header className="header">
      <div className="contents">
        <img className="logo" src={logo} alt="로고" />
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">오픈예정 </a>
            </li>
            <li>
              <a href="#">인기펀딩</a>
            </li>
            <li>
              <a href="#">신규펀딩 </a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="프로젝트명을 검색해보세요" />
          <img className="search" src={search} alt="검색" />
        </div>
        <div className="login">
          <img className="alarm" src={bell} alt="알림" />
          <button onClick={onLogoutClick}>로그아웃</button>
          <button onClick={onLogoutClick}>마이페이지</button>
        </div>
        <button className="btn">프로젝트 만들기</button>
      </div>
    </header>
  );
};

export { LoggedOutHeader, LoggedInHeader };
