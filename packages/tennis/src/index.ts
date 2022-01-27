import { TennisGame } from './app/tennis';

function runTestGame() {
  const game = new TennisGame();
  game.firstPlayerScored(); // 15-0
  console.log(game.getScore());

  game.firstPlayerScored(); // 30-0
  console.log(game.getScore());

  game.firstPlayerScored(); // 40-0
  console.log(game.getScore());

  game.firstPlayerScored(); // 50-0
  console.log(game.getScore());

  console.log(game.isOver()); // true
  console.log(game.getWonBy()); // 'first'
}

runTestGame();
