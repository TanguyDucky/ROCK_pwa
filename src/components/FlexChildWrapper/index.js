import React from 'react';
import styled from 'styled-components';

export default styled.div`
  flex: ${props => (props.flex_grow ? props.flex_grow : 'auto')};
  background-color: ${props => (props.bg_color ? props.bg_color : 'white')};
  display: flex;
`;
