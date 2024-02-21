import React from 'react';
import { useState } from 'react';
import css from './MainPlaceholder.module.css';

import NewBoardMainModal from './NewBoardMainModal/NewBoardMainModal';
import { Typography } from '@mui/material';

function MainPlaceholder() {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);

  return (
    <div className={css.mainDashboardContainer}>
      <p
        sx={{
          color: 'text.disabled',
        }}
        className={css.mainDashboardParagraph}
      >
        Before starting your project, it is essential{' '}
        <button className={css.createBoard} type="button" onClick={toggleModal}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '18px',
              letterSpacing: -0.28,
              color: 'text.warning',
            }}
          >
            to create a board
          </Typography>
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      {openModal && <NewBoardMainModal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default MainPlaceholder;
