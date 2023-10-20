import thumbnail from "../../../assets/image/thumbnailSmall.png";
import MyBadge from "../../elements/MyBadge";
import MyDropdown from "../../elements/MyDropdown";
import "./MyCard.css";

const MyCard = ({ project, stateText, stateType }) => {
  const pundingOpen = project.prod_stat === 3 || project.prod_stat === 4;

  return (
    <div className="myCard" key={project.prod_no}>
      <img src={thumbnail} alt={project.prod_title} />
      <div className="cardText">
        <div>
          <MyBadge text={stateText} type={stateType} />
        </div>
        <div className="cardTitle">{project.prod_title}</div>
        <div className="cardContent">{project.prod_intro}</div>
        <div className="cardDate">
          {pundingOpen
            ? `펀딩시작일:${project.prod_opendate}   |   펀딩종료일:${project.prod_enddate}`
            : `심사신청일:${project.prod_regdate}   |   예상 펀딩종료일:${project.prod_enddate}`}
        </div>
      </div>
      <MyDropdown stat={project.prod_stat} />
    </div>
  );
};

export default MyCard;
