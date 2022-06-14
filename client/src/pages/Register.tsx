import React from "react";
import Header from "../Components/Header"
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

export interface IRegisterProps { }

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Register</h1>
      <AuthenTextField />
      <Box textAlign='center'>
        <Button variant="contained">Register</Button>
      </Box>
    </div>
  )
};

export default Register; 