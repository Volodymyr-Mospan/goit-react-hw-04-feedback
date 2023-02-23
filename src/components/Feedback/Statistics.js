import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import scss from 'components/Feedback/Feedback.module.scss';

export const Statistics = ({ feedbackTypes, total, positivePercentage }) => {
  return (
    <>
      {Object.entries(feedbackTypes).map(feedbackType => (
        <p key={nanoid()}>
          {feedbackType[0]}: {feedbackType[1]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p
        style={{
          color: getColor(positivePercentage / 100),
          textShadow: '0px 0px 3px black',
        }}
      >
        Positive feesdback: {`${positivePercentage}%`}
      </p>
    </>
  );
};

function getColor(value) {
  const hue = ((0 + value) * 120).toString(10);
  return `hsl(${hue},100%,50%)`;
}

Statistics.propTypes = {
  feedbackTypes: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
