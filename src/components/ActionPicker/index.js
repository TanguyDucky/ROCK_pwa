import React from 'react';
import FlexChildWrapper from '../FlexChildWrapper';
import FlexWrapper from '../FlexWrapper';
import Action from '../Action';
import { iconsMap } from '../../main/static';

export default function(props) {
  return (
    <FlexChildWrapper bg_color={'#b2e4d5'}>
      <FlexWrapper direction={'row'}>
        <Action icon={iconsMap['rock']}></Action>
        <Action icon={iconsMap['scissor']}></Action>
        <Action icon={iconsMap['paper']}></Action>
      </FlexWrapper>
    </FlexChildWrapper>
  );
}
