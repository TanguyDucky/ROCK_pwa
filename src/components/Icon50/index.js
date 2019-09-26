import styled, { keyframes } from 'styled-components';

function getAnimation(animationName) {
  const leftPunch = keyframes`
  from {
    margin-left: -50px;
  }

  to {
    margin-left: 0px;
  }
`;

  const rightPunch = keyframes`
from {
  margin-right: -50px;
}

to {
  margin-right: 0px;
}
`;

  if (animationName === 'leftPunch') {
    return leftPunch;
  } else if (animationName === 'rightPunch') {
    return rightPunch;
  } else return 'noAnimation';
}

export default styled.img`
  max-width: 100%;
  max-height: 150px;
  height: auto;
  width: fit-content;
  transform: ${props => (props.rotate ? `rotate(${props.rotate})` : 'none')};
  animation: ${props => getAnimation(props.animate)} 0.5s alternate infinite;
`;
