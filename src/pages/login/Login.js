import "./Login.css";
import { useState, useEffect } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Login = () => {
  return (
    <section id="container_login">
      <header>로그인</header>
      <form action="#" className="form">
        <div className="input_box">
          <label>아이디</label>
          <input type="text" placeholder="아이디를 입력해 주세요" required />
        </div>
        <div className="input_box">
          <label>비밀번호</label>
          <input type="text" placeholder="비밀번호를 입력해 주세요" required />
        </div>

        <div class="save_box">
          <input type="checkbox" id="check" name="save_id" />
          <label for="check">아이디 저장</label>
        </div>

        <div class="find_box">
          <a for="findId">아이디 </a>
          <a for="findPw">비밀번호</a>
        </div>

        <button>로그인</button>

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

export default Login;
