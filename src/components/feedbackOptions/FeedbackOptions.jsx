import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(options => (
        <button
          key={options}
          type="button"
          name={options}
          onClick={onLeaveFeedback}
        >
          {`${options}`.charAt(0).toUpperCase() + `${options}`.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
