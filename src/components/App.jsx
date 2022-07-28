import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const choseAnswer = answearValue => {
    switch (answearValue) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const totalAnswears = good + neutral + bad;
  const avarageValue =
    good === 0 ? Number(0) : Number(((good / totalAnswears) * 100).toFixed(0));

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={choseAnswer}
        />
      </Section>
      <Section title="Statistics">
        {totalAnswears === 0 ? (
          <h1>No feedback given</h1>
        ) : (
          <Statistics
            total={totalAnswears}
            positivePercentage={avarageValue}
            statsArray={[
              ['good', good],
              ['neutral', neutral],
              ['bad', bad],
            ]}
          />
        )}
      </Section>
    </div>
  );
};
