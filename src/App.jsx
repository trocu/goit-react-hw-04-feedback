import "./App.css";
import { Component } from "react";
import { Section } from "./components/section/Section";
import { FeedbackOptions } from "./components/feedbackOptions/FeedbackOptions";
import { Statistics } from "./components/statistics/Statistics";
import { Notification } from "./components/notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = e => {
    const name = e.target.name;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => acc + state, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
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
  }
}
