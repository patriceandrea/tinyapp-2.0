import React from "react";
import Header from "../Components/Header";
import AuthenTextField from "../Components/AuthenTextField";


export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <AuthenTextField />
    </div>
  )
};

export default Login; 