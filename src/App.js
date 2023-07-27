import React from "react";

import "./Components/Button/Button.css";
import "./Components/Background/HomeBackground2.css";
import "./Components/Scroll/scroll.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import CreateProfile from "./Pages/CreateProfile";
import Main from "./Pages/Main";
import "bootstrap/dist/css/bootstrap-grid.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/PixelHeartWeb" element={<Home />} />
      <Route path="/PixelHeartWeb/register" element={<Registration />} />
      <Route path="/PixelHeartWeb/login" element={<Login />} />
      <Route path="/PixelHeartWeb/CreateProfile" element={<CreateProfile />} />
      <Route path="/PixelHeartWeb/Main/*" element={<Main />} />
    </Routes>
  );
};

export default App;
