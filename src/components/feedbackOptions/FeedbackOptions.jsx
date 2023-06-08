import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, feedbacksArray }) => {
  return (
    <div
      className={css.feedback}
      onClick={onLeaveFeedback}
    >
      {feedbacksArray.map((value, index) => (
        <button
          className={css.button}
          key={index}
          type='button'
          name={value}
          onClick={onLeaveFeedback}
        >
          {`${value}`.charAt(0).toUpperCase() + `${value}`.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  feedbacksArray: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
