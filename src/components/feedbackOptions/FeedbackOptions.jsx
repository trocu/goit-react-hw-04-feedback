import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      {options.map(options => (
        <button
          className={css.button}
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
