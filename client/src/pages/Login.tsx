import React from "react";
import Header from "../Components/Header";
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export interface ILoginProps { }

const Login: React.FunctionComponent<ILoginProps> = (props) => {

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
      if (isSignUp && (password !== confirmPassword)) {
        setError('Passwords need to match!')
        return
      }
      // If response is success navigate to onboarding - navidat a part of router dom
      const response = await axios.post(`http://localhost:8000/users/login`, { email, password }, { withCredentials: true })
      if (response.data.user) {
        setUser(response.data.user)
        console.log('sucess!!!')
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <AuthenTextField
          setEmail={setEmail}
          setPassword={setPassword} />
        <Box textAlign='center'>
          <Button
            variant="contained"
            type="submit"
          >Login</Button>
        </Box>
      </form>
    </div>
  )
};

export default Login; 