import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { User } from "../types/user"
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);



  const [user, setUser] = React.useState<User | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  let navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8001/users', { withCredentials: true })
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch(() => {
        setErrorMessage(errorMessage)
      })
  }, [errorMessage])



  const logoutClick = () => {
    // e.preventDefault()
    axios.delete(`http://localhost:8001/users/logout`, { withCredentials: true })
      .then((response) => {
        const success = response.status === 200
        if (success) {
          navigate("/")
          setUser(null);

        }
        else {
          console.log("not a sucess")
        }
      })

  }


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (

    <AppBar position="static" style={{ background: '#79c99e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Box>
                  <Link to="/myurls" style={{ textDecoration: 'none' }} >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ color: 'black' }}>
                      My Url
                    </Button>
                  </Link>
                  <Link to="/newurls" style={{ textDecoration: 'none' }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'flex' }}
                    >
                      Create a New Url
                    </Button>
                  </Link>
                  {user?.id &&
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button
                        onClick={logoutClick}
                        sx={{ my: 2, color: 'black', display: 'flex' }}
                      >
                        Logout
                      </Button>
                    </Link>}
                  {!user?.id &&
                    <div className='authentication'>
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'black', display: 'flex' }}
                        >
                          Login
                        </Button>
                      </Link>
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                          Register
                        </Button>
                      </Link>
                    </div>
                  }
                </Box >
              </MenuItem>

            </Menu>
          </Box>
          <Typography style={{ color: 'black' }} sx={{ m: 1 }}
          >
            TinyApp
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography>
              <Link to="/myurls" style={{ textDecoration: 'none' }} >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  My Url
                </Button>
              </Link>
            </Typography>
            <Link to="/newurls" style={{ textDecoration: 'none' }}> <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Create a New Url </Button>
            </Link>
          </Box>
          {!user?.id &&
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Register
                </Button>
              </Link>
            </Box>}
          {user?.id && `Hello  ${user?.email}!`}
          {user?.id &&
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={
                  () => {
                    logoutClick();
                    handleCloseNavMenu();
                  }
                }
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar >

  );
};
export default Header;

