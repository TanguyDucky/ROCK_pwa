import React from 'react';
import ActionButton from '../ActionButton';
import Icon50 from '../Icon50';

export default function(props) {
  return (
    <ActionButton onClick={props.onClick}>
      <Icon50
        src={props.icon}
        rotate={props.rotate}
        animate={props.animate}
      ></Icon50>
    </ActionButton>
  );
}
