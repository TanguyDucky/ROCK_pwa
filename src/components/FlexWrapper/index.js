import React from 'react';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
`;
