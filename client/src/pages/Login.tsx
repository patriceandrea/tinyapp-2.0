import React from "react";
import Header from "../Components/Header";
import AuthenTextField from "../Components/AuthenTextField";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnonymousUser, AnonymousUserType, User } from "../types/user";


const Login = () => {

  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  let navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:8001/users/login`, { email, password }, { withCredentials: true })
      if (response.data.user) {
        navigate("/myurls")
      }
      const success = response.status === 200
      if (success) navigate('/myurls')
    } catch (error) {
      setError('Email / Password invalid');
      console.log('did not work');
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
        <p>{error}</p>
      </form>
    </div>
  )
};

export default Login; 