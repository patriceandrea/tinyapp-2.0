import React from "react";
import Header from "../Components/Header"

export interface IRegisterProps { }

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Register</h1>
    </div>
  )
};

export default Register; 