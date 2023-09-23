import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div className={css['feedback-options']}>
      {options.map(option => (
        <button
          className={css.button}
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
