import React, { useReducer } from 'react';
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from 'components/Feedback';

function feedbackReducer(state, action) {
  const feedbackType = action.target.name;
  return { ...state, [feedbackType]: state[feedbackType] + 1 };
}

export const App = () => {
  const [state, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutural: 0,
    bad: 0,
  });
  console.log(state);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value);
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const feedbackPercentage = (100 / countTotalFeedback()) * good;
    return Math.round(feedbackPercentage) || 0;
  };

  const total = countTotalFeedback();

  return (
    <div
      style={{
        height: '100vh',
        padding: '60px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispatch}
        />
      </Section>

      <Section moreStyles={'__statistics'} title={'Statistics'}>
        {total ? (
          <Statistics
            feedbackTypes={state}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
