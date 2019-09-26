import { state, props } from 'cerebral';
import { set } from 'cerebral/factories';
import { getRandomAction, setResults } from './game';

export default {
  state: {
    currentGame: {
      userAction: null,
      opponentAction: null,
      result: null,
    },
  },
  sequences: {
    pickUserAction: [
      set(state`currentGame.userAction`, props`action`),
      getRandomAction,
      set(state`currentGame.opponentAction`, props`randomAction`),
      setResults,
    ],
    playAgain: [
      set(state`currentGame.userAction`, null),
      set(state`currentGame.opponentAction`, null),
      set(state`currentGame.result`, null),
    ],
  },
};
