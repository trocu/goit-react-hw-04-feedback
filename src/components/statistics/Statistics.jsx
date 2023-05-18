// import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {/* <p>Positive: {positivePercentage}</p> */}
    </div>
  );
};
