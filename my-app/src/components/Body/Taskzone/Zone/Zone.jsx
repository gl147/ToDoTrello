import React from "react";
import Card from "./Card/Card";
import TodoForm from "./TodoForm/TodoForm";
import "./Zone.scss";
import { useState } from "react";

let Zone = (props) => {
  const [cards, setCards] = useState(props.cards);
  let [valueCardId, setValueCardId] = useState(7);

  const incrementCardID = () => {
    return setValueCardId(valueCardId + 1);
  };

  const addCard = (value) => {
    let card = {
      cardId: valueCardId,
      text: value,
    };
    setCards([...cards, card]);
    incrementCardID();
  };

  const removeCard = (id) => {
    setCards([...cards].filter((card) => card.cardId !== id));
  };

  return (
    <div className="task">
      <div className="task-header">
        <div className="task-name">{props.zoneName}</div>
        <div className="task-menu">...</div>
      </div>
      <div className="task-body">
        {cards.map((card) => (
          <Card
            text={card.text}
            id={card.cardId}
            addCard={addCard}
            removeCard={removeCard}
          />
        ))}
      </div>
      <TodoForm addCard={addCard} />
      <div className="task-footer">
        <div className="task-footer-menu">...</div>
      </div>
    </div>
  );
};

export default Zone;
