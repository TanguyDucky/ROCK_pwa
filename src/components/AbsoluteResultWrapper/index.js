import styled from 'styled-components';

export default styled.h1`
  display: ${props => (props.hidden ? 'none' : 'block')};
  position: absolute;
  top: 0%;
  left: 50%;
  margin-left: -100;
  width: 200px;
  text-align: center;
  font-size: 4rem;
  color: white;
`;
