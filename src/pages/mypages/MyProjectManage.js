import { Outlet } from "react-router-dom";
import ProjectManager from "../../hooks/ProjectManager";

const MyProjectManage = () => {
  return (
    <div>
      <ProjectManager type="created" />
      <Outlet />
    </div>
  );
};

export default MyProjectManage;
