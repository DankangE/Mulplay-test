import thumbnail from "../../../assets/image/thumbnailSmall.png";
import MyBadge from "../../elements/MyBadge";
import MyDropdown from "../../elements/MyDropdown";
import GaugeBar from "../../elements/GaugeBar";
import "./MyCard.css";

//조건식으로 user_id 에 따라 Gaugebar Or cardDate 보여주기
const MyCard = ({ project, stateText, stateType, fundPrice }) => {
  const pundingOpen = project.prod_stat === 3 || project.prod_stat === 4;

  return (
    <div className="myCard" key={project.prod_no}>
      <img src={thumbnail} alt={project.prod_title} />

      <div className="cardContent">
        <div className="TopSection">
          <MyBadge text={stateText} type={stateType} />
          <div className="cardTitle">{project.prod_title}</div>
          <div className="cardText">{project.prod_intro}</div>
        </div>
        <div className="BottomSection">
          {/*내가 만든 프로젝트는 펀딩정보가 뜨고 다른 프로젝트들은 게이지와 후원한금액이 뜸*/}
          {fundPrice === null ? (
            pundingOpen ? (
              <div className="cardDate">
                펀딩시작일:{project.prod_opendate} | 펀딩종료일:
                {project.prod_enddate}
              </div>
            ) : (
              <div className="cardDate">
                심사신청일:{project.prod_regdate} | 예상 펀딩종료일:
                {project.prod_enddate}
              </div>
            )
          ) : (
            <div className="otherProject">
              <div
                className="cardFundPrice"
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#333333",
                }}
              >{`내가 후원한 금액 : ${
                fundPrice.toLocaleString() || 0
              } 원`}</div>
              <GaugeBar
                goal={project.prod_goal}
                current={project.prod_current}
              />
            </div>
          )}
        </div>
      </div>
      <MyDropdown stat={project.prod_stat} />
    </div>
  );
};

export default MyCard;
