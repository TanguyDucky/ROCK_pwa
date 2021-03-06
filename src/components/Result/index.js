import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { resultsAssets } from '../../main/static';
import AbsoluteResultWrapper from '../AbsoluteResultWrapper';
import PlayAgain from '../PlayAgain';

export default connect(
  {
    result: state`currentGame.result`,
    playAgain: signal`playAgain`,
  },
  ({ result, playAgain, ...props }) => {
    return (
      <AbsoluteResultWrapper hidden={!result}>
        {!!result ? resultsAssets[result].text : ''}

        <div>
          <PlayAgain onClick={() => playAgain()}>
            <h1>Play again</h1>
          </PlayAgain>
        </div>
      </AbsoluteResultWrapper>
    );
  }
);
