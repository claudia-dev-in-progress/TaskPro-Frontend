import React from 'react';

import css from '../HeaderDashboard/HeaderDashboard.module.css';

import Filters from 'components/Filters/Filters';

function HeaderDashboard({ boardTitle }) {
  return (
    <section className={css.headerDashboard}>
      <h1 className={css.headerDashboardTitle}>{boardTitle}</h1>
      <Filters />
    </section>
  );
}

export default HeaderDashboard;
