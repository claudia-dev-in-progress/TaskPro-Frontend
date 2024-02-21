import React from 'react';
import icons from '../../images/sprite.svg';
import css from './WelcomePage.module.css';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(22, 22, 22, 1)',
            color: 'white',
          },
        },
      },
    },
  },
});

function WelcomePage() {
  return (
    <ThemeProvider theme={theme}>
      <section className={css.introContainer}>
        <div className={css.introWrapper}>
          <div className={css.logo} />
          <div className={css.logoWrapper}>
            <svg className={css.introSvg}>
              <use href={`${icons}#icon-logo`} />
            </svg>
            <h1 className={css.title}>Task Pro</h1>
          </div>
          <p className={css.secondText}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </p>
          <div className={css.authWrapper}>
            <NavLink
              className={css.buttonLinkRegister}
              id="register"
              to={'/auth/register'}
            >
              Registration
            </NavLink>
            <NavLink
              className={css.buttonLinkLogin}
              id="login"
              to={'/auth/login'}
            >
              Log In
            </NavLink>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default WelcomePage;
