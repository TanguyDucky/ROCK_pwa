import { state } from 'cerebral';
import { set } from 'cerebral/factories';

export default {
  state: {
    currentGame: {
      userAction: 'rock',
      opponentAction: 'paper',
    },
  },
  sequences: {},
};
