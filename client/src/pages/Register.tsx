import React from "react";
import Header from "../Components/Header"
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export interface IRegisterProps { }

type UserProps = {
  setEmail: any;
  setPassword: any;
  email: any;
  password: any;
  setError: any;
  setUser: any;
  isSignUp: any;
  error: any;
}

const Register: React.FunctionComponent<IRegisterProps> = () => {
  // const {
  //   setEmail,
  //   setPassword,
  //   email,
  //   password,
  //   setError,
  //   setUser,
  //   error,
  //   isSignUp } = props;

  const [email, setEmail] = React.useState<any | null>(null);
  const [password, setPassword] = React.useState<any | null>(null);
  const [confirmPassword, setConfirmPassword] = React.useState<any | null>(null);
  const [error, setError] = React.useState<any | null>(null);
  const [isSignUp, setIsSignUp] = React.useState(true);
  const [user, setUser] = useState({});

  let navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:8001/users/register`, { email, password }, { withCredentials: true })
      if (response.data.user) {
        setUser(response.data.user.id)
        navigate("/myurls")
        console.log('sucess!!!')
        console.log('hello', response.data.user.id);
      }
      const success = response.status === 200
      if (isSignUp && success) navigate('/myurls')
    } catch (error) {
      setError('Email / Password invalid')
      console.log('did not work')
    }
  }

  return (
    <div>
      <Header />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <AuthenTextField
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <Box textAlign='center'>
          <Button
            variant="contained"
            type="submit">
            Register
          </Button>
        </Box>
        <p>{error}</p>
      </form>
    </div>
  )
};

export default Register; 