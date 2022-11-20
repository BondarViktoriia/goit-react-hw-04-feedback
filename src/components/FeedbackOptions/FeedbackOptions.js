import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedBackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(option => (
      <Button
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propsType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
