import * as React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';

export default function LoginPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    alert("Sign in successful!");
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        // bgcolor: '#659DBD', 
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '100%', display: 'flex', alignItems: 'center' }}>
        {/* WELCOME CONTENT */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={10}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'transparent', 
              // border: '2px solid ',
              // backdropFilter: 'blur(1px)',
              // borderRadius: 2,
              height: '100%',
            }}
          >
            <Box>
              <Typography variant="h3" gutterBottom mb={4} color='#0490C8'>
                Welcome to WexaTalk ,
              </Typography>
              <Typography variant="body1" gutterBottom>
                where connecting with loved ones is as easy as a tap! Dive into seamless conversations,
                enjoy secure and fast messaging, and share your moments instantly.
                Whether you're catching up with friends or staying in touch with family.
              </Typography>
              <Typography variant="body1" mt={2}>
                " WaxaTalk brings everyone closer, one message at a time. "
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* -- Login Form --- */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={10}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              height: '340px',
              // bgcolor: '#0490C8', 
              border: '2px solid ', 
              backdropFilter: 'blur(1px)', 
            }}
          >
            <img src="https://i.ibb.co/cNNsvGy/logo.png" alt="logo" style={{ width: '170px', height: '130px' }} />

            <Typography component="h1" variant="h5" gutterBottom color='#0490C8'>
              WexaTalk
            </Typography>

            <form onSubmit={handleSignIn} style={{ width: '100%', marginTop: 2 }}>
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                name="email"
                type="email"
                size="small"
                required
                fullWidth
                // sx={{ color: 'white', fontWeight: 'bold' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle fontSize="inherit" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"

              />
              <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                <InputLabel size="small" htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  size="small"
                  sx={{ color: 'white', fontWeight: 'bold' }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"

                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="inherit" />
                        ) : (
                          <Visibility fontSize="inherit" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                disableElevation
                fullWidth
                sx={{ my: 2 }}
              >
                Log In
              </Button>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Link href="/" variant="body2" >
                  {"Sign up"}
                </Link>
                <Link href="/" variant="body2" sx={{ ml: 2, }}>
                  Forgot password?
                </Link>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
