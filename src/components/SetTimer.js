import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SetTimer({
  title,
  count,
  handleDecrease,
  handleIncrease,
}) {
  const id = title.toLowerCase();

  return (
    <div className="timer-container">
      <h2 id={`${id}-label`}>
        {title}
        <br />
        Length
      </h2>
      <div className="flex actions-wrapper">
        <button
          id={`${id}-decrement`}
          onClick={handleDecrease}
          type="button"
          aria-label={`Decrease ${title} length`}
        >
          <FaArrowDown />
        </button>

        <span id={`${id}-length`}>{count}</span>

        <button
          id={`${id}-increment`}
          onClick={handleIncrease}
          type="button"
          aria-label={`Increase ${title} length`}
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}

SetTimer.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
};

export default SetTimer;
