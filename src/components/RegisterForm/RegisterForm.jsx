import React from 'react';
import { Box, Button } from '@mui/material';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectIsAuthLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(190, 219, 176, 1)',
            color: 'rgba(22, 22, 22, 1)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          color: 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          color: '#fff',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '400',
        },
      },
    },
  },
});
function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authOperation = useSelector(selectIsAuthLoading);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      form.reset();
      Notify.success('Congratulations, you have successfully registered!');
      navigate('/auth/login');
    } catch (error) {
      Notify.failure('User already exist');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={css.loginSection}>
        <Box
          sx={{
            mt: 1,
            background: 'rgba(21, 21, 21, 1)',
            borderRadius: '8px',
            padding: '40px',
            '@media (max-width: 375px)': {
              padding: '24px 5px',
            },
          }}
        >
          <Link className={css.registerLink} to="/register" underline="none">
            Registration
          </Link>
          <Link className={css.loginLink} to="/auth/login" underline="none">
            Log In
          </Link>

          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '25px',
            }}
          >
            <TextField
              name="name"
              required
              id="name"
              label="Enter your name"
              variant="outlined"
              autoFocus
            />
            <TextField
              required
              id="email"
              label="Enter your email"
              name="email"
              variant="outlined"
            />
            <Box>
              <FormControl sx={{ width: '345px' }} variant="outlined">
                <InputLabel htmlFor="password" required>
                  Create a password
                </InputLabel>
                <OutlinedInput
                  name="password"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.3)' }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Create a password*"
                  required
                />
              </FormControl>
            </Box>
            <Button
              className={css.btnRegister}
              variant="text"
              type="submit"
              sx={{
                mb: 1,
                background: 'rgba(190, 219, 176, 1)',
                color: 'rgba(22, 22, 22, 1)',
                fontFamily: 'Poppins',
                textTransform: 'unset',
                width: '344px',
                height: '49px',
                marginTop: '20px',
              }}
            >
              {authOperation === 'register' ? <Loader /> : <>Register Now</>}
            </Button>
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default RegisterForm;
