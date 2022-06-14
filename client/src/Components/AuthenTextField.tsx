import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "../stylesheet/AuthenTextField.css"

export default function AuthenTextField() {
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
          <TextField fullWidth label="Enter your email" id="fullWidth" />

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
          <TextField fullWidth label="Enter your password" id="fullWidth" />

        </Box>


      </div>

    </div>

  );
}