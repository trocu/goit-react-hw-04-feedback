import './App.css';
import { useEffect, useState } from 'react';
import { Section } from './components/section/Section';
import { FeedbackOptions } from './components/feedbackOptions/FeedbackOptions';
import { Statistics } from './components/statistics/Statistics';
import { Notification } from './components/notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad, total]);

  const feedbackIncrement = e => {
    const name = e.target.name;
    if (name === 'good') {
      setGood(good + 1);
    } else if (name === 'neutral') {
      setNeutral(neutral + 1);
    } else if (name === 'bad') {
      setBad(bad + 1);
    }
  };

  const feedbacksArray = ['good', 'neutral', 'bad'];
  const countPositiveFeedbackPercentage = () => Math.round((good / total) * 100);
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          onLeaveFeedback={feedbackIncrement}
          feedbacksArray={feedbacksArray}
        />
      </Section>
      <Section title='Statistics'>
        {!total && <Notification message='There is no feedback' />}
        {!!total && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
