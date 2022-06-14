import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Text() {
  return (
    <div className='text-field'>

      <Box
        sx={{
          width: 400,
          maxWidth: '70%',
        }}
      >
        <TextField fullWidth label="new TinyURL" id="fullWidth" />

      </Box>
      <Button variant="contained" sx={{ m: 1 }}>Submit</Button>
    </div>
  );
}