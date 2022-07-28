import PropTypes from 'prop-types';
import {
  List,
  Item,
  Text,
  FeedbackText,
  AvarageText,
} from './Statistics.styled';

export const Statistics = ({ statsArray, positivePercentage, total }) => {
  return (
    <>
      <List>
        {statsArray.map(item => (
          <Item key={item[0]}>
            <FeedbackText>
              {item[0]}: {item[1]}
            </FeedbackText>
          </Item>
        ))}
      </List>
      <Text>Total: {total}</Text>
      <AvarageText value={positivePercentage}>
        Positive Feedback: {positivePercentage}%
      </AvarageText>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  statsArray: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ),
};
