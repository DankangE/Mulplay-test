import "./Signup.css";
import { useState, useEffect } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Signup = () => {
  return (
    <section id="container_signup">
      <h1>회원가입</h1>
      <form action="#" className="form_signup">
        <div className="input_box name">
          <label>이름</label>
          <input
            className="input_text"
            type="text"
            placeholder="이름을 입력해 주세요"
            required
          />
        </div>
        <div className="input_box id">
          <label>아이디</label>
          <input
            className="input_text"
            type="text"
            placeholder="아이디를 입력해 주세요"
            required
          />
        </div>
        <div className="input_box pw">
          <label>비밀번호</label>
          <input
            className="input_text"
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            required
          />
        </div>
        <div className="input_box tel">
          <label>전화번호</label>
          <input
            className="input_text"
            type="text"
            placeholder="전화번호를 입력해 주세요"
            required
          />
        </div>
        <div className="input_box email">
          <label>이메일</label>
          <div className="column">
            <input
              className="input_text"
              type="text"
              placeholder="이메일을 입력해 주세요"
              required
            />
            <div className="select_box">
              <select className="input_select">
                <option hidden>직접입력</option>
                <option>naver.com</option>
                <option>google.com</option>
                <option>hanmail.net</option>
                <option>hatmail.com</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input_box adr">
          <label>주소</label>
          <div className="column">
            <input
              type="text"
              className="input_text"
              placeholder="우편번호"
              required
            />

            <button className="btn_search">검색</button>
          </div>
        </div>
        <div className="input_box">
          <input
            className="input_text"
            type="text"
            placeholder="상세주소를 입력해 주세요"
            required
          />
        </div>

        <div class="agreement__container">
          <ul class="agreement__all">
            <li class="check_all">
              <input type="checkbox" class="chk_btn" id="chk_all" />
              <label class="title" for="chk_all">
                전체 동의
              </label>
              <i></i>
            </li>
            <li>
              <ul class="agreement__each">
                <li>
                  <input type="checkbox" class="chk_btn" id="chk_01" />
                  <label for="chk_01">선택 동의 01</label>
                  <a href="#" class="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" class="chk_btn" id="chk_02" />
                  <label for="chk_02">선택 동의 02</label>
                  <a href="#" class="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" class="chk_btn" id="chk_03" />
                  <label for="chk_03">선택 동의 03</label>
                  <a href="#" class="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" class="chk_btn" id="chk_04" />
                  <label for="chk_04">선택 동의 04</label>
                  <a href="#" class="more_btn">
                    전문 보기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button className="btn_signup">완료</button>
      </form>
    </section>
  );
};

export default Signup;