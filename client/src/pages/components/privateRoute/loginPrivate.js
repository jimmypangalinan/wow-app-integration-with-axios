import { useState, useContext } from "react";

// function Outlet untuk merender route child jika ada
// function Navigate untuk mengganti/menavigasikan ke route tertentu
import { Outlet, Navigate } from "react-router-dom";

import { UserLoginContext } from "../../../context/userLoginContext";

const OnlyLogin = ({ element: components, ...rest }) => {
  const [isLogin, setIsLogin] = useContext(UserLoginContext);

  return isLogin.isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default OnlyLogin;
