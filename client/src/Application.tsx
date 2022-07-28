import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyUrls from "./pages/MyUrls";
import NewUrls from "./pages/NewUrls";
import Home from './pages/Home';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Edit } from "@mui/icons-material";
import EditUrls from "./pages/EditUrls";

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/myurls"} element={<MyUrls />} />
        <Route path={"/newurls"} element={<NewUrls />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/edit/:shortUrl"} element={<EditUrls />} />
      </Routes >
    </BrowserRouter >
  )
};

export default Application; 