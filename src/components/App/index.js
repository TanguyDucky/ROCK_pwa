import React from 'react';
import FullFlexWrapper from '../FullFlexWrapper';
import CurrentFight from '../CurrentFight';
import ActionPicker from '../ActionPicker';

export default function App(props) {
  return (
    <FullFlexWrapper direction={'column'}>
      <CurrentFight flex_grow={2}></CurrentFight>
      <ActionPicker flex_grow={1}></ActionPicker>
    </FullFlexWrapper>
  );
}
