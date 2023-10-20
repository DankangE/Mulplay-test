import React, { useState } from "react";
//import { Link } from "react-scroll";
import "./BasicInfo.css";
//import { Nextbtn } from "../../components/button/Button_funding";
//import photo from "../../assets/image/photo.png";
import search from "../../assets/image/search.png";
import MyDatePicker from "./DatePicker";
import CheckboxExample from "./Checkbox";
import CheckboxList from "./SkillCheckbox";
import ImageUploader from "./InputFile";
import NextBtn from "./NextBtn";

function BasicInfo() {
  const [formData, setFormData] = useState({
    field: "",
    title: "",
    description: "",
    money: "",
    hashTag: "",
    forecast: "",
    staff: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="basicForm">
      <div>
        <label htmlFor="field">프로젝트 분야</label>
        <select
          name="field"
          id="profield"
          value={formData.field}
          onChange={handleChange}
        >
          <option value="select">프로젝트 선택</option>
          <option value="web">웹</option>
          <option value="app">애플리케이션</option>
          <option value="software">일반 소프트웨어</option>
          <option value="game">게임</option>
          <option value="commerce">커머스 쇼핑몰</option>
          <option value="publishing">퍼블리싱</option>
          <option value="design">디자인</option>
        </select>
      </div>
      <div>
        <label htmlFor="title">프로젝트 제목</label>
        <input
          type="text"
          id="protitle"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div>
        <label htmlFor="description">프로젝트 설명</label>
        <textarea
          type="text"
          id="prodescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="프로젝트에 대한 설명을 간단하게 입력해주세요."
        />
      </div>
      <div class="custom-file-input">
        <label htmlFor="fileInput">대표 이미지</label>
        <p>
          프로젝트 썸네일 이미지를 한 개만 등록해주세요. <br />
          (10MB 이하의 JPG, JPEG, PNG 파일)
        </p>
        <ImageUploader />
        {/* <input
          type="file"
          accept="image/jpeg, image/png"
          id="fileInput"
          name="file"
          value={formData.file}
          onChange={handleChange}
        />
        <img className="photo" src={photo} alt="사진" /> */}
      </div>
      <div class="project-period">
        <label htmlFor="properiod">프로젝트 기한</label>
        <p>
          프로젝트 심사부터 리워드 제작기간 등 전체 일정을 고려해 설정해 주세요.
        </p>
        <MyDatePicker />
      </div>
      <div className="goalmoney">
        <label htmlFor="money">목표 금액</label>
        <p>최소 50만원 ~ 최대 1억원 사이에서 목표금액을 설정해 주세요.</p>
        <input
          type="text"
          id="promoney"
          name="money"
          value={formData.money}
          onChange={handleChange}
        />
      </div>
      <div className="pro_hashTag">
        <label htmlFor="prohashTag">주제 해시태그</label>
        <p>주제와 관련된 해시태그를 최소 1개 ~ 4개 미만으로 설정해 주세요. </p>
        <input
          type="text"
          id="prohashTag"
          name="hashTag"
          value={formData.hashTag}
          onChange={handleChange}
        />
        <img className="tag-search" src={search} alt="검색" />
      </div>

      <div>
        <label htmlFor="progress">진행 분류</label>
        <p>신규와 리뉴얼 중 하나를 선택해 주세요. </p>
        <CheckboxExample />
      </div>

      <div className="forecast">
        <label htmlFor="forecast">예상 기한</label>
        <p>예상 기한은 최소 30일 부터 365일 사이에서 설정해 주세요.</p>
        <input
          type="text"
          id="forecast"
          name="forecast"
          value={formData.forecast}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="staff">참여 인력</label>
        <p>
          프로젝트에 참여하는 포지션을 작성해 주세요.(예: Front-end개발자,
          디자이너)
        </p>
        <input
          type="text"
          id="prostaff"
          name="staff"
          value={formData.staff}
          onChange={handleChange}
        />
      </div>

      <div className="proskill">
        <label htmlFor="skill">관련 기술</label>
        <p>프로젝트에 사용되는 기술을 선택해 주세요. </p>
        <CheckboxList />
      </div>

      {/* <Nextbtn /> */}
      {/* <button type="submit">다음 단계</button> */}
      <NextBtn />
    </form>
  );
}

export default BasicInfo;
