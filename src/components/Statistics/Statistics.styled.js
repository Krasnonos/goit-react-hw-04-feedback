import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  height: 20px;
  & + & {
    margin-left: 15px;
  }
`;

export const FeedbackText = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const AvarageText = styled.p`
  font-size: 20px;
  margin: 0;
  margin-top: 10px;
  color: ${p => changeColor(p.value)};
`;

function changeColor(value) {
  if (value < 33) {
    return '#f00f07';
  } else if (value < 66) {
    return '#f0c507';
  } else {
    return '#09d910';
  }
}
