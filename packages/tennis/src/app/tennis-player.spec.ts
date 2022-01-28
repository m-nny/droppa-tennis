import { TennisPlayer } from './tennis-player';

describe('TennisPlayer', () => {
  let player: TennisPlayer;
  beforeEach(() => {
    player = new TennisPlayer('first');
  });

  it('should be defined', () => {
    expect(player).toBeDefined();
  });

  it('should start with 0 score', () => {
    expect(player.score).toBe(0);
  });
  it('should start with gain scores up to 40', () => {
    expect(player.score).toBe(0);

    player.addScore();
    expect(player.score).toBe(15);

    player.addScore();
    expect(player.score).toBe(30);

    player.addScore();
    expect(player.score).toBe(40);
  });
  it('should take advantage after 40', () => {
    player.score = 40;

    player.addScore();
    expect(player.score).toBe('advantage');
  });
});
