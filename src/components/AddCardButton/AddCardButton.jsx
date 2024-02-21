import React from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {CardFormAdd} from "../CardForm/CardFormAdd";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(21, 21, 21, 1)',
  borderRadius: '8px',
  border: "1px solid rgba(190, 219, 176, 0.50)",
  p: 4,
};


export default function AddCardButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        sx={{
          mb: 1,
          background: 'rgba(190, 219, 176, 1)',
          color: 'rgba(22, 22, 22, 1)',
          fontFamily: 'Poppins',
          textTransform: 'unset',
          width: '334px',
          height: '56px',
          marginTop: '20px',
          gap: '10px',
          '&:hover': {
            color: 'rgba(22, 22, 22, 1)',
            backgroundColor: 'rgba(190, 219, 176, 1)',
          },
        }}
        onClick={handleOpen}
      >
        <AddBoxIcon
          sx={{
            width: '28px',
            height: '28px',
          }}
        />
        <Typography
          sx={{
            color: 'rgba(22, 22, 22, 1)',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '14px',
            textTransform: 'none',
          }}
        >
          Add another card
        </Typography>
      </Button>
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
           <CardFormAdd />
        </Box>
      </Modal>
    </Box>
    
  );
}
