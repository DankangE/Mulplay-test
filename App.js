import "./App.css";

import React, { useState } from "react";
import { LoggedOutHeader, LoggedInHeader } from "./components/head/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyInfoEdit from "./pages/mypages/MyInfoEdit";
import MyProjectManage from "./pages/mypages/MyProjectManage";
import Project from "./pages/myproject/Project";
import Cart from "./pages/cart/Cart";
import Funding from "./pages/funding/Funding";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import NotFound from "./pages/NotFound";
import MyPages from "./pages/mypages/MyPages";
import MyFundingProject from "./pages/mypages/MyFundingProject";
import MyLikeProject from "./pages/mypages/MyLikeProject";
import MyProceeds from "./pages/mypages/MyProceeds";

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? <LoggedInHeader /> : <LoggedOutHeader />}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/funding" element={<Funding />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypages" element={<MyPages />}>
            <Route path="myinfoedit" element={<MyInfoEdit />} />
            <Route path="myprojectmanage" element={<MyProjectManage />}></Route>
            <Route path="myfundingproject" element={<MyFundingProject />} />
            <Route path="mylikeproject" element={<MyLikeProject />} />
            <Route path="myproceeds" element={<MyProceeds />} />
          </Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
