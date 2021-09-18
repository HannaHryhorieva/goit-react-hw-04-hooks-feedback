import { useState } from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default function App() {
  const [goodOption, setGoodOption] = useState(0);
  const [neutralOption, setNeutralOption] = useState(0);
  const [badOption, setBadOption] = useState(0);

  const countTotalFeedback = () => {
    return goodOption + neutralOption + badOption;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round(((goodOption + neutralOption) / totalFeedback) * 100);
  };

  const handleFeedback = e => {
    e.preventDefault();
    const label = e.target.name;
    switch (label) {
      case 'good':
        setGoodOption(state => state + 1);
        break;
      case 'neutral':
        setNeutralOption(state => state + 1);
        break;
      case 'bad':
        setBadOption(state => state + 1);
        break;
      default:
        break;
    }
  };

  const arrOptions = ['good', 'neutral', 'bad'];
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={arrOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={goodOption}
            neutral={neutralOption}
            bad={badOption}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}
