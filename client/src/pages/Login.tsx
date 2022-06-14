import React from "react";
import Header from "../Components/Header";

export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Please Login into your account</h1>
    </div>
  )
};

export default Login; 