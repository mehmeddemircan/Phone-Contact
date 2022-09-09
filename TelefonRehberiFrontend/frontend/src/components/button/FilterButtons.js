import React from "react";

const FilterButtons = ({ handleFilterOrderDesc, handleDefaultFilter }) => {
  return (
    <div class="row d-flex flex-row align-items-center my-3">
      <div>
        <button
          class="btn btn-outline-secondary rounded-pill "
          onClick={handleDefaultFilter}
        >
          The oldest the newest
        </button>
        <button
          class="btn btn-outline-secondary rounded-pill mx-3"
          onClick={handleFilterOrderDesc}
        >
          The newest to oldest
        </button>
        <button
          class="btn btn-outline-secondary rounded-pill mx-3"
          onClick={handleFilterOrderDesc}
        >
          The most liked
        </button>
        <button
          class="btn btn-outline-secondary rounded-pill mx-3"
          onClick={handleFilterOrderDesc}
        >
          The most disliked
        </button>
        <button
          class="btn btn-outline-secondary rounded-pill mx-3"
          onClick={handleFilterOrderDesc}
        >
          Edited comments
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
