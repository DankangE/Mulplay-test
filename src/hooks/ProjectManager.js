import React, { useState } from "react";
import projectCreatedData from "../data/projectCreatedData.json";
import projectLikeData from "../data/projectLikeData.json";
import projectFundData from "../data/projectFundData.json";

import MyCard from "../components/layout/mypage/MyCard";
import "../pages/mypages/MyProjectManage.css";

const filterOptionListCreated = [
  { value: "all", name: "전체" },
  { value: "0", name: "심사중" },
  { value: "1", name: "심사완료" },
  { value: "2", name: "심사반려" },
  { value: "3", name: "펀딩중" },
  { value: "4", name: "펀딩완료" },
];

const filterOptionListLiked = [
  { value: "all", name: "전체" },
  { value: "3", name: "펀딩중" },
  { value: "4", name: "펀딩완료" },
];

const ProjectManager = ({ type }) => {
  const [selectedTab, setSelectedTab] = useState("all"); // 기본 탭 선택

  let projects;
  let filterOptions;

  switch (type) {
    case "created":
      projects = projectCreatedData;
      filterOptions = filterOptionListCreated;
      break;
    case "liked":
      projects = projectLikeData;
      filterOptions = filterOptionListLiked;
      break;
    case "funded":
      projects = projectFundData;
      filterOptions = filterOptionListLiked; // Funded and Liked share the same options
      break;
    default:
      return null;
  }

  const isLikedOrFunded = type === "liked" || type === "funded";
  // 프로젝트 상태에 따라 필터링된 프로젝트 목록을 생성
  const filteredProjects = projects.filter((project) => {
    if (selectedTab === "all") {
      if (isLikedOrFunded) {
        // 'liked'나 'funded' 타입에서는 '전체' 탭이 선택되었을 때 prod_stat이 3 또는 4인 프로젝트만 표시
        return project.prod_stat === 3 || project.prod_stat === 4;
      } else {
        // 'created' 타입에서는 '전체' 탭이 선택되었을 때 모든 프로젝트를 표시
        return true;
      }
    }
    return project.prod_stat === parseInt(selectedTab);
  });

  // 프로젝트 상태에 따라 텍스트를 반환
  const getStateText = (prod_stat) => {
    switch (prod_stat) {
      case 0:
        return "심사중";
      case 1:
        return "심사완료";
      case 2:
        return "심사반려";
      case 3:
        return "펀딩중";
      case 4:
        return "펀딩완료";
      default:
        return "정보없음";
    }
  };

  // 프로젝트 상태에 따라 CSS 클래스를 반환
  const getStateType = (prod_stat) => {
    if (prod_stat === 0) {
      return "neutral";
    }
    if (prod_stat === 1 || prod_stat === 3) {
      return "positive";
    } else if (prod_stat === 2 || prod_stat === 4) {
      return "negative";
    } else {
      return "neutral";
    }
  };

  return (
    <div className="myProjectManage">
      <div className="tabContainer">
        {/* Filter options */}
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={selectedTab === option.value ? "active" : ""}
            onClick={() => setSelectedTab(option.value)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="projectList">
        {/* Project cards */}
        {filteredProjects.map((project) => (
          <MyCard
            key={project.prod_no}
            project={project}
            stateText={getStateText(project.prod_stat)}
            stateType={getStateType(project.prod_stat)}
            fundPrice={isLikedOrFunded ? project.fund_price : null}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectManager;
