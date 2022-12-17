import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        throw new Error("There isn't such option");
    }
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'} />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onleaveFeedback={leaveFeedback}
      />

      <Section title={'Statistics'} />
      {total >= 1 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

