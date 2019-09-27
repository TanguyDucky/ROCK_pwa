import { state, props } from 'cerebral/tags';
import { set } from 'cerebral/operators';
import { getRandomAction, setResults } from '../actions/game';
import * as firebaseProvider from '../providers/firebase';
import * as localStorageProvider from '../providers/localstorage';
import { Module } from 'cerebral';

export default Module({
  state: {
    currentGame: {
      userAction: null,
      opponentAction: null,
      result: null,
    },
    firebase: {
      isLoggedIn: false,
      isLoading: false,
      user: {
        uid: null,
        won: 0,
        draw: 0,
        lost: 0,
        total: 0,
      },
    },
  },
  signals: {
    initApp: [
      set(state`firebase.isLoading`, true),
      ({ localStorageProvider }) => localStorageProvider.getUUID(),
      ({ firebaseProvider }) => firebaseProvider.logIntoFirebase(),
      // context => console.log(context),
      set(state`firebase.isLoggedIn`, props`isLoggedIn`),
      set(state`firebase.user.uid`, props`uid`),
      ({ firebaseProvider, props }) =>
        firebaseProvider.getUserScores(props.uuid),
      set(state`firebase.isLoading`, false),
    ],
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
  providers: {
    localStorageProvider,
    firebaseProvider,
  },
});
