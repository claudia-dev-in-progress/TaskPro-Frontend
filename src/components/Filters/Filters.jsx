import * as React from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalFilter } from 'components/ModalFilter/ModalFilter';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ display: 'flex', gap: '5px' }}>
        <FilterAltOutlinedIcon
          sx={{ color: 'primary.error', fontSize: 'large' }}
        />
        <Typography
          sx={{
            textTransform: 'none',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '14px',
            color: 'primary.error',
          }}
        >
          Filters
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
          <ModalFilter />
        </Box>
      </Modal>
    </div>
  );
}
