import React from "react";
import Header from "../Components/Header";
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <AuthenTextField />
      <Box textAlign='center'>
        <Button variant="contained">Login</Button>
      </Box>
    </div>
  )
};

export default Login; 