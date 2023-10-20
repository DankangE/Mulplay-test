import { Outlet } from "react-router-dom";
import MyProfile from "../../components/layout/mypage/MyProfile";
import MyCategory from "../../components/layout/mypage/MyCategory";
import user from "../../data/userData.json";

const MyPages = () => {
  const loggedInUserId = 1;

  const loggedInUser = user.find((user) => user.user_no === loggedInUserId);

  return (
    <div className="MyPages">
      <MyProfile
        user_name={loggedInUser.user_name}
        user_sns={loggedInUser.user_sns}
        user_no={loggedInUser.user_no}
      />
      <MyCategory />
      <Outlet />
    </div>
  );
};

export default MyPages;
