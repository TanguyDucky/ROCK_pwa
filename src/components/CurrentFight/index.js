import React from 'react';
import { state, sequences } from 'cerebral';
import { connect } from '@cerebral/react';
import FlexChildWrapper from '../FlexChildWrapper';
import Action from '../Action';
import { iconsMap } from '../../main/static';

export default connect(
  {
    currentGame: state`currentGame`,
  },
  ({ currentGame, get, ...props }) => {
    return (
      <FlexChildWrapper
        flex_grow={props.flex_grow}
        bg_color={'#f2a6a6'}
        className={props.className}
      >
        <Action
          icon={iconsMap[currentGame.userAction]}
          rotate={'45deg'}
          animate={'leftPunch'}
        ></Action>
        <Action
          icon={iconsMap[currentGame.opponentAction]}
          rotate={'-45deg'}
          animate={'rightPunch'}
        ></Action>
      </FlexChildWrapper>
    );
  }
);
