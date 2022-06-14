import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Text() {
  return (
    <div className='text-field'>
      <p>Enter a URL:</p>
      <Box
        sx={{
          width: 400,
          maxWidth: '70%',
          display: 'flex'
        }}
      >

        <TextField fullWidth label="fullWidth" id="fullWidth" />

      </Box>
    </div>
  );
}