import "./MyProfile.css";
import profile from "../../../assets/image/profile.png";

const MyProfile = ({ nameText, easyLoginText }) => {
  return (
    <div className="myprofile">
      <img className="profileImg" src={profile} alt="profile_img"></img>
      <div className="profileText">
        <div className="userName">김멀플{nameText}</div>
        <div className="easyLogin">카카오연동계정{easyLoginText}</div>
      </div>
    </div>
  );
};

export default MyProfile;
