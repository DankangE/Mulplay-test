import "./MyBadge.css";

const MyBadge = ({ text, type }) => {
  return <div className={["MyBadge", `MyBadge_${type}`].join(" ")}>{text}</div>;
};

export default MyBadge;
