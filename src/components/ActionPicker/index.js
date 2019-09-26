import React from 'react';
import FlexChildWrapper from '../FlexChildWrapper';
import FlexWrapper from '../FlexWrapper';
import Action from '../Action';
import { iconsMap } from '../../main/static';
import { connect } from '@cerebral/react';
import { sequences, state } from 'cerebral';

export default connect(
  {
    pickUserAction: sequences`pickUserAction`,
  },
  ({ pickUserAction, get, ...props }) => {
    return (
      <FlexChildWrapper bg_color={'#b2e4d5'}>
        <FlexWrapper direction={'row'}>
          <Action
            icon={iconsMap['rock']}
            onClick={() => pickUserAction({ action: 'rock' })}
          ></Action>
          <Action
            icon={iconsMap['scissor']}
            onClick={() => pickUserAction({ action: 'scissor' })}
          ></Action>
          <Action
            icon={iconsMap['paper']}
            onClick={() => pickUserAction({ action: 'paper' })}
          ></Action>
        </FlexWrapper>
      </FlexChildWrapper>
    );
  }
);
