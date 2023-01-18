import React, { useState } from "react";

function TodoForm(props) {
  const [inputValue, setInput] = useState("");

  const handleChanges = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCard(inputValue);
    setInput("");
  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="what to do?"
        value={inputValue}
        onChange={handleChanges}
      />
      <div className="add-card">
        <button type="submit">+ Add Card</button>
      </div>
    </form>
  );
}

export default TodoForm;
