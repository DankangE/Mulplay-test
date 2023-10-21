import "./MyProfile.css";
import profile from "../../../assets/image/profile.png";

const MyProfile = ({ user_name, user_sns, user_no }) => {
  console.log(user_name);

  return (
    <div className="myprofile" key={user_no}>
      <img className="profileImg" src={profile} alt="profile_img"></img>
      <div className="profileText">
        <div className="userName">{user_name}</div>
        <div className="easyLogin">
          {user_sns ? "SNS 연동 계정" : "멀플레이 회원"}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
