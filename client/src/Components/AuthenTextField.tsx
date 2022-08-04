import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

import "../stylesheet/AuthenTextField.css"

type AuthenTextFieldProps = {
  setEmail: any;
  setPassword: any;
}


const AuthenTextField = ({ setEmail, setPassword }: AuthenTextFieldProps) => {

  let navigate = useNavigate()



  return (

    <div className='authentication-form'>
      <div className='email'>
        <p>Email</p>
        <Box
          sx={{
            width: 400,
            maxWidth: '70%',
          }}
        >
          <TextField
            fullWidth
            type="email"
            label="Enter your email"
            name="email"
            id="email"
            required={true}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)} />

        </Box>


      </div>
      <div className='password'>
        <p>Password</p>
        <Box
          sx={{
            width: 400,
            maxWidth: '70%',
          }}
        >
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Enter your password"
            id="password"
            placeholder="password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Box>


      </div>

    </div>

  );
}

export default AuthenTextField;