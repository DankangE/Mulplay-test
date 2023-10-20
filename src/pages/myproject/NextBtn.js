//import { NavigateBefore } from "@mui/icons-material";
import React from "react";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import RewardInfo from "./RewardInfo";

//  버튼 스타일
const btnstyle = {
  margin: "50px 0",
  position: "absolute",
  right: "0",
  backgroundColor: "#EE833E",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "700",
  width: "184px",
  height: "50px",
  borderRadius: "15px",
  border: "none",
  cursor: "pointer",
};

// function NextBtn() {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     // 다음 탭으로 이동
//     navigate("/project"); // '/next'는 다음 탭의 경로입니다.
//   };

//   return (
//     <div>
//       <button style={btnstyle} onClick={handleButtonClick}>
//         다음 단계
//       </button>
//     </div>
//   );
// }

// function NextBtn() {
//   const handleButtonClick = () => {
//     // "project" 섹션으로 스크롤 이동
//     const projectSection = document.getElementById("recontainer");
//     if (projectSection) {
//       projectSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       <button style={btnstyle} onClick={handleButtonClick}>
//         다음 단계
//       </button>
//     </div>
//   );
// }

function NextBtn() {
  return (
    <div>
      {/* Link 컴포넌트를 사용하여 버튼을 클릭하면 "project" 요소로 스크롤합니다. */}
      <Link to="rewardInfo" spy={true} smooth={true} duration={500}>
        <button style={btnstyle}>다음 단계</button>
      </Link>
    </div>
  );
}

export default NextBtn;
