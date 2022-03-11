import React from "react";

function Filterwrpapper({ setShowIncompleted, showIncompleted }) {
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter" className="filter-label">
        Show incompleted tasks
      </label>
      <input
        onChange={(e) => setShowIncompleted(e.target.checked)}
        type="checkbox"
        id="filter"
        checked={showIncompleted}
      />
    </div>
  );
}

export default Filterwrpapper;
