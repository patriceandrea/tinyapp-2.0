// import React from "react";
// import '../stylesheet/Header.css'
// import { Link } from "react-router-dom";

// export interface IHeaderProps { }

// const Header: React.FunctionComponent<IHeaderProps> = (props) => {

//   return (
//     <div className="navbar">
//       <h1>TinyApp</h1>
//       <div>

//         <Link to='/myurls'>My Urls</Link>
//         <Link to='/newurls'>Create New Url</Link>
//       </div>
//       <div>
//         <Link to='/login'>Login</Link>
//         <Link to='/register'>Register</Link>
//       </div>
//     </div>
//   )
// };

// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <AppBar position="static" style={{ background: '#79c99e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography style={{ color: 'black' }}

          >
            TinyApp
          </Typography>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography>

              <Link to="/myurls" >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  My Url
                </Button>
              </Link>
            </Typography>

            <Link to="/newurls" > <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Create a New Url </Button>
            </Link>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


            <Link to="/login" >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button>
            </Link>


            <Link to="/register" >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Register
              </Button>
            </Link>


          </Box>

        </Toolbar>
      </Container>
    </AppBar>

  );
};
export default Header;

