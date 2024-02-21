import React, { useState } from 'react';
import css from '../NewBoardMainModal/NewBoardMainModal.module.css';
import icons from '../../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';

import { iconsBoard } from '../../../../constants/iconsBoard';
import { backgroundsBoard } from '../../../../constants/backgroundsBoard';

import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { updateBoard } from '../../../../redux/boards/boardOperations';
import { selectActiveBoard } from '../../../../redux/boards/boardSelectors';

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

function EditBoardActive({ setOpenModal }) {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('icon-project');
  const [background, setBackground] = useState('default');
  const selectedBoard = useSelector(selectActiveBoard);
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  const handleSaveChanges = () => {
    const updatedBoardData = {
      title: title,
    };

    dispatch(updateBoard(selectedBoard._id, updatedBoardData));
    handleCloseEditModal();
  };

  const handleCloseEditModal = () => {
    setOpenModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={css.modalBackground}>
        <div className={css.modalContainer}>
          <div className={css.closeBtnBox}>
            <IconButton
              className={css.closeBtn}
              onClick={() => setOpenModal(false)}
            >
              <svg className={css.iconClose}>
                <use href={`${icons}#icon-close`} />
              </svg>
            </IconButton>
          </div>
          <div className={css.body}>
            <div className={css.modalTitle}>
              <h5>Edit board</h5>
            </div>

            <div className={css.inputBox}>
              <FormControl variant="outlined">
                <InputLabel
                  className={css.input}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Title
                </InputLabel>
                <OutlinedInput
                  label="Title"
                  value={title}
                  fullWidth
                  sx={{ width: '287px' }}
                  onChange={handleTitleChange}
                />
              </FormControl>
            </div>

            <div className={css.iconsTitle}>
              <h6>Icons</h6>

              <div className={css.projectIcons}>
                {iconsBoard.map(iconItem => (
                  <div key={iconItem.value}>
                    <input
                      className={css.input_svg}
                      id={iconItem.value}
                      type="radio"
                      name={iconItem.value}
                      value={iconItem.value}
                      checked={icon === iconItem.value}
                      onChange={() => setIcon(iconItem.value)}
                    />
                    <label
                      className={css.label_svg}
                      htmlFor={iconItem.value}
                      onClick={() => setIcon(iconItem.value)}
                    >
                      <svg className={css.svg} width="18" height="18">
                        <use href={`${icons}#${iconItem.value}`} />
                      </svg>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className={css.backgroundsTitle}>
              <h6>Background</h6>
              <div className={css.projectBackgrounds}>
                {backgroundsBoard.map(backgrounds => (
                  <div key={backgrounds.title}>
                    <input
                      className={css.input_png}
                      id={backgrounds.title}
                      type="radio"
                      name={backgrounds.title}
                      checked={background === backgrounds.title}
                      onChange={() => setBackground(backgrounds.title)}
                    />
                    <label
                      className={css.label_png}
                      htmlFor={backgrounds.title}
                      onClick={() => setBackground(backgrounds.title)}
                    >
                      <img
                        className={css.png}
                        alt={backgrounds.title}
                        src={backgrounds.src}
                        width="28"
                        height="28"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className={css.createBtnBox}>
              <Button
                type="submit"
                onClick={handleSaveChanges}
                className={css.createBtn}
              >
                <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
                  <use href={`${icons}#icon-plus-black`} />
                </svg>

                <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
                  <use href={`${icons}#icon-plus`} />
                </svg>
                <p>Edit</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default EditBoardActive;
