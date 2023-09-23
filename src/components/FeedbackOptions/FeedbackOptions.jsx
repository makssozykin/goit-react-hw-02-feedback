import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div className="feedback-options">
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => leaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
