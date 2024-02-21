import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Typography, Drawer } from '@mui/material';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import icon from '../../images/sprite.svg';
import { selectUser } from '../../redux/auth/authSelectors';
import NewBoardMainModal from 'components/MainDashboard/MainPlaceholder/NewBoardMainModal/NewBoardMainModal';

import { selectBoardsList } from '../../redux/boards/boardSelectors';
import { logout } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import EditBoardActive from 'components/MainDashboard/MainPlaceholder/EditBoardActive/EditBoardActive';
import {
  SideBarStyled,
  LogoIcon,
  PlusIcon,
  Thumb,
  LogoutIcon,
  BoardsContainer,
  TitleBox,
  IconTitle,
  IconsBox,
  Edit,
  Delete,
  IconLink,
  Title,
  IconButton,
  PlusButton,
} from './SideBar.Styled';
import Help from 'components/Help/Help';

const SideBar = ({ active, onClick }) => {
  const [openModal, setOpenModal] = useState(false);

  const boards = useSelector(selectBoardsList);

  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const theme = useTheme();
  const user = useSelector(selectUser);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const logoSvg =
    user.theme === 'light' && user.theme !== 'violet'
      ? '#icon-logo-light'
      : user.theme === 'dark'
      ? '#icon-logo-light'
      : '#icon-logo-violet';

  const plusSvg =
    user.theme === 'light' && user.theme !== 'violet'
      ? '#icon-plus1'
      : user.theme === 'dark'
      ? '#icon-plus-2'
      : '#icon-plus3';

  const pencilSvg =
    user.theme === 'light' && user.theme !== 'violet'
      ? '#icon-pencil'
      : user.theme === 'dark'
      ? '#icon-pencil-1'
      : '#icon-pencil-1';

  const trashSvg =
    user.theme === 'light' && user.theme !== 'violet'
      ? '#icon-trash1'
      : user.theme === 'dark'
      ? '#icon-trash2'
      : '#icon-trash2';

  const logoutSvg =
    user.theme === 'light' && user.theme !== 'dark'
      ? '#icon-logout1'
      : user.theme === 'violet'
      ? '#icon-logout1'
      : '#icon-logout';

  const drawerContent = (
    <SideBarStyled
      sx={{
        bgcolor: 'background.error',

        '&::-webkit-scrollbar': {
          backgroundColor: 'background.warning',
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'background.info',
        },
      }}
    >
      <Thumb>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '60px',
            bg: '#121212',
          }}
        >
          <LogoIcon>
            <use href={icon + `${logoSvg}`}></use>
          </LogoIcon>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              letterSpacing: 0.7,
              fontWeight: 600,
              color: 'text.disabled',
            }}
          >
            Task Pro
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontSize: '12px',
            letterSpacing: 0.7,
            fontWeight: 400,
            color: 'text.disabled',
            opacity: '50%',
          }}
        >
          My boards
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            borderTop: '1px solid',
            borderColor: '#FFFFFF1A',
            padding: '14px 0',
            marginTop: '8px',
            marginBottom: '40px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              maxWidth: '92px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: 0.7,
              color: 'primary.info',
            }}
          >
            Create a new board
          </Typography>
          <PlusButton
            sx={{
              marginTop: '-2px',
              marginRight: '6px',
              width: '16px',
              backgroundColor: theme.palette.background.error,
            }}
            onClick={handleOpenModal}
          >
            <PlusIcon>
              <use href={icon + `${plusSvg}`}></use>
            </PlusIcon>
          </PlusButton>
        </Box>
        {openModal && (
          <NewBoardMainModal setOpenModal={setOpenModal} active={openModal} />
        )}

        <BoardsContainer theme={theme}>
          {boards.map(board => (
            <TitleBox key={board.title}>
              <Title theme={theme}>
                <IconTitle>
                  <use href={icon + '#icon-project'}></use>
                </IconTitle>
                {board.title}
              </Title>

              <IconsBox theme={theme}>
                <IconButton type="button" onClick={() => handleOpenEditModal()}>
                  <Edit>
                    <use href={icon + `${pencilSvg}`}></use>
                  </Edit>
                </IconButton>

                <IconLink>
                  <Delete>
                    <use href={icon + `${trashSvg}`}></use>
                  </Delete>
                </IconLink>
              </IconsBox>
            </TitleBox>
          ))}
        </BoardsContainer>
      </Thumb>
      <Thumb>
        <Help
          sx={{
            backgroundColor: 'background.default',
          }}
        />
        <Box
          sx={{
            marginTop: '24px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: 0.7,
          }}
          onClick={handleLogout}
        >
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: 0,
              minWidth: 0,
              border: 0,
              '&:hover': {
                backgroundColor: 'inherit',
                border: 0,
              },
            }}
            onClick={handleLogout}
          >
            <LogoutIcon theme={theme}>
              <use href={icon + `${logoutSvg}`}></use>
            </LogoutIcon>
            <Typography
              sx={{
                color: 'primary.info',
                fontFamily: 'Poppins',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '16px',
                letterSpacing: 0.7,
              }}
              variant="body2"
            >
              Log out
            </Typography>
          </Button>
        </Box>
      </Thumb>
    </SideBarStyled>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer
          variant="temporary"
          open={active}
          onClose={onClick}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '@media (min-width: 1440px)': {
              display: { xs: 'block', sm: 'none' },
            },

            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 225,
            },

            '@media (min-width: 768px)': {
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 260,
                padding: '0px',
              },
            },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            '@media (max-width: 1279px)': {
              display: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 225,
            },
            '@media (min-width: 768px)': {
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 260,
              },
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
      {openEditModal && <EditBoardActive setOpenModal={setOpenEditModal} />}
    </>
  );
};

export default SideBar;
