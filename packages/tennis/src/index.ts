import { TennisGame } from './app/tennis';

function runTestGame() {
  const game = new TennisGame();
  game.firstPlayerScored(); // 15-0
  console.log(game.toString());

  game.firstPlayerScored(); // 30-0
  console.log(game.toString());

  game.firstPlayerScored(); // 40-0
  console.log(game.toString());

  game.firstPlayerScored(); // 50-0
  console.log(game.toString());

  console.log(game.isOver()); // true
  console.log(game.wonBy()); // 'first'
}

runTestGame();
