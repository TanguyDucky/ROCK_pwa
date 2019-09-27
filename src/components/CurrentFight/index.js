import React from 'react';
import { state } from 'cerebral/tags';
import { connect } from '@cerebral/react';
import FlexChildWrapper from '../FlexChildWrapper';
import Action from '../Action';
import FlexCentered from '../FlexCentered';
import { iconsMap, resultsAssets } from '../../main/static';

export default connect(
  {
    userAction: state`currentGame.userAction`,
    opponentAction: state`currentGame.opponentAction`,
    result: state`currentGame.result`,
  },
  ({ userAction, opponentAction, test, result, ...props }) => {
    if (userAction && opponentAction && result) {
      return (
        <FlexChildWrapper
          flex_grow={props.flex_grow}
          bg_color={resultsAssets[result].bgColor}
          className={props.className}
        >
          <Action
            icon={iconsMap[userAction]}
            rotate={'45deg'}
            animate={'leftPunch'}
          ></Action>
          <Action
            icon={iconsMap[opponentAction]}
            rotate={'-45deg'}
            animate={'rightPunch'}
          ></Action>
        </FlexChildWrapper>
      );
    } else {
      return (
        <FlexChildWrapper
          flex_grow={props.flex_grow}
          bg_color={'#f2a6a6'}
          className={props.className}
        >
          <FlexCentered>Pick an action</FlexCentered>
        </FlexChildWrapper>
      );
    }
  }
);
