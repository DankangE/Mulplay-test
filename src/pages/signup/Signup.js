import "./Signup.css";
import { useState, useEffect } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Signup = () => {
  return (
    <section id="container_signup">
      <header>회원가입</header>
      <form action="#" className="form_signup">
        <div className="input_box">
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해 주세요" required />
        </div>
        <div className="input_box">
          <label>아이디</label>
          <input type="text" placeholder="아이디를 입력해 주세요" required />
        </div>
        <div className="input_box">
          <label>비밀번호</label>
          <input type="text" placeholder="비밀번호를 입력해 주세요" required />
        </div>
        <div className="input_box">
          <label>전화번호</label>
          <input type="text" placeholder="전화번호를 입력해 주세요" required />
        </div>

        <div class="input_box email">
          <label>이메일</label>
          <div className="column">
            <input type="text" placeholder="이메일을 입력해 주세요" required />
            <div class="select_box">
              <select>
                <option hidden>직접입력</option>
                <option>naver.com</option>
                <option>google.com</option>
                <option>hanmail.net</option>
                <option>hatmail.com</option>
              </select>
            </div>
          </div>
        </div>

        <div class="input_box">
          <label>주소</label>
          <div class="column">
            <input type="number" placeholder="우편번호" required />

            <button className="btn_search">검색</button>
          </div>
        </div>
        <div class="input_box">
          <input type="text" placeholder="상세주소를 입력해 주세요" required />
        </div>

        <button className="btn_signup">완료</button>

        {/* <div className="loginSns">
          <div className="loginIcon loginGoogle">
            <img src={GoogleIcon} alt="" />
          </div>
          <div className="loginIcon loginKakaotalk">
            <img src={KakaoIcon} alt="" />
          </div>
          <div className="loginIcon loginApple">
            <img src={AppleIcon} alt="" />
          </div>
        </div>
        <div className="loginSignup">
          아직 계정이 없으신가요?{" "}
          <a className="signup" href="#">
            회원가입
          </a>
        </div> */}
      </form>
    </section>
  );
};

export default Signup;
