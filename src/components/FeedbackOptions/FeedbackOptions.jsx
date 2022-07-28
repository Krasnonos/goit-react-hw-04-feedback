import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <List>
      {options.map(button => (
        <Item key={button}>
          <Button type="button" onClick={() => onLeaveFeedback(button)}>
            {button}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
