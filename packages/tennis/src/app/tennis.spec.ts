import { TennisGame } from './tennis';

describe('TennisGame', () => {
  let game: TennisGame;
  beforeEach(() => {
    game = new TennisGame();
  });

  it('should be defined', () => {
    expect(game).toBeDefined();
  });

  describe('win by scoring after 40-0', () => {
    it('first player should win', () => {
      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('15-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('30-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('40-0');

      // first player wins by score 40-0
      game.firstPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('first');
    });
    it('second player should win', () => {
      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-15');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-30');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-40');

      // second player wins
      game.secondPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('second');
    });
  });

  describe('win by scoring 40-30', () => {
    it('first player should win', () => {
      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('15-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('30-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('40-0');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-15');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-30');

      // first player wins by score 40-30
      game.firstPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('first');
    });
    it('second player should win', () => {
      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('15-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('30-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('40-0');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-15');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-30');

      // first player wins by score 40-30
      game.firstPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('first');
    });
  });

  describe('win by scoring after advantage', () => {
    it('first player should win', () => {
      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('15-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('30-0');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('40-0');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-15');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('40-30');

      // second player scores and it becomes deuce
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('deuce-deuce');

      // first player gains advantage
      game.firstPlayerScored();
      expect(game.isOver()).toEqual(false);
      expect(game.getScore()).toEqual('advantage-deuce');

      // first player wins
      game.firstPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('first');
    });
    it('second player should win', () => {
      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-15');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-30');

      // second player scores
      game.secondPlayerScored();
      expect(game.getScore()).toEqual('0-40');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('15-40');

      // first player scores
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('30-40');

      // first player scores and it becomes deuce
      game.firstPlayerScored();
      expect(game.getScore()).toEqual('deuce-deuce');

      // second player gains advantage
      game.secondPlayerScored();
      expect(game.isOver()).toEqual(false);
      expect(game.getScore()).toEqual('deuce-advantage');

      // second player wins
      game.secondPlayerScored();

      expect(game.isOver()).toEqual(true);
      expect(game.getWonBy()).toEqual('second');
    });
  });
});
