import "./Login.css";
import { useState, useEffect } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Login = () => {
  return (
    <section id="container_login">
      <h1>로그인</h1>
      <form action="#" className="form_login">
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
        <div className="container_savefind">
          <div class="save_box">
            <input type="checkbox" class="chk_btn" id="chk_save" />
            <label class="title" for="chk_save">
              아이디 저장
            </label>
          </div>

          <div class="find_box">
            <a href="#" class="find_btn">
              아이디 / 비밀번호 찾기
            </a>
          </div>
        </div>
        <button className="btn_login">로그인</button>
        {/* sns 로그인 */}
        <div className="sns_container">
          <div className="sns_login google">
            <img src={GoogleIcon} alt="" />
          </div>
          <div className="sns_login kakao">
            <img src={KakaoIcon} alt="" />
          </div>
          <div className="sns_login apple">
            <img src={AppleIcon} alt="" />
          </div>
        </div>
        <div className="signup_btn">
          아직 계정이 없으신가요?{" "}
          <a className="signup_title" href="#">
            회원가입
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;