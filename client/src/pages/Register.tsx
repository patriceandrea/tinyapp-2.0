import React from "react";
import Header from "../Components/Header"
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

export interface IRegisterProps { }

type UserProps = {
  setEmail: any;
  setPassword: any;
}

const Register: React.FunctionComponent<IRegisterProps> = (props: any) => {
  const { setEmail, setPassword } = props;

  return (
    <div>
      <Header />
      <h1>Register</h1>
      <AuthenTextField
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <Box textAlign='center'>
        <Button variant="contained">Register</Button>
      </Box>
    </div>
  )
};

export default Register; 