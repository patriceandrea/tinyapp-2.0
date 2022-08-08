import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyUrls from "./pages/MyUrls";
import NewUrls from "./pages/NewUrls";
import Home from './pages/Home';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditUrls from "./pages/EditUrls";
import axios from "axios";
import { User } from "./types/user"
import { UserContextProvider } from "./Components/AppContext";


export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = () => {

  // const [user, setUser] = React.useState<User | null>(null);

  // useEffect(() => {
  //   axios.get('http://localhost:8001/users', { withCredentials: true })
  //     .then((res) => {
  //       setUser(res.data);
  //       console.log(res.data)
  //     })
  //     .catch(() => {
  //       setUser(null);
  //     })
  // }, [user?.id])



  return (
    <UserContextProvider>
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
    </UserContextProvider>

  )
};

export default Application; 