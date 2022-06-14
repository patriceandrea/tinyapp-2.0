import React from "react";
import Header from "../Components/Header"
import AuthenTextField from "../Components/AuthenTextField";

export interface IRegisterProps { }

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Register</h1>
      <AuthenTextField />
    </div>
  )
};

export default Register; 