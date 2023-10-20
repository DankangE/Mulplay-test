import React from "react";
import "./Layout.css";

const Layout = ({children}) => {
  return (
    <div className="main">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
