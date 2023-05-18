import "./App.css";
import { Component } from "react";
import { Statistics } from "./components/statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(state => {
      return { good: state.good + 1 };
    });
  };

  neutralIncrement = () => {
    this.setState(state => {
      return { neutral: state.neutral + 1 };
    });
  };

  badIncrement = () => {
    this.setState(state => {
      return { bad: state.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((a, b) => a + b, 0);
    console.log("total: ", total);
    return total;
  };
  // countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    const { total } = this.countTotalFeedback();
    console.log(this.state);
    console.log(total);
    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <button
            type="button"
            onClick={this.goodIncrement}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.neutralIncrement}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.badIncrement}
          >
            Bad
          </button>
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          // positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
