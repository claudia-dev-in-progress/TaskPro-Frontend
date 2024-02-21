import React, { useState } from 'react';
import css from '../AddColumnModal/AddColumnModal.module.css';
import icons from '../../../images/sprite.svg';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#bedbb0',
          color: '#161616',
          borderRadius: '8px',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '-0.28px',
          padding: '10px 0 10px 0',

          '&:hover': {
            backgroundColor: '#151515',
            color: '#fff',
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
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #BEDBB0;',
          borderRadius: '8px',
          opacity: '0.4',
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

function AddColumnModal({ closeModal, onAddColumn, boardId, columnId }) {
  const [columnTitle, setColumnTitle] = useState('');

  const handleAddClick = event => {
    event.preventDefault();
    onAddColumn(columnTitle);
    closeModal(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={css.modalBackground}>
        <div className={css.modalContainer}>
          <div className={css.closeBtnBox}>
            <IconButton
              className={css.closeBtn}
              onClick={() => closeModal(false)}
            >
              <svg className={css.iconClose}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </IconButton>
          </div>
          <div className={css.body}>
            <div className={css.titleBox}>
              <h5>Add column</h5>
            </div>

            <form onSubmit={handleAddClick}>
              <div className={css.inputBox}>
                <FormControl variant="outlined">
                  <InputLabel
                    className={css.input}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.3)',
                    }}
                    type="text"
                  >
                    Title
                  </InputLabel>
                  <OutlinedInput
                    label="Title"
                    fullWidth
                    sx={{ width: '287px' }}
                    value={columnTitle}
                    onChange={e => setColumnTitle(e.target.value)}
                  />
                </FormControl>
              </div>
            </form>
            <div className={css.addBtnBox}>
              <Button className={css.addColumnBtn} onClick={handleAddClick}>
                <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
                  <use href={`${icons}#icon-plus-black`} />
                </svg>

                <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
                  <use href={`${icons}#icon-plus`} />
                </svg>

                <p>Add</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AddColumnModal;
