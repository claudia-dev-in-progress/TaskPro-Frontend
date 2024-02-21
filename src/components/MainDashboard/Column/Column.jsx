import React, { useState } from "react";
import css from "./Column.module.css";
import icons from "../../../images/sprite.svg";

import CardFormColumn from "../../CardForm/CardFormColumn";
import { CardFormAdd } from "../../CardForm/CardFormAdd";

import AddCardButton from "components/AddCardButton/AddCardButton";

function Column({ title, description, boardId, columnId }) {
  const [openModal, setOpenModal] = useState(false);

  const handleAddCard = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={css.columnContainer}>
      <div className={css.columnHeader}>
        <span className={css.columnHeaderTitle}>{title}</span>
        <div className={css.columnHeaderControls}>
          <button className={css.editBtn}>
            <svg className={css.editSvg} width={16} height={16}>
              <use href={`${icons}#icon-pencil`} />
            </svg>
          </button>
          <button className={css.deleteBtn}>
            <svg className={css.deleteSvg} width={16} height={16}>
              <use href={`${icons}#icon-trash`} />
            </svg>
          </button>
        </div>
      </div>
      <div className={css.cardListContainer}>
        <ul className={css.cardList}>
          <li>
            <CardFormColumn />
          </li>
        </ul>
      </div>
      <div className={css.BtnContainer}>
        <AddCardButton />

        {openModal && (
          <div className="modalOverlay">
            <CardFormAdd
              onSubmit={handleAddCard}
              onClose={handleCloseModal}
              boardId={boardId}
              columnId={columnId}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Column;
