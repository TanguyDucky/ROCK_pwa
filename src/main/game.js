export function getRandomAction() {
  const actionsArray = ['rock', 'scissor', 'paper'];
  const randomAction =
    actionsArray[Math.floor(Math.random() * actionsArray.length)];
  return { randomAction };
}

export function getWinner(userAction, opponentAction) {
  if (userAction === opponentAction) {
    return 'draw';
  } else if (
    (userAction === 'paper' && opponentAction === 'rock') ||
    (userAction === 'scissor' && opponentAction === 'paper') ||
    (userAction === 'rock' && opponentAction === 'scissor')
  ) {
    return 'user';
  } else {
    return 'opponent';
  }
}

export function setResults({ state }) {
  const userAction = state.get(`currentGame.userAction`);
  const opponentAction = state.get(`currentGame.opponentAction`);

  const winner = getWinner(userAction, opponentAction);
  state.set(`currentGame.result`, winner);
}
