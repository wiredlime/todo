import React from "react";

function Form({ handleSubmit, handleInputChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleInputChange}
        value={newTask}
        type="text"
        id="newitem"
        placeholder="Add new tasks ..."
      />
      <button type="submit">+</button>
    </form>
  );
}

export default Form;
