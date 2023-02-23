import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FeedbackBtnStyled } from 'components/Feedback/Feedback.styled';

// import scss from 'components/Feedback/Feedback.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <FeedbackBtnStyled
          key={nanoid(10)}
          type="button"
          name={option}
          onClick={e => onLeaveFeedback(e)}
        >
          {option}
        </FeedbackBtnStyled>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
