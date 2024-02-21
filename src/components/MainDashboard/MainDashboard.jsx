import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBoardsList } from '../../redux/boards/boardSelectors';

import css from 'components/MainDashboard/MainDashboard.module.css';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';

import AddColumnModal from '../MainDashboard/AddColumnModal/AddColumnModal';
import Column from './Column/Column';
import MainPlaceholder from '../MainDashboard/MainPlaceholder/MainPlaceholder';
import icons from '../../images/sprite.svg';

function MainDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [columns, setColumns] = useState([]);
  const theme = useTheme();

  const boards = useSelector(selectBoardsList);

  const handleAddColumn = columnTitle => {
    console.log(' BoardId:', boards[0]._id);
    setColumns(prevColumns => [...prevColumns, { title: columnTitle }]);
    setOpenModal(false);
  };

  return (
    <section theme={theme} className={css.mainDashboard}>
      {boards.length > 0 ? (
        <>
          {columns.map((column, index) => (
            <Column key={index} title={column.title} />
          ))}
          <Button
            sx={{
              display: 'flex',
              gap: '8px',
              textTransform: 'none',
              borderRadius: '8px',
              color: '#fff',
              backgroundColor: '#121212',
              '&:hover': { backgroundColor: '#bedbb0', color: '#121212' },
            }}
            theme={theme}
            className={css.mainDashboardButton}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <svg className={`${css.iconPlus} ${css.iconPlusBlack}`}>
              <use href={`${icons}#icon-plus-black`} />
            </svg>

            <svg className={`${css.iconPlus} ${css.iconPlusWhite}`}>
              <use href={`${icons}#icon-plus`} />
            </svg>
            <p>Add another column</p>
          </Button>
          {openModal && (
            <AddColumnModal
              closeModal={() => setOpenModal(false)}
              onAddColumn={handleAddColumn}
            />
          )}
        </>
      ) : (
        <MainPlaceholder />
      )}
    </section>
  );
}

export default MainDashboard;
