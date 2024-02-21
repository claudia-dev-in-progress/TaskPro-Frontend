import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import styles from '../Header/Header.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { ThemeComponent } from 'components/Theme/ThemeComponent';
import ProfileEditModal from 'components/ProfileEditModal/ProfileEditModal';
import { selectUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(21, 21, 21, 1)',
  border: '1px solid #000',
  borderRadius: '8px',
  boxShadow: '0px 4px 16px 0px rgba(190, 219, 176, 0.5)',
  p: 4,
};

export const Header = ({ onOpenSidebar, onOpenEdit }) => {
  const [auth] = useState(true);
  const user = useAuth();
  const theme = useTheme();
  const userAvatar = useSelector(selectUser);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDrawerOpen = () => {
    if (typeof onOpenSidebar === 'function') {
      onOpenSidebar();
    } else {
      console.error('onOpenSidebar is not a valid function');
    }
  };

  return (
    <Box className={styles.headerContainer}>
      <AppBar
        sx={{
          bgcolor: 'background.paper',
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{
              mr: 2,
              color: 'primary.error',
            }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.themeHeader}>
            <ThemeComponent />
          </div>

          <Typography
            theme={theme}
            variant="h1"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'right',
              font: 'Poppins',
              fontSize: '14px',
              fontWeight: '500',
              color: 'red',
            }}
          >
            {user.name}
          </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
                sx={{ marginLeft: 'auto', position: 'relative' }}
              >
                <Avatar
                  variant="rounded"
                  src={userAvatar.avatarUrl}
                  alt={user.name}
                />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            <CloseIcon />
          </IconButton>
          <ProfileEditModal />
        </Box>
      </Modal>
    </Box>
  );
};
