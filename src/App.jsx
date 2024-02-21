import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';

import { getBoards } from '../src/redux/boards/boardOperations';
import { selectIsLoggedIn } from './redux/auth/authSelectors';
import { selectBoardsList } from './redux/boards/boardSelectors';
import { selectActiveBoard } from './redux/boards/boardSelectors';

import { refresh } from './redux/auth/authOperations';
import Loader from './components/Loader/Loader';

import { selectUser } from './redux/auth/authSelectors';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import getThemePalette from 'components/Theme/getThemePalette';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'));
const RegisterForm = lazy(() =>
  import('./components/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const allBoards = useSelector(selectBoardsList);
  const activeBoard = useSelector(selectActiveBoard);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(refresh());
    dispatch(getBoards());
  }, [dispatch]);

  useEffect(() => {
    if (
      isLoggedIn &&
      allBoards.length > 0 &&
      Object.keys(activeBoard).length === 0
    ) {
      navigate(`/home/${allBoards[0]._id}`);
    }

    if (isLoggedIn && allBoards.length === 0) {
      navigate('/home');
    }
  }, [navigate, allBoards, activeBoard, isLoggedIn]);

  const theme = createTheme(getThemePalette(user.theme));
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home" component={<WelcomePage />} />
            }
          />
          <Route
            path="/home"
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />
          <Route
            path="/home/:boardName"
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />

          <Route
            path="/auth/:id"
            element={
              <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
            }
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
export default App;
